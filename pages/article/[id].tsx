import { GetServerSideProps } from 'next';
import type { Blog } from '../../types/blog';
import { client } from '../../libs/client';
import Moment from 'react-moment'
import { renderToc } from '../../libs/render-toc'; 
import ReturnTopButton from '../../components/ReturnTopButton';
import BreadCrumbs from "../../components/breadcrumbs";
import { TableOfContents } from '../../components/TableOfContent';
type Props = {
    blog: Blog;
};

export default function Article({ blog }: Props) {
  const toc = renderToc(blog.body);
  return (
    <div className="w-full mx-auto">
      <div className="px-10 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto">
          <div className='w-10/12 mx-auto'>
            <BreadCrumbs 
              blog={[
                {
                  string: "トップページ",
                  path: "/",
                },
                {
                  string: blog.title,
                }
              ]}
            />
          </div>
          <div className='mt-20 mb-6 w-10/12 mx-auto flex justify-start items-center'>
            <Moment format="YYYY/MM/DD" className='text-xs font-bold date mr-10 text-white'>
              {blog.publishedAt}
            </Moment>
            <p className='text-sm text-white py-1 px-2 category'>#{blog.category.name}</p>
          </div>
          <div className="mt-2 w-10/12 mx-auto">
            <div className="tracking-wider sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">
              {blog.title}
            </div>
          </div>
          <div>
            {blog.toc_visible && (
            <TableOfContents toc={toc} />
            )}
          </div>
          <div className="mt-2 w-10/12 mx-auto">
            <div className="text-sm leading-relaxed tracking-wider text-white mt-4 rounded" dangerouslySetInnerHTML={{__html: blog.body}}></div>
          </div>
        </div>
        <ReturnTopButton />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  return {
    props: {
        blog: data,
    },
  };
};