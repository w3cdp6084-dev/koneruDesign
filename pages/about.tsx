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
            Yusuke Mori🐱<br />
            Designer/Developer🍳
          </p>
          <p className={styles.aboutDesc}>
          KONEKONEという屋号で、デザイナーとフロントエンドをやってます。<br />
          ブランディング/コンセプトメイクの設計を大切にし、モノづくりをおこなっています。<br />
          少しでも参考になれば幸いです😸
          </p>
        </div>
      </main>
    );
  }