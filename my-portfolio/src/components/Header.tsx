import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MailIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <a href="https://github.com/Ninjasafd" aria-label="GitHub" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/jeffrey-pan-a352491b5/" aria-label="LinkedIn" className="text-gray-300 ml-4 hover:text-white">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
        </a>
      </div>

      <div className="flex flex-row items-center text-gray-300">
        <a href="#contact" aria-label="Email" className="text-gray-300 hover:text-white">
          <MailIcon className="h-8 w-8 text-white" />
        </a>
      </div>
    </header>
  );
}
