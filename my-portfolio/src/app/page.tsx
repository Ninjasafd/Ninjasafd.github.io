import Head from 'next/head';
import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero';
import About from '../components/About.tsx'
import WorkExperience from '../components/WorkExperience.tsx'
import Skills from '../components/Skills.tsx'
import Footer from '../components/Footer.tsx'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Footer />
    </>
  );
}
