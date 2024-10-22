import React from "react";

const MainThree = () => {
    return (
        <div className="mt-[125px] px-4 md:px-0">
            <div>
                <div className="flex justify-center text-[20px] md:text-[24px]">Explore My</div>
                <div className="flex justify-center text-[35px] md:text-[50px] font-[700]">Skills</div>
                <div className="flex flex-col md:flex-row justify-center gap-[20px] md:gap-[30px]">
                    {/* Первый блок навыков */}
                    <div className="mt-[50px] w-full md:w-[600px] h-auto border-2 border-gray-500 rounded-[40px] p-4">
                        <div className="text-[20px] md:text-[25px] flex justify-center font-[700] text-gray-500 mt-[15px]">Frontend Development</div>
                        <div className="flex justify-center gap-[10px] md:gap-[30px] flex-wrap">
                            <div className="flex flex-col gap-[15px] mt-[20px]">
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">HTML</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">React JS</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Next JS</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[15px] mt-[20px]">
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">CSS</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Bootstrap</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Tailwind CSS</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Второй блок навыков */}
                    <div className="mt-[50px] w-full md:w-[600px] h-auto border-2 border-gray-500 rounded-[40px] p-4">
                        <div className="text-[20px] md:text-[25px] flex justify-center font-[700] text-gray-500 mt-[15px]">Soft Skills</div>
                        <div className="flex justify-center gap-[10px] md:gap-[30px] flex-wrap">
                            <div className="flex flex-col gap-[15px] mt-[20px]">
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">GitHub</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Teamwork</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Hardwork</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[15px] mt-[20px]">
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Git</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Figma</div>
                                </div>
                                <div className="flex text-black gap-[10px]">
                                    <div className="text-[20px]"><i className="bi bi-patch-check-fill"></i></div>
                                    <div className="font-[700] flex items-center text-[18px]">Leadership</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainThree;
