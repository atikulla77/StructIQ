"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar ()
{
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isLangOpen, setIsLangOpen ] = useState(false);
    const [ selectedLang, setSelectedLang ] = useState("en");

    const languages = [
        { code: "en", name: "English", flag: "/us.png" },
        { code: "gr", name: "Greek", flag: "/greek.png" },
    ];

    const handleLangSelect = (code) =>
    {
        setSelectedLang(code);
        setIsLangOpen(false);
    };

    return (
        <nav className="bg-black max-w-7xl mx-auto rounded-full text-white p-4 stick top-0 z-50">
            <div className="container mx-auto flex justify-between items-center relative">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={40}
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <div
                    className={`md:flex md:items-center md:space-x-6 absolute left-1/2 transform -translate-x-1/2 ${ isOpen ? "block" : "hidden"
                        } md:block w-full md:w-auto mt-4 md:mt-0 text-center`}
                >
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <Link href="/post-job">
                            <span className="block md:inline-block hover:text-gray-300 cursor-pointer py-2 md:py-0">
                                Post a Job
                            </span>
                        </Link>
                        <Link href="/explore-job">
                            <span className="block md:inline-block hover:text-gray-300 cursor-pointer py-2 md:py-0">
                                Explore Jobs
                            </span>
                        </Link>
                        <Link href="/how-works">
                            <span className="block md:inline-block hover:text-gray-300 cursor-pointer py-2 md:py-0">
                                How It Works
                            </span>
                        </Link>
                    </div>
                </div>

                <div
                    className={`flex items-center space-x-4 ${ isOpen ? "block" : "hidden"
                        } md:flex md:space-x-4 mt-4 md:mt-0`}
                >
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="border border-gray-500 bg-black py-2 px-3 rounded-full flex items-center space-x-2"
                        >
                            <Image
                                src={languages.find((lang) => lang.code === selectedLang).flag}
                                alt={selectedLang}
                                width={20}
                                height={20}
                            />
                            <span>{languages.find((lang) => lang.code === selectedLang).name}</span>
                            <MdKeyboardArrowDown />
                        </button>
                        {isLangOpen && (
                            <div className="absolute top-full mt-2 right-0 bg-black border border-gray-500 rounded-lg shadow-lg w-30 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLangSelect(lang.code)}
                                        className="flex items-center space-x-2 px-4 py-2  text-left hover:bg-gray-700"
                                    >
                                        <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/signin" className="border border-gray-500 bg-black py-2 px-3 rounded-full">
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="border border-gray-500 bg-white text-black py-2 px-3 rounded-full"
                    >
                        Sign Up
                    </Link>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 text-center">
                    <div className="flex flex-col space-y-2">
                        <Link href="/post-job">
                            <span className="block hover:text-gray-300 cursor-pointer py-2">
                                Post a Job
                            </span>
                        </Link>
                        <Link href="/explore-job">
                            <span className="block hover:text-gray-300 cursor-pointer py-2">
                                Explore Jobs
                            </span>
                        </Link>
                        <Link href="/how-works">
                            <span className="block hover:text-gray-300 cursor-pointer py-2">
                                How It Works
                            </span>
                        </Link>
                        {/* mobile device */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="bg-gray-700 text-white p-1 rounded w-full flex items-center justify-center space-x-2"
                            >
                                <Image
                                    src={languages.find((lang) => lang.code === selectedLang).flag}
                                    alt={selectedLang}
                                    width={20}
                                    height={20}
                                />
                                <span>{languages.find((lang) => lang.code === selectedLang).name}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute top-full mt-2 left-0 right-0 bg-gray-700 rounded-lg shadow-lg w-full z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLangSelect(lang.code)}
                                            className="flex items-center space-x-2 px-4 py-2 w-full text-left hover:bg-gray-600"
                                        >
                                            <Image src={lang.flag} alt={lang.name} width={20} height={20} />
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link href="/signin">
                            <span className="block hover:text-gray-300 cursor-pointer py-2">
                                Sign In
                            </span>
                        </Link>
                        <Link href="/signup">
                            <span className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded cursor-pointer">
                                Sign Up
                            </span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}