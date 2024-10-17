import React from 'react';

interface CardProps {
    platform: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ platform, content }) => {
    // Set different heights based on the platform
    const getCardHeight = (platform: string) => {
        switch (platform) {
            case 'Instagram Story':
                return '400px'; // taller height for Instagram Story
            case 'LinkedIn Post':
                return '300px';
            case 'Facebook Post':
                return '350px';
            case 'Instagram Post':
                return '300px';
            default:
                return '400px';
        }
    };

    return (
        <div className="relative h-full flex items-start">
            {/* Main Card */}
            <div
                className="w-full max-w-sm rounded-lg shadow-lg overflow-hidden z-10"
                style={{ height: getCardHeight(platform) }} // Set height dynamically
            >
                {/* Header with platform name */}
                <div className="bg-gray-200 bg-opacity-40 p-4">
                    <h3 className="text-white text-xl font-semibold">{platform}</h3>
                </div>
                {/* Content area with background image */}
                <div
                    className="opacity-100 bg-cover flex h-full items-center p-4 justify-center z-20 bg-center"
                    style={{
                        background: `url('https://res.cloudinary.com/dzv61qpeu/image/upload/v1726501013/textures-2_kglato.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <p className="text-black">{content}</p>
                </div>
            </div>

            {/* Responsive Styling */}
            <style jsx>{`
                @media (max-width: 768px) {
                    /* Make card smaller for mobile */
                    div {
                        max-width: 100%; /* Full width for smaller screens */
                        height: auto; /* Auto height */
                        marginLeft:-100px
                    }
                    h3 {
                        font-size: 1rem; /* Smaller font size for platform name */
                    }
                    p {
                        font-size: 0.875rem; /* Smaller font for content */
                    }
                }
            `}</style>
        </div>
    );
};

export default Card;
