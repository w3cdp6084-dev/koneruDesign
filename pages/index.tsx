import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
import Moment from 'react-moment'
// import Image from 'next/image';
type Props = {
  blog: Array<Blog>;
};
export default function Home({ blog }: Props) {
  return (
    <div className='wrap'>
      <section className="mt-20 ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {blog.map(blog => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`/article/${blog.id}`} passHref>
              <div className="dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg" key={blog.id}>
                <div>
                <img src={blog.thumbnail.url} alt="thumbnail" />
                </div>
                <div className="text-white">
                  <p>{blog.title}</p>
                </div>
                <div className='flex justify-between items-center pt-3'>
                  <Moment format="YYYY/MM/DD" className='text-xs font-bold text-white'>
                    {blog.publishedAt}
                  </Moment>
                </div>
              </div>
           </Link>
          ))}
        </div>
      </section>
    </div>
    )
  }
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'blog',queries: { limit: 4, offset: 0}});
  return {
    props: {
      blog: data.contents,
    },
  };
};