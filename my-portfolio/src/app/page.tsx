import Head from 'next/head';
import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero';
import About from '../components/About.tsx'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Jeffrey Pan - Portfolio</title>
        <meta name="description" content="Jeffrey Pan's personal portfolio showcasing projects, skills, and work experience." />
        <link rel="icon" href="/icons/space-rainbow-ico.ico" type="image/x-icon" />
      </Head>
      <Header />
      <Hero />
      <About />
    </>
  );
}
