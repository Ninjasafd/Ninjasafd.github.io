import React from 'react';
import TimelineItem from './TimeLineItem';

const experiences = [
    {
        company: "Epic Systems",
        position: "Software Engineering Intern",
        duration: "May 2023 - Present",
        logo: "https://seekvectorlogo.com/wp-content/uploads/2019/04/epic-systems-corporation-vector-logo-small.png",
        techStack: [
            "/icons/swift-logo-vector.svg",
            "https://cdn.sanity.io/images/o2zb0e1f/production/68b9be602a95227490b5214a51e45bf42f5ad51f-1200x1200.png",
            "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
        ],
        description: "Implemented iBeacon technology using Swift, integrating the MyChart Mobile App with Welcome check-in kiosks."
    },
    {
        company: "NASA Ames Research Center",
        position: "Software Engineering Intern",
        duration: "May 2022 - August 2022",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png",
        techStack: [
            "https://cdn.sanity.io/images/o2zb0e1f/production/8b0429a7636a8fc6d0777055cf06a3986679e862-1869x2048.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pytest_logo.svg/640px-Pytest_logo.svg.png"
        ],
        description: "Designed and deployed a comprehensive testing framework for NASA Ames Sherlock web portals."
    },
    {
        company: "Vanderbilt University",
        position: "Graduate Research Assistant",
        duration: "August 2021 - May 2024",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Vanderbilt_U_wordmark.svg/1024px-Vanderbilt_U_wordmark.svg.png",
        techStack: [
            "https://cdn.sanity.io/images/o2zb0e1f/production/8b0429a7636a8fc6d0777055cf06a3986679e862-1869x2048.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pytest_logo.svg/640px-Pytest_logo.svg.png"
        ],
        description: "Implemented an API interface to access and deploy AI models across cloud providers, improving research workflows."
    },
    {
        company: "Vanderbilt University",
        position: "Head Teaching Assistant",
        duration: "August 2021 - May 2024",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Vanderbilt_U_wordmark.svg/1024px-Vanderbilt_U_wordmark.svg.png",
        techStack: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/C%2B%2B_Logo.svg/1024px-C%2B%2B_Logo.svg.png"
        ],
        description: "Led a team of 21 TAs to ensure consistent grading and assisted over 150 students each semester in the C++ Software Design course."
    }
];

export default function TimelineContainer() {
    return (
        <section id="work-experience" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto max-w-7xl px-6">
                <div className="relative mx-auto max-w-5xl">
                    <div className="absolute w-1 bg-[#20AAB1] top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    {experiences.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            experience={exp}
                            isLeft={index % 2 === 1}  // Alternate sides
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
