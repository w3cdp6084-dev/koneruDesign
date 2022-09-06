import styles from '../styles/components/Contact.module.scss'
import Link from 'next/link';
export default function Contact() {
    return (
      <main className={styles.main}>
        <div className={styles.itemWrap}>
            <Link href="/">
                <a>
                    Email: w3cdp6084@gmail.com
                </a>
            </Link>
            <Link href="https://twitter.com/w3cdp6084w3cdp">
                <a>
                    Twitter: https://twitter.com/w3cdp6084w3cdp
                </a>
            </Link>
            <Link href="https://www.facebook.com/w3cdpmori">
                <a>
                    Facebook: https://www.facebook.com/w3cdpmori
                </a>
            </Link>
            <Link href="https://github.com/w3cdp6084-dev">
                <a>
                    Github: 
                </a>
            </Link>
        </div>
      </main>
    );
  }