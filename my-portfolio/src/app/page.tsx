import Head from 'next/head';
import React from 'react';
import Header from '../components/Header.tsx';

export default function HomePage() {
  return (
    <>
    <Header />
      <Head>
        <title>Jeffrey Pan - Portfolio</title>
        <meta name="description" content="Jeffrey Pan's personal portfolio showcasing projects, skills, and work experience." />
        <link rel="icon" href="/icons/space-rainbow-ico.ico" type="image/x-icon" />
      </Head>
      <div>
        <section id="hero">
          <div className="relative rounded-full h-100 w-100 mx-auto border">
            <img 
              src="/icons/github-icon.jpg" 
              alt="GitHub Icon" 
              width="50" 
              height="50" 
              className="object-cover" 
            />
          </div>
        </section>
      </div>
    </>
  );
}
