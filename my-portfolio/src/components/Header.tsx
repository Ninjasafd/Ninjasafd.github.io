"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MailIcon } from '@heroicons/react/solid';
import styles from './Header.module.css'; // Your CSS module for the header

export default function Header() {
    const [activeLink, setActiveLink] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to update the active link
    const handleLinkClick = (link: string): void => {  // Add typing to 'link' and return type 'void'
        setActiveLink(link);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className="relative max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 flex-wrap">

                {/* Left Section: Personal Branding */}
                <div className="flex items-center space-x-2">
                    <a href="/" className="flex items-center space-x-2 hover:opacity-80">
                        <Image
                            src="/icons/space-rainbow-ico.ico"
                            alt="Personal Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-md lg:text-lg font-bold text-white font-inter space-glow">Jeffrey Pan</span>
                    </a>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                    {/* Navigation with active state */}
                    <nav className={styles.navBubble}>
                        <a
                            href="#home"
                            onClick={() => handleLinkClick('home')}
                            className={`${styles.navLink} ${activeLink === 'home' ? styles.active : ''}`}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => handleLinkClick('about')}
                            className={`${styles.navLink} ${activeLink === 'about' ? styles.active : ''}`}
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            onClick={() => handleLinkClick('experience')}
                            className={`${styles.navLink} ${activeLink === 'experience' ? styles.active : ''}`}
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            onClick={() => handleLinkClick('skills')}
                            className={`${styles.navLink} ${activeLink === 'skills' ? styles.active : ''}`}
                        >
                            Skills
                        </a>
                    </nav>
                </div>

                {/* Hamburger Menu Button (Visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {/* Hamburger icon */}
                        <svg
                            className="w-8 h-8 fixed top-4 right-4 z-50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Dropdown Menu (Mobile View) */}
                {isMenuOpen && (
                    <div className="md:hidden fixed right-4 top-14 w-1/2 bg-gradient-to-b from-gray-800 to-gray-900 bg-opacity-90 shadow-lg py-6 px-4 rounded-lg z-10">
                        <nav className="flex flex-col space-y-6 text-white text-md text-center">
                            <a
                                href="#home"
                                className="hover:text-gray-300"
                                onClick={toggleMenu} // Close the menu when clicked
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="hover:text-gray-300"
                                onClick={toggleMenu} // Close the menu when clicked
                            >
                                About
                            </a>
                            <a
                                href="#experience"
                                className="hover:text-gray-300"
                                onClick={toggleMenu} // Close the menu when clicked
                            >
                                Experience
                            </a>
                            <a
                                href="#skills"
                                className="hover:text-gray-300"
                                onClick={toggleMenu} // Close the menu when clicked
                            >
                                Skills
                            </a>
                        </nav>
                    </div>
                )}


                {/* Right Section: Social Icons and Download CV */}
                <div className="hidden md:flex items-center space-x-4">
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
                    <a href="/cv.pdf" className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition hidden lg:inline-block download-cv">
                        Download CV
                    </a>
                </div>
            </div>
        </header>
    );
}

