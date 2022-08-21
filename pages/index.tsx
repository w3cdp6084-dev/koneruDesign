import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
type Props = {
  blog: Array<Blog>;
};
export default function Home({ blog }: Props) {
  return (
    <>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
       記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
       {blog.map(blog => (
         <div className="rounded overflow-hidden shadow-lg" key={blog.id}>
           <div className="px-6 py-4">{blog.title}</div>
           <div className="px-6 py-4">
             <Link href={`/article/${blog.id}`} passHref>
               <a>{blog.title}</a>
             </Link>
           </div>
         </div>
       ))}
     </div>
    </>
    );
  }
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blog',queries: { limit: 4, offset: 0}});
  return {
    props: {
      blog: data.contents,
    },
  };
};