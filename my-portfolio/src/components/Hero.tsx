import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center p-10" 
      style={{ backgroundImage: "url('/images/background_nebula.jpg')" }}
    >
      <div className="hero-content">
        {/* Astronaut Image */}
        <div className="relative rounded-full h-48 w-48 mx-auto border-4 border-white">
          <Image 
            src="/path_to_astronaut_image/astronaut.png" 
            alt="Astronaut with face" 
            layout="fill" 
            className="absolute inset-0 object-cover w-full h-full rounded-full"
          />
        </div>

        {/* Main Text */}
        <div className="content mt-8">
          <div className="inner">
            <h1 className="text-5xl sm:text-6xl font-bold text-white">Hello! I'm <span className="text-purple-400">Jeffrey Pan</span></h1>
            <p className="mt-4 text-xl text-gray-300">Welcome to my space-themed portfolio!</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="flex justify-center space-x-6 text-lg">
            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#work" className="text-gray-300 hover:text-white">Work</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
