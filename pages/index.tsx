import { client } from '../libs/client';
import type { Blog } from '../types/blog';
import Link from 'next/link';
import Moment from 'react-moment'
import { Pagination } from '../components/Pagination';
import { BLOG_PER_PAGE } from './settings/siteSettings';

type Props = {
  blog: Array<Blog>;
  totalCount: number;
  category: string;
};

export default function Home({ blog, totalCount, category }: Props) {
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
                <div className='flex items-baseline justify-between'>
                  {category.map((category) => (
                    <div key={category.id}>
                      <li className="text-sm text-white py-1 px-2 category">
                        <Link href={`/category/${category.id}`}>
                          <a>#{category.name}</a>
                        </Link>
                      </li>
                    </div>
                  ))}
                  <div className='mt-2'>
                    <Moment format="YYYY/MM/DD" className='text-xs font-bold text-white'>
                      {blog.publishedAt}
                    </Moment>
                  </div>
                </div>
              </div>
           </Link>
          ))}
        </div>
        <Pagination totalCount={totalCount} />
      </section>
    </div>
    )
  }
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "blog", queries: { limit: BLOG_PER_PAGE } });
  const categoryData = await client.get({ endpoint: "categories"});
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      category: categoryData.contents,
    },
  };
};