import React from 'react';
import { FaServer, FaLaptopCode, FaRobot, FaMobileAlt } from 'react-icons/fa';
import AboutBox from './AboutBox';

export default function About() {
    return (
        <section id="about" className="py-20 text-white">
            <div className="container mx-auto max-w-7xl px-6 md:px-10">
                {/* Overview Section */}
                <div className="text-left mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Overview</h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
                        I’m Jeffrey Pan, currently a senior studying Computer Science & Mathematics at{' '}
                        <a className="text-[#CFAE70] hover:underline" href="https://www.vanderbilt.edu" target="_blank" rel="noopener noreferrer">
                            Vanderbilt University
                        </a>. My key areas of expertise include <span className="text-[#25b2da]">Full Stack Development</span>,
                        <span className="text-[#25b2da]"> Machine Learning</span>, and an interest in <span className="text-[#25b2da]">Cybersecurity</span> and
                        <span className="text-[#25b2da]"> Mobile Development</span>.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    <AboutBox
                        title="Back-end Development"
                        description="Experienced in building scalable server-side applications."
                        Icon={FaServer}
                    />
                    <AboutBox
                        title="Full Stack Development"
                        description="Proficient in both frontend and backend development."
                        Icon={FaLaptopCode}
                    />
                    <AboutBox
                        title="Machine Learning"
                        description="Building AI models for data analysis and real-world applications."
                        Icon={FaRobot}
                    />
                    <AboutBox
                        title="Mobile Development"
                        description="Developing cross-platform mobile applications."
                        Icon={FaMobileAlt}
                    />
                </div>
            </div>
        </section>
    );
}
