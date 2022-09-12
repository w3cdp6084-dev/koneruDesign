import { BLOG_PER_PAGE } from '../pages/settings/siteSettings'
import styles from '../styles/components/Pagination.module.scss'
import Link from 'next/link';
type Props = {
  totalCount: number;
  currentPage?: number;
};
export const Pagination = ({ totalCount, currentPage = 1 }: Props) => {
  const range = (start: number, end: number) =>
      [...Array(end - start + 1)].map((_, i) => start + i)
  const pageCount = Math.ceil(totalCount / BLOG_PER_PAGE)
  const getPaginationItem = (p: number) => {
    if (p === currentPage) return <div className={styles.current}>{p}</div>
    return <Link href={`/page/${p}`}>{p}</Link>
}
  return (
      <div className={styles.pagination}>
          {range(1, pageCount).map((number, index) => (
              <div key={index} className={styles.paginationNumber}>
                   {getPaginationItem(number)}
              </div>
          ))}
      </div >
  );
};