"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const languages = [
    { id: 1, code: "en", name: "English", flag: "/navber/us.png" },
    { id: 2, code: "gr", name: "Greek", flag: "/navber/greek.png" },
  ];

  const setLanguage = () => {
    setIsLangOpen(!isLangOpen);

    setTimeout(() => {
      setIsLangOpen(false);
    }, 5000);
  };

  const handleLangSelect = (code) => {
    setSelectedLang(code);
    setIsLangOpen(false);
  };

  return (
    <nav className="w-full  text-white mt-[1.5rem] stick top-0 z-50 [@media(min-width:850px)]:px-0 px-[1rem]">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:!w-[1200px] [@media(min-width:850px)]:w-[780px] [@media(min-width:540px)]:w-[95%] w-[100%] [@media(min-width:1450px)]:!h-[74px] [@media(min-width:1210px)]:!h-[62px] [@media(min-width:500px)]:h-[54px]  h-[49px] mx-auto rounded-full flex justify-between bg-black items-center relative [@media(min-width:1210px)]:!px-[15px] [@media(min-width:850px)]:px-[8px] px-[5px]">
        <div className="flex items-center [@media(min-width:1450px)]:!ml-[1rem]  [@media(min-width:850px)]:!ml-[0.8rem] [@media(min-width:450px)]:ml-[0.5rem] ml-[1rem]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={171}
              height={27}
              className="[@media(min-width:1450px)]:flex hidden cursor-pointer"
            />
            <Image
              src="/logo.png"
              alt="Logo"
              width={142}
              height={22}
              className="[@media(min-width:1450px)]:!hidden [@media(min-width:1210px)]:flex hidden cursor-pointer"
            />
            <Image
              src="/logo.png"
              alt="Logo"
              width={108}
              height={17}
              className="[@media(min-width:1210px)]:!hidden [@media(min-width:550px)]:flex hidden cursor-pointer"
            />
            <Image
              src="/logo.png"
              alt="Logo"
              width={95}
              height={15}
              className="[@media(min-width:550px)]:hidden flex cursor-pointer"
            />
          </Link>
        </div>

        <div className="[@media(min-width:850px)]:flex hidden [@media(min-width:1450px)]:!gap-[32px] [@media(min-width:1210px)]:gap-[27px] gap-[20px] [@media(min-width:1450px)]:!pl-[9rem] [@media(min-width:1210px)]:pl-[11rem] pl-[0rem]">
          <Link href="/post-job">
            <span className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:1210px)]:text-[14px] text-[12px] font-[500] text-[#FFFFFF] cursor-pointer">
              Post a Job
            </span>
          </Link>
          <Link href="/explore-job">
            <span className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:1210px)]:text-[14px] text-[12px] font-[500] text-[#FFFFFF] cursor-pointer">
              Explore Jobs
            </span>
          </Link>
          <Link href="/how-works">
            <span className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:1210px)]:text-[14px] text-[12px] font-[500] text-[#FFFFFF] cursor-pointer">
              How It Works
            </span>
          </Link>
        </div>

        <div
          className={`flex items-center [@media(min-width:850px)]:gap-[10px] gap-[6px]`}
        >
          <div className="relative [@media(min-width:765px)]:flex hidden">
            <button
              onClick={() => setLanguage()}
              className="w-[95px] [@media(min-width:1450px)]:h-[48px] h-[40px] border-[1px] border-[#94949480] bg-black px-3 rounded-full flex  justify-between items-center"
            >
              <Image
                src={languages.find((lang) => lang.code === selectedLang).flag}
                alt={selectedLang}
                width={24}
                height={24}
              />
              <span className="[@media(min-width:1450px)]:text-[14px] text-[13px] font-[500] uppercase ml-[5px]">
                {languages
                  .find((lang) => lang.code === selectedLang)
                  .name.slice(0, 2)}
              </span>
              <MdKeyboardArrowDown className="text-[20px]" />
            </button>
            {isLangOpen && (
              <div className="absolute top-full mt-2 right-0 px-[7px] bg-black border-[1px] border-[#94949480] rounded-[14px] shadow-lg w-[131px] h-[75px] z-50 ">
                <div className="w-full h-full flex flex-wrap items-center justify-start px-[5px] py-[5px]">
                  {languages.map((lang) => (
                    <div key={lang.id} className="w-full">
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className="w-full flex items-center space-x-2 text-left bg-transparent"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.name}
                          width={23}
                          height={23}
                        />
                        <span className="text-[14px] font-[500]">
                          {lang.name}
                        </span>
                      </button>
                      <div
                        className={`${
                          lang.name == "English" ? "" : "hidden"
                        } mt-[6px] w-full h-[1px] bg-[#4A4A4A]`}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/signin"
            className="[@media(min-width:1450px)]:w-[122px] w-[100px] [@media(min-width:1450px)]:h-[48px] h-[40px] [@media(min-width:1450px)]:text-[14px] text-[13px] font-[500] border-[1px] border-[#94949480] bg-black [@media(min-width:540px)]:flex hidden justify-center items-center py-2 px-3 rounded-[49px]"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="[@media(min-width:1450px)]:!w-[122px] [@media(min-width:500px)]:w-[100px] w-[90px] [@media(min-width:1450px)]:!h-[48px] [@media(min-width:500px)]:h-[40px] h-[34px] [@media(min-width:1450px)]:!text-[14px] [@media(min-width:500px)]:text-[13px] text-[12px] font-[500] border border-gray-500 bg-white text-black py-2 px-3 flex justify-center items-center rounded-[49px]"
          >
            Sign Up
          </Link>
          <div className="[@media(min-width:850px)]:hidden flex justify-center items-center [@media(min-width:500px)]:w-[40px] w-[34px] [@media(min-width:500px)]:h-[40px] h-[35px] rounded-[50%] bg-white">
            <Image 
              src="/mobileViewIcon.png"
              alt="Logo"
              width={17.78}
              height={17.78}
              className="cursor-pointer [@media(min-width:500px)]:inline hidden"/>
            <Image 
              src="/mobileViewIcon.png"
              alt="Logo"
              width={14}
              height={14}
              className="cursor-pointer [@media(min-width:500px)]:hidden inline"/>
          </div>
        </div>


      </div>

      {isOpen && (
        <div className="[@media(min-width:850px)]:hidden mt-4 text-center">
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
                  src={
                    languages.find((lang) => lang.code === selectedLang).flag
                  }
                  alt={selectedLang}
                  width={20}
                  height={20}
                />
                <span>
                  {languages.find((lang) => lang.code === selectedLang).name}
                </span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full mt-2 left-0 right-0 bg-gray-700 rounded-lg shadow-lg w-full z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangSelect(lang.code)}
                      className="flex items-center space-x-2 px-4 py-2 w-full text-left hover:bg-gray-600"
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={20}
                        height={20}
                      />
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
