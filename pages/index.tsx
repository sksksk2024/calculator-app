'use client';

import Calculator from '@/components/Calculator';
import Head from 'next/head';
// COMPONENTS

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculator App</title>
        <meta name="Calculator App" content="Home Page" />
        <meta property="og:title" content="Home Page" />
      </Head>
      <Calculator />
    </>
  );
}
