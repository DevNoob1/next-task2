"use client"; // Mark this component as a Client Component
import React, { useState } from 'react';

interface UpperCardProps {
    image: string;
    title: string;
    step: string;
    description: string;
}

const UpperCard: React.FC<UpperCardProps> = ({ image, title, step, description }) => {
    const [style, setStyle] = useState({});

    // Handle the mouse move event
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();

        // Calculate mouse position relative to the card center
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;

        // Calculate rotation values based on the mouse position
        const rotateX = (mouseY / cardRect.height) * 50; // Max50 degrees tilt on Y axis
        const rotateY = (-mouseX / cardRect.width) * 50; // Max50 degrees tilt on X axis

        // Set the transform style to rotate the card
        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
    };

    // Reset the card tilt when the mouse leaves the card
    const handleMouseLeave = () => {
        setStyle({
            transform: 'rotateX(0deg) rotateY(0deg)',
        });
    };

    return (
        <div
            className="w-[400px] h-[500px] bg-[#f5f5f5] shadow-md p-4 rounded-[50px] transition-transform duration-300 ease-out"
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image */}
            <img src={image} alt={title} className="w-full h-[250px] object-cover rounded-[50px] bg-[#e4e4e4] mb-4" />

            {/* Step and Title */}
            <h3 className="text-lg font-bold text-gray-300 mb-2">{step}</h3>
            <h3 className="text-xl font-bold text-black mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-base">{description}</p>
        </div>
    );
};

export default UpperCard;
