import React from 'react';
import Image from 'next/image';
import { MailIcon } from '@heroicons/react/solid';

export default function Header() {
    return (
        <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20">
            <div className="flex flex-row items-center">
                <a href="https://github.com/Ninjasafd" aria-label="GitHub" className="text-gray-300 hover:text-white">
                    <Image
                        src="/icons/github_icon.png"
                        alt="GitHub Icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </a>
                <a href="https://www.linkedin.com/in/jeffrey-pan-a352491b5/" aria-label="LinkedIn" className="ml-4 text-gray-300 hover:text-white">
                    <Image
                        src="/icons/linkedin_icon.png"
                        alt="LinkedIn Icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </a>
            </div>
            <div className="flex flex-row items-center">
                <a href="mailto:JeffreyPan95@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white">
                    <MailIcon className="h-6 w-6 text-white" />
                </a>
            </div>
        </header>
    );
}
