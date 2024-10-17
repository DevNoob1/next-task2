import React from 'react';
import { motion } from 'framer-motion';

interface SolutionSectionProps {
    data: {
        button: string;
        desc: string;
        list: string[];
        image: string;
    }[];
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ data, activeIndex, setActiveIndex }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center pt-6 space-y-6 md:space-y-0 md:space-x-10 h-auto md:h-[85vh] gap-3">
            {/* Left Side */}
            <div className="w-full md:w-1/2 p-10 rounded-lg md:ml-28 space-y-6">
                <h2 className="text-2xl md:text-4xl mb-[-10px] font-normal">One Solution for All!</h2>
                <p className="text-base md:text-lg">Postable helps everyone to share their thoughts across multiple platforms</p>

                <div className="w-full md:w-full h-[50px] md:h-[60px] p-1 flex justify-between bg-gray-200 items-center rounded-[20px]">
                    {data.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`py-2 px-2 md:px-4 text-center text-sm md:text-lg rounded-[20px] border transition-all duration-300
                                ${activeIndex === index
                                    ? 'bg-white text-black'
                                    : 'bg-gray-200 text-gray-400 hover:text-black'
                                }`}
                        >
                            {item.button}
                        </button>
                    ))}
                </div>

                <div className="text-left pt-6 md:pt-12">
                    <p className="text-sm md:text-base w-full md:w-4/5 text-gray-600">{data[activeIndex].desc}</p>
                    <ul className="list-disc pt-6 md:pt-12 list-inside space-y-2 text-gray-600">
                        {data[activeIndex].list.map((listItem, i) => (
                            <li key={i}>{listItem}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right Side - Dynamic Image */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center overflow-hidden">
                <motion.img
                    key={activeIndex}
                    src={data[activeIndex].image}
                    alt={data[activeIndex].button}
                    className="w-full max-w-sm md:max-w-md rounded-lg h-auto"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
};

export default SolutionSection;
