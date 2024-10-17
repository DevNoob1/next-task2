import React from 'react';

interface FeatureScrollProps {
    featureImages: string[];
}

const FeatureScroll: React.FC<FeatureScrollProps> = ({ featureImages }) => {
    return (
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-36 w-full">
            {featureImages.map((image, index) => (
                <div key={index} className="min-w-[350px] h-[600px] overflow-hidden">
                    <img
                        src={image}
                        alt={`Feature ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    );
};

export default FeatureScroll;
