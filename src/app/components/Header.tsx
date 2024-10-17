// src/app/components/Header.tsx

"use client"; // Mark this component as a Client Component

import { useState, useEffect } from 'react';
import Card from './Card'; // Import the Card component
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState("Instagram Story");
    const [cardContent, setCardContent] = useState<string>('This is a sample post for social medias like Instagram Story.');

    const handleButtonClick = (platform: string) => {
        if (selectedPlatform === platform) return;
        setSelectedPlatform(platform);
        setCardContent(`This is a sample post for social medias like ${platform}`);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); const [isBouncing, setIsBouncing] = useState(false);

    const handleBounce = () => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 1500); // Reset the bounce after 1.5s
    };


    // Map platform to dynamic card height
    const getCardHeight = (platform: string) => {
        switch (platform) {
            case 'Instagram Story':
                return 400; // taller height for Instagram Story
            case 'LinkedIn Post':
                return 300;
            case 'Facebook Post':
                return 350;
            case 'Instagram Post':
                return 300;
            default:
                return 400;
        }
    };

    return (
        <header className='flex flex-col justify-center items-center w-full overflow-x-hidden'>
            <nav className={`fixed top-0 left-50% z-50 bg-[#000] h-[70px] text-white mt-10 transition-all duration-300 ${isScrolled ? 'w-2/4' : 'w-32'} rounded-3xl flex items-center justify-center p-4 shadow-md shadow-[#464646]`}>
                <div className="flex items-center justify-between w-[90%] max-w-3xl">
                    <div className="text-lg font-bold transition-all duration-300">
                        <Link href="/" className='text-xl'>Postable</Link>
                    </div>
                    <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'opacity-100 w-[50%]' : 'opacity-0 w-0'} overflow-hidden`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-700 text-white border border-gray-600 rounded-md p-2 w-full focus:outline-none transition-all duration-300"
                        />
                    </div>
                </div>
            </nav>
            <div className="text-center">
                <p className='text-black text-[80px] font-bold mt-44 leading-none'>Convert Tweets <br /> Into Engaging Social <br /> Media Posts, Instantly!</p>
                <p className='mt-10 text-xl'>Paste your tweet link below to get started for FREE</p>
            </div>
            <input
                type="text"
                placeholder="Paste tweet link here..."
                className="bg-white text-black border border-gray-300 rounded-3xl p-5 mt-10 text-lg w-[50%] focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 shadow-lg shadow-[#b3b3b3]"
            />
            <p className='mt-3 text-gray-400'>No signup, no credit card, no crap!</p>

            {/* Dynamic height animation */}
            <motion.div
                className="relative w-[95%] md:w-[60%] p-5 mt-36 overflow-x-hidden mb-10 text-center bg-gradient-to-r from-yellow-500 via-blue-800 via-pink-500  via-green-500 to-purple-600 opacity-60 rounded-[50px] flex flex-col items-center justify-center"
                animate={{
                    height: getCardHeight(selectedPlatform) + 500,
                    y: isBouncing ? [0, -40, 0] : 0 // Trigger the bounce only when isBouncing is true
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    duration: 1.5 // Control the speed of the bounce
                }}
                onClick={handleBounce} // Trigger bounce on click
            >
                <h1 className='text-white text-6xl font-extrabold'>Share Your Voice <br /> Beyond Just a Tweet</h1>
                <p className='mt-10 text-white text-lg'>
                    Keep your online presence steady and growing by creating customizable <br />
                    images from your tweets, perfect for Instagram, Facebook, and more.
                </p>
                <div className="flex space-x-4 mt-10">
                    {['Instagram Story', 'LinkedIn Post', 'Facebook Post', 'Instagram Post', 'More'].map((platform) => (
                        <button
                            key={platform}
                            onClick={() => handleButtonClick(platform)}
                            className={`transition-all duration-300 text-sm md:text-lg rounded px-4 py-2 ${selectedPlatform === platform ? 'bg-black text-white scale-110' : 'bg-transparent text-gray-300'} hover:text-white hover:scale-125`}
                        >
                            {platform}
                        </button>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedPlatform && (
                        <>
                            {/* First Card - Bold animation */}
                            <motion.div
                                key={`${selectedPlatform}-right`}
                                initial={{
                                    opacity: 0,
                                    y: 300,
                                    x: 300,
                                    scale: 0.5,
                                    rotate: -90
                                }} // Start from bottom-right, small and rotated
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    x: 0,
                                    scale: 1,
                                    rotate: 0
                                }} // Animate to center, scale up, and rotate to normal
                                exit={{
                                    opacity: 0,
                                    y: 300,
                                    x: 300,
                                    scale: 0.5,
                                    rotate: -90
                                }} // Exit in a reverse pattern
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }} // Smooth transition
                                className="relative z-10 mt-20" // Higher z-index for the top card, absolute positioning
                            >
                                <Card platform={selectedPlatform} content={cardContent} />
                            </motion.div>

                            {/* Second Card - Tilted and slightly behind */}
                            <motion.div
                                key={`${selectedPlatform}-left`}
                                initial={{
                                    opacity: 0,
                                    y: 200, // Slight offset for the Y position
                                    x: 290, // Slight offset for the X position
                                    scale: 0.5,
                                    rotate: -70 // Tilted by 10 degrees
                                }} // Start tilted, with lower opacity and a small size
                                animate={{
                                    opacity: 0.5,
                                    y: 0,
                                    x: 0,
                                    scale: 1,
                                    rotate: 10
                                }} // Animate to visible with the same tilt
                                exit={{
                                    opacity: 0,
                                    y: 200,
                                    x: 290,
                                    scale: 0.5,
                                    rotate: -40 // Keep the tilt at 10 degrees
                                }} // Exit in a reverse pattern
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut"
                                }} // Smooth transition
                                className="z-0 mt-[-350px] opacity-2" // Lower z-index for the card behind
                            >
                                <Card platform={selectedPlatform} content={cardContent} />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
};

export default Header;
