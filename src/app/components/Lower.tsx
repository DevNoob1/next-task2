"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Importing icons from react-icons
import Footer from './Footer';

const Lower: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [blackboxBottom, setBlackboxBottom] = useState(0); // To control the bottom position of blackbox
    const scrollLimit = 600; // Limit how far the blackbox can move
    const [isScrollingDown, setIsScrollingDown] = useState(false); // Track scroll direction

    // Handle scroll within the blackbox div
    const handleBlackboxScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const scrollTop = element.scrollTop;
        const scrollBottom = element.scrollHeight - element.scrollTop - element.clientHeight; // Calculate scrollBottom

        // Control blackbox movement based on scrollTop
        if (scrollTop <= scrollLimit && isScrollingDown) {
            // Move the entire blackbox up when scrolling down, at a slower rate for a visible effect
            setBlackboxBottom(scrollTop + 100); // Slower movement by dividing the scrollTop
        } else if (scrollBottom <= scrollLimit && !isScrollingDown) {
            // Reset the blackboxBottom position when scrolling up or reaching the top
            setBlackboxBottom(0); // Or adjust this value for smooth reset
        }
    };

    // Detect the global scroll to track the direction of scrolling
    const handleScroll = () => {
        const newScrollY = window.scrollY;
        setIsScrollingDown(newScrollY > scrollY); // Determine if the user is scrolling down or up
        setScrollY(newScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const [activeIndex, setActiveIndex] = useState<number | null>(null); // To track which question is expanded
    const toggleAnswer = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the clicked question
    };

    return (
        <div className="flex justify-center flex-col items-center w-full mt-40">
            <img
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726913723/engaging_uhqrqs.webp"
                alt="Engaging Visual"
                className="w-full h-auto object-cover mb-20"
            />

            {/* FAQ Section */}
            <div className="h-[50vh] mb-[100px] flex flex-col md:flex-row w-full justify-around items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-5xl mb-5">FAQ</h1>
                    <p className="font-medium text-xl mb-10">Lets help you with some of your <br /> frequently asked questions.</p>
                    <p className="text-gray-400">
                        Couldnt find your answer? <br /><span className="text-purple-400">Ask a Question</span>
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-1/3">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div key={index} className="border-b py-4 flex flex-col">
                            {/* Question Section */}
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAnswer(index)}>
                                <h2 className="text-lg font-semibold">Question {index + 1}?</h2>
                                <button className="focus:outline-none">
                                    {activeIndex === index ? (
                                        <FiChevronUp size={24} />
                                    ) : (
                                        <FiChevronDown size={24} />
                                    )}
                                </button>
                            </div>

                            {/* Answer Section */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                <p className="text-gray-600 mt-2">
                                    This is the answer to question {index + 1}. Here you can provide more details or explanations.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blackbox scrollable section */}
            <div id='lowest' className="w-full flex flex-col justify-center items-center bg-gradient-to-tr from-pink-500 via-purple-400 via-purple-500 to-purple-600 rounded-t-[100px] min-h-screen relative">
                {/* Main content */}
                <div
                    id="blackbox"
                    className="w-full z-10 bg-black text-white p-10 rounded-[100px] object-center shadow-lg overflow-auto"
                    style={{
                        position: 'absolute',
                        bottom: `${blackboxBottom}px`, // Set bottom dynamically based on scroll
                        transition: 'bottom 0.5s ease-out', // Add a smooth transition for visual effect
                        height: '100vh', // Full height for better scrolling experience
                    }}
                    onScroll={handleBlackboxScroll} // Track scrolling within blackbox
                >
                    <h2 className="text-6xl mt-10 font-bold text-center mb-4">One-Click to Create</h2>
                    <p className="text-gray-400 text-center text-base mb-8">
                        Postable is built with simplicity and fun at its core. No design skills? No problem.
                        <br /> We handle the heavy lifting so you can effortlessly create stunning posts.
                        <br />
                        <button className="bg-[#202020] text-white rounded-xl w-56 mt-10 p-3">Get Started for FREE</button>
                    </p>

                    <img
                        src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp"
                        alt="App Screenshot"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Footer Section */}
                <div className="absolute pt-[390px] bottom-0 w-full text-center">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Lower;
