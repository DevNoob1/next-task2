"use client"; // Mark this component as a Client Component

import React from 'react';
import SocialCard from './SocialCard'; import { motion } from 'framer-motion';


const SocialCards: React.FC = () => {
    const socialCardData = [
        { color: 'bg-blue-600', title: 'Facebook', width: 'w-[350px]', height: 'h-[500px]' },
        { color: 'bg-pink-500', title: 'Instagram', width: 'w-[370px]', height: 'h-[520px]' },
        { color: 'bg-blue-700', title: 'LinkedIn', width: 'w-[490px]', height: 'h-[540px]' },
        { color: 'bg-blue-400', title: 'Twitter', width: 'w-[450px]', height: 'h-[560px]' },
    ];

    return (
        <div className="mt-20  flex justify-start items-center w-[100%] overflow-y-hidden pl-56 p-4 overflow-x-hidden">
            {socialCardData.map((card, index) => (
                <motion.div
                    key={index}
                    className={`transition-transform duration-500 overflow-x-hidden ${card.width} ${card.height} rounded-[50px] `}
                    style={{
                        marginLeft: index === 0 ? '0' : '-10%', // Overlap by 10% from the previous card
                        transform: `rotate(5deg)`, // Slight tilt to the right
                    }}
                    initial={{ x: 0, rotate: '5deg' }} // Initial position
                    whileInView={{ x: 50, rotate: '5deg' }} // Move right when in view
                    exit={{ x: 0, rotate: '5deg' }} // Reset position when out of view
                    transition={{ duration: 0.5, delay: index * 0.3 }} // Delay for each card
                    viewport={{ once: false }} // Allow multiple animations as it enters and exits the viewport

                >
                    <SocialCard color={card.color} title={card.title} width={card.width} height={card.height} />
                </motion.div>
            ))}
        </div>
    );
};

export default SocialCards;
