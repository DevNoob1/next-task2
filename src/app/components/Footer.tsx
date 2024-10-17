const Footer = () => {
    return (
        <footer className="text-white pb-10">
            <div className="w-full flex flex-col px-5 md:px-0">
                {/* Main section */}
                <div className='flex flex-col md:flex-row w-full justify-center gap-5 md:gap-[10%] items-center'>
                    <div className="flex flex-col text-left mb-10 md:mb-0">
                        <h1 className="text-4xl font-bold text-white">Postable</h1>
                        <p className="text-2xl font-bold text-white my-4">
                            We help you to create postable content!
                        </p>
                        <p className="text-base text-gray-200 max-w-md">
                            Postable is a free, unlimited tool designed to empower individuals,
                            influencers, and businesses to amplify their voice and effortlessly
                            create engaging content that goes beyond the ordinary.
                        </p>
                    </div>

                    {/* Products and Company sections */}
                    <div className="flex flex-col md:flex-row justify-around text-left gap-5 md:gap-10 w-full md:w-[35%] text-white">
                        <div className='w-full md:w-1/2'>
                            <h3 className="font-semibold mb-5">Products</h3>
                            <ul className="space-y-2 text-base">
                                <li>Tweet Converter</li>
                                <li>
                                    Post Scheduler{" "}
                                    <span className="text-gray-400">(Coming Soon)</span>
                                </li>
                                <li>
                                    Screenshot Designer{" "}
                                    <span className="text-gray-400">(Coming Soon)</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-5">Company</h3>
                            <ul className="space-y-2 text-base">
                                <li>Privacy Policy</li>
                                <li>Terms And Conditions</li>
                                <li>Refund Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Button Section */}
                <div className="flex flex-col md:flex-row gap-5 mt-4 md:gap-[10%] justify-center w-full items-center">
                    {/* Social Media Buttons */}
                    <div className='w-full md:w-1/2 flex flex-wrap justify-around'>
                        <button className="bg-gray-500/30 text-white px-4 py-2 rounded-3xl flex items-center justify-between gap-3 mb-4 md:mb-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1134px-X_logo_2023.svg.png" alt="X/Twitter" className="w-8 h-8" />
                            <span className="text-left">
                                <span className="text-gray-100 text-base">Follow us</span> <br />
                                <span className="font-bold">on X / Twitter</span>
                            </span>
                        </button>
                        <button className="bg-gray-500/30 text-white px-4 py-2 rounded-3xl flex items-center justify-between gap-3 mb-4 md:mb-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Instagram_logo.png/1200px-Instagram_logo.png" alt="Instagram" className="w-8 h-8" />
                            <span className="text-left">
                                <span className="text-gray-100 text-base">Follow us</span> <br />
                                <span className="font-bold">on Instagram</span>
                            </span>
                        </button>
                        <button className="bg-gray-500/30 text-white px-4 py-2 rounded-3xl flex items-center justify-between gap-3 mb-4 md:mb-0">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg" alt="Discord" className="w-8 h-8" />
                            <span className="text-left">
                                <span className="text-gray-100 text-base">Join us</span> <br />
                                <span className="font-bold">on Discord</span>
                            </span>
                        </button>
                        <button className="bg-gray-500/30 text-white px-4 py-2 rounded-3xl flex items-center justify-between gap-3">
                            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg" alt="Buy Us" className="w-8 h-8" />
                            <span className="text-left">
                                <span className="text-gray-100 text-base">Support us</span> <br />
                                <span className="font-bold">on Discord</span>
                            </span>
                        </button>
                    </div>
                    <div className="text-center text-white">
                        Copyright 2024 Postable
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
