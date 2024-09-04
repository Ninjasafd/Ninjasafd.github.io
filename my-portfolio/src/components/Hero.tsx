import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="header" className="text-center p-10">
      <div className="relative rounded-full h-48 w-48 mx-auto border transition-opacity duration-3000">
        <Image 
          src="/space-rainbow-ico.ico" 
          alt="drawn picture" 
          layout="fill" 
          className="absolute inset-0 object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="content mt-8">
        <div className="inner">
          <h2 className="text-4xl font-bold">Hello! I'm <span className="text-blue-500">Jeffrey Pan</span></h2>
          <p className="mt-4 text-lg">Welcome to my website... It's still a work in progress</p>
        </div>
      </div>
      <nav className="mt-8">
        <ul className="flex justify-center space-x-6 text-lg">
          <li><a href="#intro" className="hover:text-blue-500">About</a></li>
          <li><a href="#work" className="hover:text-blue-500">Work</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </section>
  );
}
