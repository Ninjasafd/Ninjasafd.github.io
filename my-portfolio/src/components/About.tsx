import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-10 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="flex-shrink-0 mb-10 md:mb-0 md:mr-10 w-64 h-64 xl:w-80 xl:h-80">
                    <Image
                        src="/images/space-rainbow.jpg"
                        alt="Jeffrey Pan"
                        width={256}
                        height={256}
                        className="rounded-full md:rounded-lg object-cover w-full h-full"
                    />
                </div>

                {/* Text Section */}
                <div className="space-y-8 text-center md:text-left">
                    <h4 className="text-4xl font-semibold">
                        A <span className="underline decoration-[#20AAB1]/50">bit of</span> background
                    </h4>
                    <p className="text-lg leading-relaxed">
                        Hello! I'm Jeffrey Pan, a senior studying Computer Science & Mathematics at{' '}
                        <a
                            className="text-[#CFAE70] hover:underline"
                            href="https://www.vanderbilt.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vanderbilt University
                        </a>, while also working towards an M.S. in Computer Science. I have diligently built a solid
                        foundation in <span className="text-[#25b2da] uppercase">Full Stack Development, artificial intelligence, and machine learning</span> 
                        and I'm always excited to learn more! Recently, I've taken an interest in 
                        <span className="text-[#25b2da] uppercase"> Cybersecurity and Mobile Development</span>.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I am driven by a constant desire to learn and grow, and I am always on the lookout for new opportunities 
                        to further develop my skills, both professionally and technically. My commitment and passion for programming 
                        are evident in the projects, internships, and coursework I have undertaken so far. The field of computer science 
                        is always full of possibilities, and I am eager to continue nurturing my abilities to become a more knowledgeable 
                        and well-rounded programmer and person.
                    </p>
                </div>
            </div>
        </section>
    );
}
