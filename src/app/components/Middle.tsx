"use client";

import React, { useState } from 'react';
import FeatureScroll from './FeatureScroll';
import SolutionSection from './SolutionSection';
import GrowSection from './GrowSection';

const Middle: React.FC = () => {
    const featureImages = [
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp",
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp",
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp",
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp",
        "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp"
    ];

    const data = [
        {
            button: "Influencers",
            desc: "For influencers, maintaining a consistent and visually appealing social media presence is crucial...",
            list: ["Content Repurposing", "Cross-Platform Marketing", "Consistent Branding", "Higher Engagement"],
            image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Influencers_x5kswv.webp"
        },
        {
            button: "Individuals",
            desc: "Postable is perfect for individuals who want to elevate their social media presence without the hassle...",
            list: ["Effortless Post Creation", "Enhanced Visual Appeal", "Easy Sharing Across Platforms", "Consistent Social Media Presence"],
            image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061157/Individual_fe1fis.webp"
        },
        {
            button: "Businesses",
            desc: "Businesses need to stay agile and maintain a strong social media presence...",
            list: ["Content Repurposing", "Cross-Platform Marketing", "Consistent Branding", "Higher Engagement"],
            image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1727061158/Businesses_tc1bbp.webp"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="container w-full mt-20 space-y-12">
            <h2 className="text-4xl font-bold mb-12 ml-32 text-start">Our Features</h2>
            <FeatureScroll featureImages={featureImages} />
            <SolutionSection data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <GrowSection />
        </div>
    );
};

export default Middle;
