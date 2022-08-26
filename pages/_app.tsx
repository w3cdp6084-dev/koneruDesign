import '../styles/globals.scss';
import '../styles/style.scss';
import '../libs/test';
import * as React from "react";
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
