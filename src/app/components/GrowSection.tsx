import React from 'react';

const GrowSection: React.FC = () => {
    return (
        <div
            className="w-full pt-5 z-20 flex pl-32 flex-col"
            style={{
                background: 'linear-gradient(to top, rgba(255, 255, 255), rgba(255, 255, 255), rgba(255, 255, 255), transparent)',
            }}>
            <p className='text-black text-4xl'>Grow your audience with powerful visuals</p>
            <p className='text-gray-400 text-4xl'>shared across all your social media platforms.</p>
            <button className='bg-black text-white rounded-xl w-56 mt-10 p-3'>Get Started for FREE</button>
        </div>
    );
};

export default GrowSection;
