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
          <a className="tracking-wide mr-5 text-white font-bold">HOME</a>
          <a className="tracking-wide mr-5 text-white font-bold">ABOUT</a>
          <a className="tracking-wide mr-5 text-white font-bold">CONTACT</a>
          <form>   
            <div className="relative">
              <input type="search" id="default-search" className="block p-4 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputOutline" placeholder="Test" required/>
                <div className="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none searchBtn">
                  <img src="../images/face01.png" alt="icon" width={32} />
                </div>
            </div>
          </form>
        </nav>
      </div>
    </header>
  )
}