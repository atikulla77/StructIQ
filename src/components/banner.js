"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import { SlUser } from "react-icons/sl";

import { FaPlay } from "react-icons/fa6";

import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

import { HiOutlineUserGroup } from "react-icons/hi2";

export default function Banner() {
  const [isTalentOpen, setIsTalentOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState("talent");

  const talents = [
    {
      icon: <HiOutlineUserGroup className="text-[#3F3C3C]" />,
      code: "talent",
      name: "Talent",
      description: "Hire professionals effortlessly.",
    },
    {
      icon: <SlUser className="text-[#3F3C3C] text-[16px]" />,
      code: "client",
      name: "Client",
      description: "Apply to jobs posted by clients",
    },
  ];

  const handleTalentSection = () => {
    setIsTalentOpen(!isTalentOpen);
    setTimeout(() => {
      setIsTalentOpen(false);
    }, 5000);
  };

  const handleTalentSelect = (code) => {
    setSelectedTalent(code);
    setIsTalentOpen(false);
  };

  return (
    <div className="">
      <div
        className="relative mt-[20px] [@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:!w-[1200px] [@media(min-width:810px)]:w-[780px] w-[90%] [@media(min-width:1450px)]:!h-[715px] [@media(min-width:1210px)]:!h-[594px] [@media(min-width:810px)]:h-[398px] [@media(min-width:450px)]:h-[400px] h-[285px] [@media(min-width:1210px)]:px-[35px] px-[25px] [@media(min-width:1210px)]:pt-[35px] pt-[25px] [@media(min-width:1210px)]:pb-6 pb-[5px]
         flex flex-col justify-between mx-auto"
      >
        <Image
          src="/banner.png"
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          className="z-0 rounded-[40px]"
          id="bannerBackgroundClipPath"
        />

        <div className="[@media(min-width:760px)]:flex hidden justify-between w-full">
          <div
            className="[@media(min-width:1450px)]:!w-[567px] [@media(min-width:1210px)]:w-[473px] w-[299px] [@media(min-width:1450px)]:!h-[191px] [@media(min-width:1210px)]:h-[159px] h-[107px] flex items-center bg-[#86868626] backdrop-blur-[34px] [@media(min-width:1210px)]:pl-[30px] pl-[20px] py-6 [@media(min-width:1450px)]:!rounded-[28px] rounded-[20px]  text-white"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 85% 100%, 0 100%)",
            }}
          >
            <h2 className="[@media(min-width:1450px)]:!text-[40px] [@media(min-width:1210px)]:text-[30px] text-[20px] font-[800] mb-2 uppercase [@media(min-width:1450px)]:!leading-[61px] [@media(min-width:1210px)]:leading-[50px] leading-[40px]">
              Find the <span className="text-[#CBEC5E]">Talent</span>, Sign Up{" "}
              <br /> & Get The <span className="text-[#CBEC5E]">Job</span> Done
            </h2>
          </div>

          <div className="relative [@media(min-width:1450px)]:!mt-[5rem] mt-[4rem] [@media(min-width:1450px)]:!mr-[1.5rem] mr-[1.3rem]">
            <div
              className="[@media(min-width:1450px)]:!w-[496px] [@media(min-width:1210px)]:w-[413px] w-[289px] [@media(min-width:1450px)]:!h-[145px] [@media(min-width:1210px)]:h-[121px] h-[85px] bg-[#86868626] flex items-center justify-end backdrop-blur-[34px] relative p-8 [@media(min-width:1450px)]:!rounded-[28px] rounded-[20px] text-white"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 55%)",
              }}
            >
              <div className="w-[20px] h-[20px] rounded-[50%] absolute left-0 bottom-[50px] bg-transparent shadow-[-9px_10px_0_#6c6c6c26] select-none"></div>
              <h2 className="[@media(min-width:1450px)]:!text-[40px] [@media(min-width:1210px)]:text-[30px] text-[20px] font-[800] mb-2 uppercase [@media(min-width:1450px)]:!leading-[61px] leading-[55px]">
                We'll{" "}
                <span className="text-[#CBEC5E]">
                  {selectedTalent === "talent" ? "Handle" : "Support"}
                </span>{" "}
                That
              </h2>
            </div>
            <div className="absolute [@media(min-width:1210px)]:bottom-[-25px] bottom-[-20px] [@media(min-width:1210px)]:right-[45px] right-[15px] flex items-center gap-[10px]">
              <p className="[@media(min-width:1210px)]:w-[222px] w-[175px] [@media(min-width:1210px)]:h-[51px] h-[40px] bg-[#CBEC5E] text-[#18470D] rounded-full [@media(min-width:1210px)]:text-[16px] text-[12px] font-[500] flex justify-center items-center">
                Sign Up for Contract
              </p>
              <div className="[@media(min-width:1210px)]:w-[51px] w-[40px] [@media(min-width:1210px)]:h-[51px] h-[40px] rounded-[50%] bg-[#fff] flex justify-center items-center">
                <FaPlay className="text-black [@media(min-width:1210px)]:text-[16px] text-[11px] ml-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute [@media(min-width:1210px)]:!bottom-[1.5rem] [@media(min-width:450px)]:bottom-[0.5rem] bottom-[-17px] left-0 w-full flex justify-center">
          <div className="flex flex-col items-center">
            <div className="[@media(min-width:1450px)]:!w-[555px] w-[450px] [@media(min-width:1450px)]:!h-[60px] h-[50px] relative [@media(min-width:760px)]:flex hidden items-center bg-white rounded-full shadow-lg mt-12">
              <div className="[@media(min-width:1450px)]:!w-[50px] w-[42px] [@media(min-width:1450px)]:!h-[50px] h-[42px] bg-black border-2 border-[#CBEC5E] flex justify-center items-center rounded-[50%] ml-[5px]">
                <IoIosSearch className="text-[25px] text-white" />
              </div>

              <input
                type="text"
                placeholder="Find a job, talent or service"
                className="flex-1 z-0 [@media(min-width:1450px)]:!h-[60px] h-[50px] py-4 [@media(min-width:1450px)]:!px-4 px-[10px] [@media(min-width:1450px)]:!text-[16px] text-[14px] font-[500] text-[#737373] placeholder:text-[#737373] outline-none"
              />

              <div className="relative mr-[5px]">
                <div className="absolute left-0 top-0 h-full py-[13px] [@media(min-width:1210px)]:hidden flex">
                  <div className="w-[1px] h-full bg-[#737373]"></div>
                </div>
                <button
                  onClick={() => {
                    handleTalentSection();
                  }}
                  className="[@media(min-width:1450px)]:!border-[1px] border-0 border-[#CDCDCD] [@media(min-width:1450px)]:!bg-[#F0F1F4] bg-transparent [@media(min-width:1450px)]:!w-[122px] w-[100px] h-[52px] rounded-full flex justify-center items-center gap-[10px] text-black cursor-pointer"
                >
                  <span className="[@media(min-width:1450px)]:!text-[16px] text-[14px] font-[500] text-[#474747]">
                    {
                      talents.find((talent) => talent.code === selectedTalent)
                        ?.name
                    }
                  </span>
                  {isTalentOpen ? (
                    <FaChevronUp className="[@media(min-width:1450px)]:!text-[12px] text-[10px] text-[#474747] mt-[1px]" />
                  ) : (
                    <FaChevronDown className="[@media(min-width:1450px)]:!text-[12px] text-[10px] text-[#474747] mt-[1px]" />
                  )}
                </button>

                {isTalentOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-300 rounded-xl shadow-xl w-64 z-50 divide-y divide-gray-200">
                    {talents.map((talent) => (
                      <button
                        key={talent.code}
                        onClick={() => handleTalentSelect(talent.code)}
                        className="flex items-start space-x-3 px-4 py-3 w-full text-left hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="text-xl pt-1">{talent.icon}</div>
                        <div className="flex flex-col text-black">
                          <span className="font-[400] text-[14px] pb-[3px]">
                            {talent.name}
                          </span>
                          <span className="text-[11px] text-[#3F3C3C] font-[400]">
                            {talent.description}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* All Dot */}
            <div className="relative w-full flex justify-center mt-[16px]">
              <div className="flex space-x-2">
                <div className="[@media(min-width:1450px)]:!w-3 [@media(min-width:1210px)]:w-[9px] w-[7px] [@media(min-width:1450px)]:!h-3 [@media(min-width:1210px)]:h-[9px] h-[7px] rounded-full bg-[#CBEC5E] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                <div className="[@media(min-width:1450px)]:!w-3 [@media(min-width:1210px)]:w-[9px] w-[7px] [@media(min-width:1450px)]:!h-3 [@media(min-width:1210px)]:h-[9px] h-[7px] rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                <div className="[@media(min-width:1450px)]:!w-3 [@media(min-width:1210px)]:w-[9px] w-[7px] [@media(min-width:1450px)]:!h-3 [@media(min-width:1210px)]:h-[9px] h-[7px] rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                <div className="[@media(min-width:1450px)]:!w-3 [@media(min-width:1210px)]:w-[9px] w-[7px] [@media(min-width:1450px)]:!h-3 [@media(min-width:1210px)]:h-[9px] h-[7px] rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
                <div className="[@media(min-width:1450px)]:!w-3 [@media(min-width:1210px)]:w-[9px] w-[7px] [@media(min-width:1450px)]:!h-3 [@media(min-width:1210px)]:h-[9px] h-[7px] rounded-full bg-[#CBEC5E6B] cursor-pointer transition-all duration-200 hover:bg-opacity-80"></div>
              </div>
            </div>
            {/* Education and Tutoring */}
            <div className="[@media(min-width:1450px)]:!pt-5 [@media(min-width:1210px)]:pt-[15px] pt-[13px] z-40">
              <h1 className="bg-white [@media(min-width:1450px)]:!w-[355px] [@media(min-width:1210px)]:!w-[338px] [@media(min-width:450px)]:w-[241px] w-[207px] [@media(min-width:1450px)]:!h-[62px] [@media(min-width:1210px)]:!h-[52px] [@media(min-width:450px)]:h-[46px] h-[40px] [@media(min-width:1450px)]:!text-[20px] [@media(min-width:1210px)]:text-[18px] [@media(min-width:450px)]:text-[14px] text-[12px] font-[800] uppercase rounded-[61px] flex justify-center items-center text-center shadow-[0_15px_30px_0px_#73737326]">
                Education and Tutoring
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        {/* Floting Content */}
        <div className="w-full flex-wrap [@media(min-width:450px)]:mt-[30px] mt-[50px] [@media(min-width:760px)]:hidden flex">
          <div
            className="w-[100%] [@media(min-width:550px)]:h-[125px] h-[107px] flex items-center bg-[#9ba8b8] pl-[30px] py-6 rounded-[20px]  text-white relative"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 50%, 85% 100%, 0 100%)",
            }}
          >
            {/* <div className="w-[25px] h-[25px] rounded-[15px] absolute right-[0px] bottom-[58px] bg-transparent shadow-[-9px_10px_0_#f0f1f4] select-none rotate-[-110deg]">
              <div className="relative">
                <div className="absolute left-[14px] top-[13px] w-[10px] h-[20px]  rotate-[-70deg] bg-[#9ba8b8]"></div>
                <div className="absolute left-[-1px] top-[0px] w-[10px] h-[20px] rounded-b-[5px] rotate-[-17deg] bg-[#9ba8b8]"></div>
              </div>
            </div>

            <div className="w-[25px] h-[25px] rounded-[15px] absolute right-[0px] bottom-[0px] bg-transparent shadow-[-9px_10px_0_#f0f1f4] select-none rotate-[-110deg]">
              <div className="relative">
                <div className="absolute left-[14px] top-[13px] w-[10px] h-[20px]  rotate-[-70deg] bg-[#9ba8b8]"></div>
                <div className="absolute left-[-1px] top-[0px] w-[10px] h-[20px] rounded-b-[5px] rotate-[-17deg] bg-[#9ba8b8]"></div>
              </div>
            </div> */}

            <h2 className="text-[20px] font-[800] mb-2 uppercase leading-[40px]">
              Find the <span className="text-[#CBEC5E]">Talent</span>, Sign Up{" "}
              <br /> & Get The <span className="text-[#CBEC5E]">Job</span> Done
            </h2>
          </div>

          <div className="w-[100%] h-[107px] relative mt-[20px]">
            <div
              className="w-[100%] h-[100%] bg-[#9ba8b8] flex items-center justify-end relative p-8 rounded-[20px] text-white"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 55%)",
              }}
            >
              <div className="w-[20px] h-[20px] rounded-[50%] absolute left-0 bottom-[50px] bg-transparent shadow-[-9px_10px_0_#6c6c6c26] select-none"></div>
              <h2 className="text-[20px] font-[800] mb-2 uppercase leading-[55px]">
                We'll{" "}
                <span className="text-[#CBEC5E]">
                  {selectedTalent === "talent" ? "Handle" : "Support"}
                </span>{" "}
                That
              </h2>
            </div>
            <div className="absolute bottom-[-20px] right-[15px] flex items-center gap-[10px]">
              <p className="w-[175px] h-[40px] bg-[#CBEC5E] text-[#18470D] rounded-full text-[12px] font-[500] flex justify-center items-center">
                Sign Up for Contract
              </p>
              <div className="w-[40px] h-[40px] rounded-[50%] bg-[#fff] flex justify-center items-center">
                <FaPlay className="text-black text-[11px] ml-[2px]" />
              </div>
            </div>
          </div>
        </div>
        {/* Input */}
        <div className="w-[100%] h-[50px] relative [@media(min-width:760px)]:hidden flex items-center bg-white rounded-full shadow-lg [@media(min-width:450px)]:mt-12 mt-[2.5rem]">
          <div className="w-[42px] h-[42px] bg-black border-2 border-[#CBEC5E] flex justify-center items-center rounded-[50%] ml-[5px]">
            <IoIosSearch className="text-[25px] text-white" />
          </div>

          <input
            type="text"
            placeholder="Find a job, talent or service"
            className="flex-1 z-0 h-[50px] py-4 px-[10px] [@media(min-width:450px)]:text-[14px] text-[13px] font-[500] text-[#737373] placeholder:text-[#737373] outline-none"
          />

          <div className="relative mr-[5px]">
            <div className="absolute left-0 top-0 h-full py-[13px]">
              <div className="w-[1px] h-full bg-[#737373]"></div>
            </div>
            <button
              onClick={() => {
                handleTalentSection();
              }}
              className="bg-transparent [@media(min-width:450px)]:w-[100px] w-[80px] h-[52px] rounded-full flex justify-center items-center [@media(min-width:450px)]:gap-[10px] gap-[7px] text-black cursor-pointer"
            >
              <span className="[@media(min-width:450px)]:text-[14px] text-[13px] font-[500] text-[#474747]">
                {talents.find((talent) => talent.code === selectedTalent)?.name}
              </span>
              {isTalentOpen ? (
                <FaChevronUp className="text-[10px] text-[#474747] [@media(min-width:450px)]:mt-[1px] mt-0" />
              ) : (
                <FaChevronDown className="text-[10px] text-[#474747] [@media(min-width:450px)]:mt-[1px] mt-0" />
              )}
            </button>

            {isTalentOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-xl w-64 z-50 divide-y divide-gray-200">
                {talents.map((talent) => (
                  <button
                    key={talent.code}
                    onClick={() => handleTalentSelect(talent.code)}
                    className="flex items-start space-x-3 px-4 py-3 w-full text-left hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="text-xl pt-1">{talent.icon}</div>
                    <div className="flex flex-col text-black">
                      <span className="font-[400] text-[14px] pb-[3px]">
                        {talent.name}
                      </span>
                      <span className="text-[11px] text-[#3F3C3C] font-[400]">
                        {talent.description}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
