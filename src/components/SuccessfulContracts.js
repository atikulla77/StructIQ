"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";

const SuccessfulContracts = () => {
  const contracts = [
    {
      id: 1,
      client: {
        name: "John Doe",
        picture: "/SuccessfullContract/1.png",
        review: "4.4",
        bio: "Founder of MathTech",
      },
      talent: {
        name: "Sarah Smith",
        picture: "/SuccessfullContract/2.png",
        review: "4.0",
        bio: "Math Teacher",
      },
      title: "Looking for Math Teacher",
      paymentType: "Fixed Price",
      description:
        "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      jobDetail: {
        startDate: "2025-03-01",
        endDate: "Not Estimated",
        status: "Ongoing",
        budget: "2000",
      },
      uniceClass: "",
    },
    {
      id: 2,
      client: {
        name: "Emily Johnson",
        picture: "/SuccessfullContract/1.png",
        review: "4.4",
        bio: "Founder of MathTech",
      },
      talent: {
        name: "Mike Brown",
        picture: "/images/d-2.png",
        review: "4.9",
        bio: "Math Teacher",
      },
      title: "Looking for Math Teacher",
      paymentType: "Fixed Price",
      description:
        "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      jobDetail: {
        startDate: "2025-03-01",
        endDate: "2025-04-20",
        status: "Ongoing",
        budget: "2000",
      },
      uniceClass: "[@media(min-width:800px)]:block hidden",
    },
    {
      id: 3,
      client: {
        name: "Alex Carter",
        picture: "/SuccessfullContract/1.png",
        review: "5",
        bio: "Founder of MathTech",
      },
      talent: {
        name: "Lisa White",
        picture: "/SuccessfullContract/2.png",
        review: "4.5",
        bio: "Math Teacher",
      },
      title: "Looking for Math Teacher",
      paymentType: "Fixed Price",
      description:
        "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
      jobDetail: {
        startDate: "2025-03-01",
        endDate: "2025-04-20",
        status: "Ongoing",
        budget: "2000",
      },
      uniceClass: "[@media(min-width:1210px)]:!block hidden",
    },
  ];

  return (
    <div className="pb-12 sm:pt-[0.5rem] pt-[1rem]">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:!w-[1200px] w-full mx-auto">
        {/* tittle */}
        <div className="[@media(min-width:1200px)]:!w-[24.5rem] sm:w-[21.1em] w-[16.2rem] relative mx-auto flex justify-center items-center text-center [@media(min-width:1450px)]:!mt-[2rem] [@media(min-width:1200px)]:mt-[1rem] mt-0 [@media(min-width:1450px)]:!mb-[5rem] [@media(min-width:1200px)]:!mb-[4rem] [@media(min-width:450px)]:mb-[3rem] mb-[2rem]">
          <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
            SUCCESSFUL CONTRACTS
          </h1>
          <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#00f3ff]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="[@media(min-width:1200px)]:!w-[164px]  sm:w-[145px] w-[105px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#00f3ff]"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="[@media(min-width:1210px)]:!w-full [@media(min-width:800px)]:w-[787px] w-[100%] [@media(min-width:1210px)]:mx-0 mx-auto flex [@media(min-width:1210px)]:justify-between justify-center [@media(min-width:1210px)]:!gap-0 [@media(min-width:800px)]:gap-[20px] gap-0 items-center">
          {contracts.map((contract) => (
            <div
              key={contract.id}
              className={`${contract.uniceClass} relative [@media(min-width:1450px)]:!w-[467px] [@media(min-width:450px)]:w-[387px] w-[335px] [@media(min-width:1450px)]:!h-[486px] [@media(min-width:450px)]:h-[438px] h-[430px]`}
            >
              {/* Background Layer with ClipPath */}
              <div className="absolute inset-0 [@media(min-width:1450px)]:!rounded-4xl rounded-[20px] bg-white">
                <svg
                  className="[@media(min-width:1450px)]:!w-[235px]  [@media(min-width:450px)]:w-[200px] w-[180px]"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1303.000000 470.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,470.000000) scale(0.100000,-0.100000)"
                    fill="#f0f1f4"
                    stroke="none"
                  >
                    <path
                      d="M11 2394 c1 -1264 3 -2288 5 -2274 2 14 9 65 15 115 24 191 96 428
181 600 233 467 624 743 1173 830 198 31 744 37 4290 44 l3520 7 94 22 c110
26 261 95 333 152 56 44 183 182 458 495 102 116 196 224 211 240 37 41 381
437 492 565 79 91 144 163 329 365 20 22 45 49 55 61 10 12 61 68 113 125 52
57 122 133 155 168 202 220 304 311 483 429 51 34 95 62 97 62 2 0 34 17 72
39 176 100 444 191 668 226 65 10 -942 13 -5440 14 -3036 0 -5922 4 -6412 8
l-893 6 1 -2299z"
                    />
                  </g>
                </svg>
              </div>

              {/* Content Layer */}
              <div className="relative z-10 [@media(min-width:1450px)]:!px-[25px] px-[15px] [@media(min-width:1450px)]:!py-[15px] py-[10px] flex flex-col [@media(min-width:1450px)]:!space-y-4 space-y-0">
                <div className="flex justify-end gap-5 relative">
                  <h1 className="mt-[-5px] font-[900] [@media(min-width:1450px)]:!text-[20px] [@media(min-width:450px)]:text-[18px] text-[15px] pl-[1.5rem] absolute left-0 [@media(min-width:1450px)]:top-[-4px] tracking-[0.3px]">
                    CONTRACT
                  </h1>
                  <div className="text-right">
                    <h1 className="w-full font-[600] [@media(min-width:1450px)]:!text-[16px] [@media(min-width:450px)]:text-[14px] text-[12px]">
                      {contract.title}
                    </h1>
                    <p className="w-full [@media(min-width:1450px)]:!text-[13px] [@media(min-width:450px)]:text-[12px] text-[11px] font-[400] pt-[5px]">
                      <span className="font-[600] pr-[3px]">Payment Type:</span>{" "}
                      {contract.paymentType}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-between [@media(min-width:1450px)]:!pt-0 [@media(min-width:450px)]:pt-[5px] pt-[9px] [@media(min-width:1450px)]:!pb-0 pb-[10px]">
                  {/* Client Section */}
                  <div className="[@media(min-width:1450px)]:!w-[203px] [@media(min-width:450px)]:w-[170px] w-[152px] [@media(min-width:1450px)]:!h-[124px] h-[107px] relative bg-gray-100 [@media(min-width:1450px)]:!p-3 p-[7px] rounded-[18px]">
                    <div className="flex gap-4 justify-between">
                      <Image
                        src={contract.client.picture}
                        alt={contract.client.name}
                        width={50}
                        height={50}
                        className="rounded-full [@media(min-width:1450px)]:!w-[47px] w-[37px] [@media(min-width:1450px)]:!h-[47px] h-[37px] object-cover"
                      />
                      <div className="flex flex-wrap justify-end items-center">
                        <p className="[@media(min-width:1450px)]:!w-[102px] [@media(min-width:450px)]:w-[85px] w-[75px] [@media(min-width:450px)]:h-[24px] h-[24px] flex justify-center items-center bg-[#DDE3F3] [@media(min-width:450px)]:text-[13px] text-[12px] font-[500] rounded-full">
                          Client
                        </p>
                        <p className="flex items-center gap-1 [@media(min-width:1450px)]:!text-[14px] [@media(min-width:450px)]:text-[13px] text-[12px] font-[600] pt-[3px]">
                          <FaStar className="[@media(min-width:450px)]:text-[12px] text-[11px] [@media(min-width:450px)]:mt-1 mt-[-1px] text-amber-300" />{" "}
                          {contract.client.review}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-[12px] bottom-[12px]">
                      <h3 className="[@media(min-width:450px)]:text-[15px] text-[14px] font-[600]">
                        {contract.client.name}
                      </h3>
                      <p className="[@media(min-width:450px)]:text-[13px] text-[11px] text-[#818181] font-[400]">
                        {contract.client.bio}
                      </p>
                    </div>
                  </div>
                  {/* Talent Section */}
                  <div className="[@media(min-width:1450px)]:!w-[203px]  [@media(min-width:450px)]:w-[170px] w-[152px] [@media(min-width:1450px)]:!h-[124px] h-[107px] relative bg-gray-100 [@media(min-width:1450px)]:!p-3 p-[7px] rounded-[18px]">
                    <div className="flex gap-4 justify-between">
                      <Image
                        src={contract.talent.picture}
                        alt={contract.talent.name}
                        width={50}
                        height={50}
                        className="rounded-full [@media(min-width:1450px)]:!w-[47px] w-[37px] [@media(min-width:1450px)]:!h-[47px] h-[37px] object-cover"
                      />
                      <div className="flex flex-wrap justify-end items-center">
                        <p className="[@media(min-width:1450px)]:!w-[102px] [@media(min-width:450px)]:w-[85px] w-[75px] [@media(min-width:450px)]:h-[24px] h-[24px] flex justify-center items-center bg-[#7af1ffcf] text-[#004b52] [@media(min-width:450px)]:text-[13px] text-[12px] font-[500] rounded-full ">
                          Talent
                        </p>
                        <p className="flex items-center gap-1 [@media(min-width:1450px)]:!text-[14px] [@media(min-width:450px)]:text-[13px] text-[12px] font-[600] pt-[3px]">
                          <FaStar className="[@media(min-width:450px)]:text-[12px] text-[11px] [@media(min-width:450px)]:mt-1 mt-[-1px] text-amber-300" />{" "}
                          {contract.talent.review}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-[12px] bottom-[12px]">
                      <h3 className="[@media(min-width:450px)]:text-[15px] text-[14px] font-[600]">
                        {contract.talent.name}
                      </h3>
                      <p className="[@media(min-width:450px)]:text-[13px] text-[11px] text-[#818181] font-[400]">
                        {contract.talent.bio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contract Details */}
                <div className="space-y-2">
                  <div className="w-full flex items-center">
                    <div className="[@media(min-width:1450px)]:!w-[26px] w-[19px] [@media(min-width:1450px)]:!h-[26px] h-[19px] flex items-center justify-center rounded-[50%] bg-black">
                      <MdDescription className="text-white [@media(min-width:1450px)]:!text-[14px] text-[12px]" />
                    </div>
                    <h1 className="[@media(min-width:450px)]:text-[15px] text-[13px] font-[600] pl-[5px]">
                      Description
                    </h1>
                  </div>
                  <p className="[@media(min-width:450px)]:text-[13px] text-[12px] text-[#474747] font-[400] [@media(min-width:450px)]:leading-[21px] leading-[20px]">
                    {contract.description}
                  </p>

                  <div className="[@media(min-width:1450px)]:!pb-0 pb-[13px] pt-[8px]">
                    <div className="w-full flex items-center pb-[8px]">
                      <div className="[@media(min-width:1450px)]:!w-[26px] w-[19px] [@media(min-width:1450px)]:!h-[26px] h-[19px] flex items-center justify-center rounded-[50%] bg-black">
                        <MdEmail className="text-white [@media(min-width:1450px)]:!text-[14px] text-[12px]" />
                      </div>
                      <h1 className="[@media(min-width:450px)]:text-[15px] text-[13px] font-[600] pl-[5px]">
                        Job Details
                      </h1>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="[@media(min-width:1450px)]:!w-[210px] [@media(min-width:450px)]:w-[165px] w-[155px] flex flex-wrap gap-[7px]">
                        <p className="[@media(min-width:450px)]:text-[13px] text-[12px] font-[400] w-[100%] flex justify-between items-center">
                          <span className="font-semibold">Start Date:</span>{" "}
                          <span>{contract.jobDetail.startDate}</span>
                        </p>
                        <p className="[@media(min-width:450px)]:text-[13px] text-[12px] font-[400] w-[100%] flex justify-between items-center">
                          <span className="font-semibold">End Date:</span>{" "}
                          <span>{contract.jobDetail.endDate}</span>
                        </p>
                      </div>

                      <div className="[@media(min-width:1450px)]:!w-[150px] [@media(min-width:450px)]:w-[130px] w-[125px] flex flex-wrap gap-[7px]">
                        <p className="[@media(min-width:450px)]:text-[13px] text-[12px] font-[400] w-[100%] flex items-center justify-between">
                          <span className="font-semibold">Status:</span>{" "}
                          <span className={`text-[black] font-[500]`}>
                            {contract.jobDetail.status}
                          </span>
                        </p>
                        <p className="[@media(min-width:450px)]:text-[13px] text-[12px] font-[400] w-[100%] flex items-center justify-between">
                          <span className="font-semibold">Budget:</span>{" "}
                          <span className="">
                            $ {contract.jobDetail.budget}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black [@media(min-width:450px)]:rounded-2xl rounded-[10px]">
                  <h1 className="[@media(min-width:1450px)]:!text-center text-left [@media(min-width:450px)]:text-[13px] text-[11px] [@media(min-width:1450px)]:!font-[400] font-[300] leading-[19px] text-white py-[6px] [@media(min-width:1450px)]:!pl-0 [@media(min-width:450px)]:pl-[15px] pl-[12px]">
                    Fixed-priced contract is under the protection of the
                    <br /> payment system.
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="[@media(min-width:1450px)]:!mt-[3rem] [@media(min-width:1210px)]:mt-[2rem] mt-[1.5rem] flex justify-center space-x-4">
          <button className="bg-white [@media(min-width:1450px)]:!w-[63px] [@media(min-width:450px)]:w-[47px] w-[41px] [@media(min-width:1450px)]:!h-[63px] [@media(min-width:450px)]:h-[47px] h-[41px] rounded-full flex items-center justify-center shadow-sm">
            <FaArrowLeft className="text-black [@media(min-width:1450px)]:!text-[19px] [@media(min-width:450px)]:text-[16px] text-[14px]" />
          </button>
          <button className="bg-white [@media(min-width:1450px)]:!w-[63px] [@media(min-width:450px)]:w-[47px] w-[41px] [@media(min-width:1450px)]:!h-[63px] [@media(min-width:450px)]:h-[47px] h-[41px] rounded-full flex items-center justify-center shadow-sm">
            <FaArrowRight className="text-black [@media(min-width:1450px)]:!text-[19px] [@media(min-width:450px)]:text-[16px] text-[14px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulContracts;
