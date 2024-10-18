import React from 'react';
import Image from 'next/image';

// Function to generate a random hex color for stars
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random star size between 2px and 8px
function getRandomSize() {
  return Math.floor(Math.random() * 10) + 4; // Generates a random size between 2 and 8
}

function getRandomShapeClass() {
  const shapes = ['star-shape-1', 'star-shape-2', 'star-shape-3', 'star-shape-4', ''];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

export default function Hero() {
  const stars = Array.from({ length: 25 }).map((_, index) => {
    const size = getRandomSize();
    return (
      <div
        key={index}
        className={`star ${getRandomShapeClass()}`}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: getRandomColor(),
        }}
      />
    );
  });

  return (
    <section
      id="hero"
      className="text-center p-10 bg-black relative flex items-center justify-between px-6 md:px-10 min-h-screen"
    >
      {/* Star Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        {stars}
      </div>

      {/* Left Section: Intro & Astronaut */}
      <div className="z-10 w-full md:w-1/2 flex flex-col items-start justify-center text-left space-y-6 md:ml-10">
        {/* Astronaut */}
        <div className="w-24 h-24 bg-blue-500 rounded-full relative overflow-hidden">
          <Image
            src="/icons/space-rainbow-ico.ico"
            alt="Astronaut Illustration"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Short Intro */}
        <h2 className="text-6xl font-bold text-white">
          Hello! I'm <span className="text-blue-500">Jeffrey</span>
        </h2>
        <p className="text-lg text-gray-300">
          Welcome to my portfolio where I showcase my projects and work experience.
        </p>

        {/* Mobile Navigation */}
        <nav className="mt-8 md:hidden">
          <ul className="flex justify-center space-x-6 text-lg text-gray-300">
            <li><a href="#intro" className="hover:text-blue-500">About</a></li>
            <li><a href="#work" className="hover:text-blue-500">Work</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Right Section: Planets and Stars */}
      <div className="z-0 relative w-full md:w-1/2 h-full">
        {/* Star Background */}
        <div className="absolute inset-0 opacity-50 z-0">
          {stars}
        </div>

        {/* Planets */}
        <div className="absolute top-1/4 left-5 planet planet-1"></div>
        <div className="absolute bottom-20 right-10 planet planet-2"></div>

        {/* Sun */}
        <div className="absolute top-5 right-10 sun"></div>

        {/* Moon with Craters */}
        <div className="absolute top-1/4 left-1/3 moon">
          <div className="crater crater-1"></div>
          <div className="crater crater-2"></div>
          <div className="crater crater-3"></div>
          <div className="crater crater-4"></div>
        </div>
      </div>
    </section>
  );
}
