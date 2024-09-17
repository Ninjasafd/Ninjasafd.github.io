import React from 'react';
import Image from 'next/image';

// Function to generate a random hex color
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
      className="text-center p-10 bg-black relative min-h-screen overflow-hidden"
    >
      {/* Star Background */}
      <div className="absolute inset-0 opacity-50 z-0">
        {stars}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="relative rounded-full h-48 w-48 mx-auto border border-white transition-opacity duration-3000">
          <Image
            src="/icons/space-rainbow-ico.ico"
            alt="drawn picture"
            layout="fill"
            className="absolute inset-0 object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="content mt-8">
          <div className="inner">
            <h2 className="text-4xl font-bold text-white">
              Hello! I'm <span className="text-blue-500">Jeffrey Pan</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Welcome to my website... It's still a work in progress
            </p>
          </div>
        </div>
        <nav className="mt-8">
          <ul className="flex justify-center space-x-6 text-lg text-gray-300">
            <li><a href="#intro" className="hover:text-blue-500">About</a></li>
            <li><a href="#work" className="hover:text-blue-500">Work</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
