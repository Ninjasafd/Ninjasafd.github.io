import React from 'react';
import Image from 'next/image';
import { MailIcon } from '@heroicons/react/solid';

export default function Header() {
    return (
        <header className="sticky top-0 p-5 bg-black z-20">
            <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section: Social Icons */}
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/Ninjasafd" aria-label="GitHub" className="text-gray-300 hover:text-white">
                        <Image
                            src="/icons/github_icon.png"
                            alt="GitHub Icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/jeffrey-pan-a352491b5/" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
                        <Image
                            src="/icons/linkedin_icon.png"
                            alt="LinkedIn Icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </a>
                </div>

                {/* Center Section: Navigation Links */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <nav className="flex space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white">About</a>
                        <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
                        <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
                    </nav>
                </div>

                {/* Right Section: Email Icon and Download CV */}
                <div className="flex items-center space-x-4">
                    <a href="mailto:JeffreyPan95@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white">
                        <MailIcon className="h-6 w-6" />
                    </a>
                    <a href="/cv.pdf" className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
}
