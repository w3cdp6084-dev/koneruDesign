import Link from 'next/link';
import { Pagination } from '../../components/Pagination';
import { client } from 'libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import { BLOG_PER_PAGE } from '../settings/siteSettings';
import type { Blog } from '../../types/blog';
type Props = {
  blog: Array<Blog>;
  totalCount: number
};

export default function BlogPageId({ blog, totalCount }:Props) {
  return (
    <div>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </div>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / BLOG_PER_PAGE)).map((repo) => `/page/${repo}`);
  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params) throw new Error("Error Page Number Not Found");
  const pageId = Number(params.id);
  const data = await client.getList({
      endpoint: "blog",
      queries: {
          offset: (Number(pageId) - 1) * BLOG_PER_PAGE,
          limit: BLOG_PER_PAGE
      }
  });
  return {
      props: {
          blog: data.contents,
          totalCount: data.totalCount,
      },
  };
};