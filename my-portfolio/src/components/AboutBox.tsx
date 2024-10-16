import React from 'react';
import { IconType } from 'react-icons';

interface AboutBoxProps {
    title: string;
    description: string;
    Icon: IconType;
}

const AboutBox = ({ title, description, Icon }: AboutBoxProps) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between">
            {/* Icon Wrapper */}
            <div className="flex items-center justify-center h-24 w-24 bg-transparent mb-4">
                <Icon size={48} />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-2">{title}</h4>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
    );
};

export default AboutBox;
