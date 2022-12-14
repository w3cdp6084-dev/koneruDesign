import Image from 'next/image'
import styles from '../styles/components/About.module.scss'

export default function About() {
    return (
      <main className={styles.main}>
        <div className={styles.itemWrap}>
          <div className={styles.imagesOutline}>
            <Image src="/images/logo.png" width={140} height={140} alt="logo" className={styles.img} />
          </div>
          <p className={styles.aboutNickname}>KONEKONE</p>
          <p className={styles.aboutName}>
            Yusuke Morið±<br />
            Designer/Developerð³
          </p>
          <p className={styles.aboutDesc}>
          KONEKONEã¨ããå±å·ã§ããã¶ã¤ãã¼ã¨ãã­ã³ãã¨ã³ãããã£ã¦ã¾ãã<br />
          ãã©ã³ãã£ã³ã°/ã³ã³ã»ããã¡ã¤ã¯ã®è¨­è¨ãå¤§åã«ããã¢ãã¥ããããããªã£ã¦ãã¾ãã<br />
          å°ãã§ãåèã«ãªãã°å¹¸ãã§ãð¸
          </p>
        </div>
      </main>
    );
  }