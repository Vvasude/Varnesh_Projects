'use client'
import React from 'react';
import { useIntersectionObserver } from './ObservationHook';

const experiences = [
    {
        id: 1,
        role: 'Frontend Developer',
        company: 'Canadian Tamil\'s Chamber of Commerce',
        date: 'June 2024 - September 2024',
        description: (
            <ul className="list-disc list-inside">
                <li>Developed a corporate website using TypeScript, React, and Next.js, creating 76 responsive pages for corporate and client use.</li>
                <li>Utilized GitHub for version control in a cross-functional Agile team to manage code.</li>
                <li>Implemented scalability and extensibility in application designs.</li>
                <li>Gained experience in both frontend and backend development, applying best practices for scalability and extensibility in application designs.</li>
            </ul>
        ),
    },
    {
        id: 2,
        role: 'Freelance Developer',
        company: 'Venvae',
        date: 'May 2021 - August 2023',
        description: (
            <ul className="list-disc list-inside">
                <li>Designed and implemented responsive web interfaces that prioritized user experience and maintained visual consistency across various devices.</li>
                <li>Applied Agile methodologies, including continuous integration and automated testing, to deliver high-quality software within tight deadlines.</li>
                <li>Worked closely with clients to align solutions with business goals.</li>
            </ul>
        ),
    },
];

interface TimelineItemProps {
    experience: {
        id: number;
        role: string;
        company: string;
        date: string;
        description: React.ReactNode;
    };
    side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, side }) => {
    const [ref, isVisible] = useIntersectionObserver({
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`relative w-full my-6 ${side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} md:w-2/5 ${side === 'right' ? 'timeline-bg1' : 'timeline-bg2'} fade-in ${isVisible ? 'visible' : ''}`}
        >
            <div className={`bg-transparent border border-grey rounded-lg p-6`}>
                <h3 className="text-xl font-semibold mb-2">{experience.role}</h3>
                <h4 className="text-purple-300 text-purple-300 mb-4">{experience.company}</h4>
                <p className="text-purple-200 mb-2">{experience.date}</p>
                <div className="text-black text-white">
                    {experience.description}
                </div>
            </div>
        </div>
    );
};


const VerticalTimeline: React.FC = () => {
    return (
        <div className="h-auto text-white py-12 bg-transparent" id="previouswork">
            <h2 className="text-3xl font-bold mb-16 text-center">Work Experience</h2>
            <div className="container mx-auto px-6">
                <div className="relative w-full">
                    <div className="hidden md:block border-l-2 border-purple-600 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
                    {experiences.map((experience, index) => (
                        <TimelineItem
                            key={experience.id}
                            experience={experience}
                            side={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VerticalTimeline;
