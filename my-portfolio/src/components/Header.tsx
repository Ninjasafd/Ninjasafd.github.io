import React from 'react';
import Image from 'next/image';
import { MailIcon } from '@heroicons/react/solid';

export default function Header() {
    return (
        <header className="sticky top-0 py-3 bg-black z-20 bg-opacity-50">
            <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section: Personal Branding */}
                <div className="flex items-center space-x-4">
                    <a href="/" className="flex items-center space-x-2 hover:opacity-80">
                        <Image
                            src="/icons/space-rainbow-ico.ico"
                            alt="Personal Logo"
                            width={45}
                            height={45}
                            className="rounded-full"
                        />
                        <span className="text-lg font-bold text-white font-inter">Jeffrey Pan</span>
                    </a>
                </div>

                {/* Center Section: Navigation Links */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <nav className="flex space-x-8">
                        <a href="#home" className="text-white hover:text-gray-300">Home</a>
                        <a href="#about" className="text-white hover:text-gray-300">About</a>
                        <a href="#experience" className="text-white hover:text-gray-300">Experience</a>
                        <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
                    </nav>
                </div>

                {/* Right Section: Social Icons and Download CV */}
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/Ninjasafd" aria-label="GitHub" className="hover:text-gray-300">
                        <Image
                            src="/icons/github_icon.png"
                            alt="GitHub Icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/jeffrey-pan-a352491b5/" aria-label="LinkedIn" className="hover:text-gray-300">
                        <Image
                            src="/icons/linkedin_icon.png"
                            alt="LinkedIn Icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </a>
                    <a href="mailto:JeffreyPan95@gmail.com" aria-label="Email" className="hover:text-gray-300">
                        <MailIcon className="h-6 w-6 text-white" />
                    </a>
                    <a href="/cv.pdf" className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
}
