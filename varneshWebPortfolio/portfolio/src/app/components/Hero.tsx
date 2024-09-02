import React from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

const Hero: React.FC = () => {
    return (
        <div id='hero' className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-950 to-black text-white">
            <div className="text-center px-6 md:px-12">
                <div className="wrapper mb-4">
                    <div className="typing-demo text-3xl md:text-4xl font-bold mb-2">
                        Welcome to my portfolio!
                    </div>
                </div>
                <div className="text-center px-6 md:px-12 mb-6">
                    <div className="bg-transparent text-white p-6 rounded-lg shadow-lg border border-white max-w-xl mx-auto">
                        <p className="text-lg md:text-xl">
                            I am a dedicated software engineer with a degree from Western University. I enjoy learning new technologies, languages, and experience working with new teams on new and cool projects.
                        </p>
                    </div>
                </div>
                {/* <div className="flex justify-center mt-6">
                    <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-blue-600">
                        <Link href='#' target='_blank'>
                            Resume
                        </Link>
                    </button>
                </div> */}
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="scroll-indicator block h-6 w-4 rounded-full bg-transparent border ml-6"></span>
            </div>
        </div>
    );
};

export default Hero;
