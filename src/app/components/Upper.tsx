import React from 'react';
import UpperCard from './UpperCard';
import SocialCards from './SocialCards'; // Import the new SocialCards component

const Upper: React.FC = () => {
    // Array of card data
    const cardData = [
        {
            image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-1_grbgfh.webp",
            step: "Step 1",
            title: "Copy tweet's link",
            description: "On X/Twitter, click the share icon at the bottom-right of the tweet and select 'Copy Link.' Then, paste the link into the box above."
        },
        {
            image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-2_n2egsf.webp",
            step: "Step 2",
            title: 'Customize Design',
            description: "Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click."
        },
        {
            image: "https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-3_d477fk.webp",
            step: "Step 3",
            title: 'Export!',
            description: "Simply export and publish your meticulously crafted posts, tailored to meet each social media’s standards and format."
        }
    ];

    return (
        <div className="container w-[100%] flex flex-col justify-center items-center mx-auto py-12">
            {/* Title section */}
            <h2 className="text-left text-5xl mt-10 font-bold mb-8">How it works?</h2>

            {/* Card section */}
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[5%] ">
                {cardData.map((card, index) => (
                    <UpperCard
                        key={index}
                        image={card.image}
                        step={card.step}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>


            <h2 className="text-left text-3xl md:text-5xl mt-8 md:mt-16 font-bold mb-4 md:mb-8">
                Optimized for all <br /> social media
            </h2>

            <div className='flex flex-col md:flex-row w-full md:w-1/2 p-2 justify-between space-y-4 md:space-y-0'>
                {/* Text Section */}
                <p className='w-full md:w-3/4 text-xs md:text-sm'>
                    We've meticulously designed each template to meet the specific guidelines and format requirements of all social media platforms. By preserving safe zones and adhering to platform standards, we ensure that your posts will always be visually striking, no matter where you share them.
                </p>

                {/* List Section */}
                <ul className='flex flex-col space-y-1 text-xs md:text-base'>
                    <li>✔ Readable</li>
                    <li>✔ Visible</li>
                    <li>✔ Accessible</li>
                </ul>
            </div>

            {/* Social cards section */}
            <div className='overflow-x-hidden w-full'>
                <SocialCards />
            </div>

            {/* Transparent cloudy top and violet bottom div */}
            <div
                className="w-full h-[70vh] mt-[-400px] z-20 flex pl-8 md:pl-32 flex-col justify-end"
                style={{
                    background: 'linear-gradient(to top, rgba(255, 255, 255),rgba(255, 255, 255),rgba(255, 255, 255), transparent)',
                }}
            >
                <p className='text-gray-400 text-xl md:text-3xl w-full'>
                    We help you create postable content that not <br /> only <span className='text-black'>looks great</span> but also <span className='text-black'>engages your audience</span>.
                </p>
                <button className='bg-black text-white rounded-xl w-48 md:w-56 mt-6 md:mt-10 p-2 md:p-3'>
                    Get Started for FREE
                </button>
            </div>

        </div>
    );
};

export default Upper;
