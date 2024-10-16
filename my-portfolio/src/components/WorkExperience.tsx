import React from 'react';

const experiences = [
  {
    company: "Epic Systems",
    position: "Software Engineering Intern",
    duration: "May 2023 - Present",
    logo: "https://seekvectorlogo.com/wp-content/uploads/2019/04/epic-systems-corporation-vector-logo-small.png",
    points: [
      "Implemented iBeacon technology using Swift, integrating the MyChart Mobile App with Welcome check-in kiosks.",
      "Established real-time communication using SignalR (Typescript and C#), improving patient identification efficiency.",
      "Constructed an alternative check-in process utilizing Bluetooth Low Energy, reducing check-in time by 30%."
    ]
  },
  {
    company: "NASA Ames Research Center",
    position: "Software Engineering Intern",
    duration: "May 2022 - August 2022",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png",
    points: [
      "Designed and deployed a testing framework for the NASA Ames Sherlock web portals.",
      "Generated test cases using Python Playwright and Pytest to simulate user interactions.",
      "Built a testing environment that conducts weekly tests and generates automated test reports."
    ]
  },
  {
    company: "Vanderbilt Research Department",
    position: "Research Assistant",
    duration: "January 2021 - Present",
    logo: "https://sportslogohistory.com/wp-content/uploads/2022/05/vanderbilt_commodores_2023-pres_a.png",
    points: [
      "Developed a unified interface for cloud Machine Learning services, boosting efficiency by over 40%.",
      "Implemented API calls to prominent cloud providers, including Google Cloud, Microsoft Azure, and Amazon AWS.",
      "Authored and submitted a 6-page Systems Demonstration paper to the ACL 2023 tool track."
    ]
  }
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Work Experience Title */}
        <h2 className="text-4xl font-bold text-center mb-10">Work Experience</h2>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-5xl">
          {/* Centered Timeline Line */}
          <div className="absolute w-1 bg-[#20AAB1] top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-10 p-6 md:w-1/2 ${
                index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'
              } relative`}
            >
              {/* Timeline Dot */}
              <span className="absolute w-4 h-4 bg-[#20AAB1] rounded-full top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2"></span>

              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Company Logo */}
                <img
                  className="w-16 h-16 rounded-full object-cover mx-auto md:mx-0 mb-4"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                />

                {/* Work Experience Details */}
                <h3 className="text-2xl font-semibold text-white">{exp.position}</h3>
                <p className="text-lg font-medium text-[#20AAB1]">{exp.company}</p>
                <p className="text-sm text-gray-300 mb-4">{exp.duration}</p>
                <ul className="list-disc ml-6 text-md text-gray-400">
                  {exp.points.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
