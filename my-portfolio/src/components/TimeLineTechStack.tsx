import React from 'react';

interface TechStackProps {
  techStack: string[]; // Array of tech stack image URLs
}

export default function TechStack({ techStack }: TechStackProps) {
  return (
    <div className="flex space-x-3 mb-4">
      {techStack.map((tech, i) => (
        <img key={i} className="h-6 w-6" src={tech} alt={`Tech ${i}`} />
      ))}
    </div>
  );
}
