import '../styles/globals.scss';
import '../styles/style.scss';
import * as React from "react";
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import NextNprogress from 'nextjs-progressbar'
import Navbar from '../components/Nav/Navbar';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='wrap'>
        <NextNprogress />
        <Navbar />
        <Header />
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp
