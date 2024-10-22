import React from "react";

const MainFive = () => {
    return (
        <div className="mt-[100px] px-4 md:px-0">
            <div>
                <div className="flex justify-center text-[20px]">Get in Touch</div>
                <div className="flex justify-center text-[40px] md:text-[55px] font-[700]">Contact Me</div>
                <div className="flex justify-center mt-[30px]">
                    <div className="flex items-center justify-center gap-[10px] w-full md:w-[400px] h-[60px] border-2 border-black rounded-[15px] p-2">
                        <div className="text-black text-[24px] md:text-[30px]">
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="text-[16px] md:text-[20px]">
                            <a href="/" className="relative pb-2 hover:text-gray-400">
                                <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
                                    Example@gmail.com
                                </span>
                            </a>
                        </div>

                        <div className="text-black text-[24px] md:text-[30px]">
                            <i className="bi bi-telegram"></i>
                        </div>
                        <div className="text-[16px] md:text-[20px]">
                            <a href="/" className="relative pb-2 hover:text-gray-400">
                                <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-gray-400 after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
                                    Telegram
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFive;
