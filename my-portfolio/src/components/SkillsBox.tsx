import React from 'react';

interface SkillsBoxProps {
  image: string;
  alt: string;
  name: string;
}

export default function SkillsBox({ image, alt, name }: SkillsBoxProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={alt} className="h-16 w-16 object-contain mb-4" />
      <h4 className="text-xl font-semibold text-white">{name}</h4>
    </div>
  );
}
