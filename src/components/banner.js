"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaUser, FaBriefcase } from "react-icons/fa";
import { IoMdPlayCircle } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Banner ()
{
    const [ isTalentOpen, setIsTalentOpen ] = useState(false);  
    const [ selectedTalent, setSelectedTalent ] = useState("talent"); 

    const talents = [
        {
            icon: <FaUser className="text-black" />,
            code: "talent",
            name: "Talent",
            description: "Hire professionals effortlessly.",
        },
        {
            icon: <FaBriefcase className="text-black" />,
            code: "client",
            name: "Client",
            description: "Apply to jobs posted by clients",
        },
    ];

    const handleTalentSelect = (code) =>
    {
        setSelectedTalent(code); 
        setIsTalentOpen(false);  
    };

    return (
        <div className="relative min-h-[500px] max-w-7xl mx-auto lg:px-6 px-4">
            <Image
                src="/banner.png"
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                className="z-0 rounded-[50px]"
            />

            <div className="relative z-10 flex flex-col items-center justify-between py-8 px-4">
                {/* উপরের দুটি কলাম */}
                <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl gap-4">
                    <div
                        className="bg-[rgba(95,92,92,0.4)] backdrop-blur-md p-6 rounded-lg text-white"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)",
                        }}
                    >
                        <h2 className="text-2xl md:text-[40px] font-bold mb-2 capitalize leading-tight">
                            Find the <span className="text-[#CBEC5E]">Talent</span>, Sign Up <br /> & Get The{" "}
                            <span className="text-[#CBEC5E]">Job</span> Done
                        </h2>
                    </div>
                    <div className="relative mt-8 md:mt-12">
                        <div
                            className="w-full bg-[rgba(95,92,92,0.4)] backdrop-blur-md p-8 rounded-lg text-white"
                            style={{
                                clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
                            }}
                        >
                            <h2 className="text-lg md:text-[40px] font-semibold capitalize">
                                We'll{" "}
                                <span className="text-[#CBEC5E]">{selectedTalent === "talent" ? "Handle" : "Support"}</span> That
                            </h2>
                        </div>
                        <div className="absolute bottom-[-20px] left-6 flex items-center space-x-2">
                            <p className="bg-[#CBEC5E] text-black rounded-full px-6 py-2 text-sm md:text-base">
                                Sign Up for Contract
                            </p>
                            <IoMdPlayCircle className="text-white text-4xl md:text-6xl" />
                        </div>
                    </div>
                </div>

                {/* নিচের সার্চ বক্স */}
                <div className="w-full max-w-3xl flex items-center bg-white rounded-full shadow-lg overflow-hidden mt-12">
                    {/* সার্চ আইকন */}
                    <div className="flex items-center justify-center pl-4">
                        <div className="bg-black p-2 rounded-full">
                            <FaSearch className="w-6 h-6 text-white" />
                        </div>
                    </div>

                    {/* সার্চ ইনপুট */}
                    <input
                        type="text"
                        placeholder="Find a job, talent or service"
                        className="flex-1 p-4 text-black outline-none"
                    />

                    {/* Talent ড্রপডাউন */}
                    <div className="relative">
                        <button
                            onClick={() => setIsTalentOpen(!isTalentOpen)} 
                            className="border border-gray-500 bg-black py-2 px-3 rounded-full flex items-center space-x-2 text-white hover:bg-gray-800"
                        >
                            <span>{talents.find((talent) => talent.code === selectedTalent).name}</span>
                            <MdKeyboardArrowDown className="text-xl" />
                        </button>
                        {isTalentOpen && (
                            <div className="absolute top-full mt-2 right-0 bg-white border border-gray-500 rounded-lg shadow-lg w-48 z-50">
                                {talents.map((talent) => (
                                    <button
                                        key={talent.code}
                                        onClick={() => handleTalentSelect(talent.code)}
                                        className="flex items-center space-x-2 px-4 py-2 w-full text-left text-black hover:bg-gray-700 hover:text-white"
                                    >
                                        {talent.icon}
                                        <span>{talent.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Education and Tutoring */}
                <div className="pt-5">
                    <h1 className="bg-white text-2xl md:text-4xl font-bold rounded-full px-4 py-1 text-center">
                        Education and Tutoring
                    </h1>
                </div>
            </div>
        </div>
    );
}