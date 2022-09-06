import { BLOG_PER_PAGE } from '../pages/settings/siteSettings'
import Link from 'next/link';
type Props = {
  totalCount: number;
};
export const Pagination = ({ totalCount }: Props) => {
  const range = (start: number, end: number) =>
      [...Array(end - start + 1)].map((_, i) => start + i)
  const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
  return (
      <div>
          {range(1, pageCount).map((number, index) => (
              <div key={index}>
                  <Link href={`/page/${number}`}>{number}</Link>
              </div>
          ))}
      </div >
  );
};