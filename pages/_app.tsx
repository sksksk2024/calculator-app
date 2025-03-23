import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calculator App</title>
        <meta
          name="description"
          content="A cool calculator app for all your needs"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
