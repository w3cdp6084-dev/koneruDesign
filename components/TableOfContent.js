import styles from '../styles/components/toc.module.scss'
export const TableOfContents = ({ toc }) => {
    return (
      <div className={styles.toc}>
        <p className="TableOfContentsHead text-base font-bold text-black">目次</p>
        <ul>
          {toc.map(data => (
            <li key={data.id}>
              <a href={`#${data.text}`} className="text-sm text-black p-3 m-1 block">
                {data.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };