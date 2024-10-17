import React from 'react';

interface SocialCardProps {
    color: string;
    title: string;
    width: string;
    height: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ color, title, width, height }) => {
    return (
        <div
            className={` overflow-x-hidden relative shadow-md rounded-[40px] ${width} ${height} transition-transform duration-300 ease-in-out`}
            style={{ transform: 'rotateY(10deg)', background: 'url(https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-4_cgvesv.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Header with title */}
            <div className={` p-4 rounded-t-[40px] overflow-x-hidden  ${color}`}>
                <h3 className="text-white text-xl text-center font-semibold">{title}</h3>
            </div>

        </div>
    );
};

export default SocialCard;
