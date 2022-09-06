import Link from 'next/link';
import { Pagination } from '../../components/Pagination';
import Moment from 'react-moment'
import { client } from 'libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import { BLOG_PER_PAGE } from '../settings/siteSettings';
import type { Blog } from '../../types/blog';
type Props = {
  blog: Array<Blog>;
  totalCount: number;
  currentPage: number;
};

export default function Home({ blog, totalCount, currentPage }: Props) {
  return (
    <div className='wrap'>
      <section className="mt-20">
        <div className="mx-auto masonry sm:masonry-sm md:masonry-md">
          {blog.map(blog => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/article/${blog.id}`} passHref>
              <div className="card p-4 rounded-lg bg-gray-500 p-4 break-inside" key={blog.id}>
                <div>
                  <img src={blog.thumbnail.url} alt="thumbnail" className='rounded-2xl' layout='fill'/>
                </div>
                <div className="text-white text-xl mt-4 font-bold">
                  <p>{blog.title}</p>
                </div>
                <div>
                  <div className='text-sm text-white mb-6 mt-2 ellipsis' dangerouslySetInnerHTML={{__html: blog.body}}></div>
                </div>
                <div className='my-6'>
                  <p className='text-sm text-white py-1 px-2 category'>#{blog.category.name}</p>
                </div>
                <div className='mt-2'>
                  <Moment format="YYYY/MM/DD" className='text-xs font-bold text-white'>
                    {blog.publishedAt}
                  </Moment>
                </div>
              </div>
           </Link>
          ))}
        </div>
        <Pagination totalCount={totalCount} currentPage={currentPage} />
      </section>
    </div>
    )
  }

export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(repos.totalCount / BLOG_PER_PAGE)).map((repo) => `/page/${repo}`);
  return { paths, fallback: false };
};


export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({ params }) => {
  if (!params) throw new Error("Error Page Number Not Found🐱");
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
          currentPage: pageId
      },
  };
};