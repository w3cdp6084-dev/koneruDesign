import Link from "next/link";
import type { Blog } from '../../types/blog';
import { client } from "../../libs/client";
type Props = {
    category: Array<Blog>;
    blog: Array<Blog>;
    totalCount: number;
  };
  
export default function Category({ blog, category }:Props) {
    return (
      <div>
        <ul>
          {category.map((category) => (
            <li key={category.id}>
              <Link href={`/category/${category.id}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // データをテンプレートに受け渡す部分の処理を記述します
  export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog" });
    // カテゴリーコンテンツの取得
    const categoryData = await client.get({ endpoint: "categories" });
  
    return {
      props: {
        blog: data.contents,
        category: categoryData.contents,
      },
    };
  };