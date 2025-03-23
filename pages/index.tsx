'use client';

import Calculator from '@/components/Calculator';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Calculator App</title>
        <meta name="description" content="Home Page of the Calculator App" />
        <meta property="og:title" content="Home Page - Calculator App" />
        <meta
          property="og:description"
          content="Welcome to the homepage of the Calculator App"
        />
      </Head>
      <Calculator />
    </>
  );
}
