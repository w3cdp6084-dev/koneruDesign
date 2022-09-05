import Link from 'next/link';
import { Pagination } from '../../../components/Pagination';
import { useRouter } from 'next/router'

const PER_PAGE = 5; 

export default function BlogPageId({ blog, totalCount }) {
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


export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blog" });

  const pageNumbers = [];

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);

  return { paths, fallback: false};
};


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries:{offset:(id - 1)*5, limit:5 }});

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};