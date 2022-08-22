import Link from 'next/link'
import styles from '../styles/components/Header.module.scss';
export default function Header() {
  return (
    <header className={styles.wrap}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-3xl ml-3 text-white font-bold">LOGO</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white hover:text-gray-900">HOME</a>
          <a className="mr-5 text-white hover:text-gray-900">ABOUT</a>
          <a className="mr-5 text-white hover:text-gray-900">CONTACT</a>

        </nav>
      </div>
    </header>
  )
}