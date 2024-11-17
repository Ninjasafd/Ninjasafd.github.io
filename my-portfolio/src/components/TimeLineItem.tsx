import React from 'react';
import TechStack from './TimeLineTechStack';

interface TimelineItemProps {
  experience: {
    company: string;
    position: string;
    duration: string;
    logo: string;
    techStack: string[];
    description: string;
  };
  isLeft: boolean;
}

export default function TimelineItem({ experience, isLeft }: TimelineItemProps) {
  return (
    <div className="relative mb-10 flex items-center justify-center w-full">
      {/* Date on the opposite side */}
      <div
        className={`absolute ${isLeft ? 'right-[55%]' : 'left-[55%]'
          } text-gray-400 text-sm space-glow hidden md:block`} // Hidden on mobile (md: breakpoint)
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <p>{experience.duration}</p>
      </div>

      {/* Work Experience Content */}
      <div
        className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full w-1/2 md:w-[45%] relative ${isLeft ? 'ml-auto' : 'mr-auto'
          }`}
      >
        <h3 className="text-2xl font-bold text-white">
          {experience.position}
        </h3>
        <p className="text-md font-medium text-[#CFAE70] mb-2">
          {experience.company}
        </p>

        {/* Tech Stack */}
        <TechStack techStack={experience.techStack} />

        <p className="text-sm font-semibold text-gray-300 mt-4">{experience.description}</p>
      </div>

      {/* Timeline Circle */}
      <span
        className="absolute w-12 h-12 bg-[#20AAB1] rounded-full flex items-center justify-center z-10"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          left: '50%',
          marginLeft: '-1.5rem',
        }}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={experience.logo}
          alt={`${experience.company} logo`}
        />
      </span>

      {/* Date for mobile view */}
      <div
        className="block md:hidden absolute left-4 text-gray-400 text-sm space-glow" // Visible on mobile, left aligned
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <p>{experience.duration}</p>
      </div>
    </div>
  );
}
