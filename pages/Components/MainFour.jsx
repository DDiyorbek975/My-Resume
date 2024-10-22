import React from "react";
import imgOne from "@/public/imgOne.png";
import imgTwo from "@/public/imgTwo.png";
import Image from "next/image";

const MainFour = () => {
    return (
        <div className="mt-[100px] px-4 md:px-0">
            <div>
                <div className="flex justify-center text-[20px] md:text-[24px]">Browse My Recent</div>
                <div className="flex justify-center text-[40px] md:text-[50px] font-[700]">Projects</div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-[20px] mt-[30px]">
                <div className="w-full md:w-[295px] h-auto border-2 border-gray-400 bg-gray-100 rounded-[15px]">
                    <div className="w-64 m-[20px] flex justify-center rounded-[15px] mt-[10px]">
                        <Image src={imgOne} alt="Project One" />
                    </div>
                    <div className="text-[18px] md:text-[20px] font-[700] text-center mt-[10px]">Project One</div>
                    <div className="flex justify-center mt-[10px]">
                        <button>
                            <a
                                href="https://github.com/Diyorbek975/https---github.com-NozimjonNN-groupProject.git"
                                className="flex items-center justify-center text-[10px] w-[80px] h-[35px] border-2 border-black text-black font-semibold rounded-full hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors"
                            >
                                GitHub
                            </a>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[295px] h-auto border-2 border-gray-400 bg-gray-100 rounded-[15px]">
                    <div className="w-64 m-[20px] flex justify-center rounded-[15px] mt-[10px]">
                        <Image src={imgTwo} alt="Project Two" />
                    </div>
                    <div className="text-[18px] md:text-[20px] font-[700] text-center mt-[10px]">Project Two</div>
                    <div className="flex justify-center mt-[10px]">
                        <button>
                            <a
                                href="https://github.com/Diyorbek975/https---github.com-NozimjonNN-groupProject.git"
                                className="flex items-center justify-center text-[10px] w-[80px] h-[35px] border-2 border-black text-black font-semibold rounded-full hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors"
                            >
                                GitHub
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFour;
