import React from 'react';
import SkillsBox from './SkillsBox';

export default function Skills() {
    // Updated Skills data array
    const skills = [
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/8b0429a7636a8fc6d0777055cf06a3986679e862-1869x2048.png',
            alt: 'Python',
            name: 'Python',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/98f8c6142120c10cf54cae263c3b575e2830b246-1822x2048.png',
            alt: 'C++',
            name: 'C++',
        },
        {
            image: 'icons/swift-logo-vector.svg',
            alt: 'Swift',
            name: 'Swift',
        },
        {
            image: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/285_R_Project_logo-512.png',
            alt: 'R',
            name: 'R',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/f06d550daf64c17076d0d61bd2ab80d6a0f5fd0f-512x512.png',
            alt: 'Java',
            name: 'Java',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/01cf7a321e6eebcddea8d5a56317d5193891d7d7-1388x1388.svg',
            alt: 'JavaScript',
            name: 'JavaScript',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/68b9be602a95227490b5214a51e45bf42f5ad51f-1200x1200.png',
            alt: 'TypeScript',
            name: 'TypeScript',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/16ba323ef3a287b443c2d8622d28ef5a97b1ec41-2300x2000.png',
            alt: 'React',
            name: 'React',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/fad4d5e2ed7db23cddf380646f73b0a666d391d5-512x512.png',
            alt: 'C#',
            name: 'C#',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/595715a0cfea0a4738f6d9d74d15a75305d655d1-720x720.webp',
            alt: 'HTML',
            name: 'HTML',
        },
        {
            image: 'https://cdn.sanity.io/images/o2zb0e1f/production/533f6077360144308cbf7eb91c0670f1e2c6ff59-1280x1280.webp',
            alt: 'CSS',
            name: 'CSS',
        },
        {
            image: 'https://cyclr.com/wp-content/uploads/2022/03/ext-550.png',
            alt: 'Microsoft SQL Server',
            name: 'Microsoft SQL Server',
        },
        {
            image: 'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png',
            alt: 'Go',
            name: 'Go',
        },
    ];

    return (
        <section id="skills" className="py-20 text-white">
            <div className="container mx-auto max-w-7xl px-6 md:px-10">
                {/* Title Section */}
                <div className="text-left mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Skills</h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl">
                        Below are some of the key technologies I have worked with across various projects, from
                        back-end development, front-end development, machine learning, and more.
                    </p>
                </div>

                {/* Skills Boxes Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {/* Mapping SkillsBox Components here */}
                    {skills.map((skill) => (
                        <SkillsBox
                            key={skill.name}
                            image={skill.image}
                            alt={skill.alt}
                            name={skill.name}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
}
