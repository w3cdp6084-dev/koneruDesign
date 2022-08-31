import styles from '../styles/components/404.module.scss';
export default function Custom404() {
    return (
      <main className="main max-w-6xl px-10 py-6 mx-auto">
        <div className="">
          <h2 className={styles.uTitle404}>404</h2>
          <p className={styles.caption}>🐱ページがありません🐱</p>
        </div>
      </main>
    );
  }