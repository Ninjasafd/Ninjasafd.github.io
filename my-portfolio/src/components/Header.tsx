import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <div className="flex flex-row items-center">
        <a href="https://github.com/Ninjasafd" aria-label="GitHub" className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faGithub} size="lg" className="text-white" />
        </a>
        <a href="https://www.linkedin.com/in/jeffrey-pan-a352491b5/" aria-label="LinkedIn" className="ml-4 text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-white" />
        </a>
        <a href="mailto:JeffreyPan95@gmail.com" aria-label="Email" className="ml-4 text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-white" />
        </a>
      </div>
    </header>
  );
}
