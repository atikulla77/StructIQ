import React from "react";
import { FaStar } from "react-icons/fa6";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";

function topTalentsReadyToHelp() {
  const topTalentsReadyToHelpData = [
    {
      id: 1,
      tittle: "Ioanna Spirou",
      post: "Beauty and Wellness",
      img: "./top_talents_ready_to_help/1.png",
      rating: "4.9",
      verified: "Cosmetology",
    },
    {
      id: 2,
      tittle: "Alexandros Markou",
      post: "Legal and Consulting",
      img: "./top_talents_ready_to_help/2.png",
      rating: "4.9",
      verified: "Accounting",
      extraMargin: "mt-[1rem]",
    },
    {
      id: 3,
      tittle: "Sofia Nikolaidis",
      post: "Education & Tutoring",
      img: "./top_talents_ready_to_help/3.png",
      rating: "4.9",
      verified: "Math Tutoring",
    },
    {
      id: 4,
      tittle: "Eleni Papadaki",
      post: "Event and Entertainment",
      img: "./top_talents_ready_to_help/4.png",
      rating: "4.9",
      verified: "Photography",
      extraMargin: "[@media(min-width:565px)]:mt-0 mt-[1rem]",
    },
    {
      id: 5,
      tittle: "Dimitrios Vasilakis",
      post: "Education & Tutoring",
      img: "./top_talents_ready_to_help/5.png",
      rating: "4.9",
      verified: "History Tutoring",
      extraMargin: "[@media(min-width:565px)]:mt-[1rem] mt-0",
    },
    {
      id: 6,
      tittle: "Thanos Karamanlis",
      post: "Event and Entertainment",
      img: "./top_talents_ready_to_help/6.png",
      rating: "4.9",
      verified: "Videography",
      extraMargin: "[@media(min-width:565px)]:mt-0 mt-[1rem]",
    },
  ];
  return (
    <div className="w-full [@media(min-width:1210px)]:!pt-[8rem]  [@media(min-width:770px)]:pt-[6rem] pt-[3rem] ">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full [@media(min-width:1450px)]:!px-0 sm:px-[2rem] px-0 mx-auto ">
        {/* Tittle */}
        <div className="[@media(min-width:1200px)]:!w-[27rem] sm:w-[23.4rem] w-[18rem] relative mx-auto flex justify-center items-center text-center [@media(min-width:1200px)]:!mb-[5rem] sm:mb-[3rem] mb-[2rem]">
          <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
            TOP TALENTS READY TO HELP
          </h1>
          <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#C0D724]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="[@media(min-width:1200px)]:!w-[225px] sm:w-[198px] w-[151px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#C0D724]"></div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-wrap justify-between">
          <div className="[@media(min-width:1450px)]:!w-[715px] sm:!w-[595px] [@media(min-width:565px)]:w-[510px] w-[340px] [@media(min-width:1450px)]:!h-[620px] [@media(min-width:1210px)]:h-[520px] h-auto flex flex-wrap justify-between [@media(min-width:1210px)]:mx-0 mx-auto">
            {topTalentsReadyToHelpData.map((key) => {
              return (
                <div
                  key={key.id}
                  className={`${
                    key?.extraMargin ? key?.extraMargin : ""
                  } [@media(min-width:1450px)]:!w-[223px] sm:w-[183px] w-[158px] [@media(min-width:1450px)]:!h-[276px] sm:h-[230px] h-[215px] sm:py-[15px] py-[10px] sm:px-[10px] px-[5px] rounded-[20px] [@media(min-width:1450px)]:mb-[30px] mb-[5px] bg-white text-center shadow-[0_15px_30px_0px_#73737326]`}
                >
                  <div className="w-full flex justify-center">
                    <img
                      src={key.img}
                      className="[@media(min-width:1450px)]:!w-[109px] sm:w-[94px] w-[90px] [@media(min-width:1450px)]:!h-[109px] sm:h-[94px] h-[90px] rounded-[50%]"
                    />
                  </div>
                  <div className="[@media(min-width:1450px)]:pt-[10px] pt-[5px]">
                    <h1 className="[@media(min-width:1450px)]:!text-[18px] sm:text-[16px] text-[14px] font-[600]">
                      {key.tittle}
                    </h1>
                    <p className="[@media(min-width:1450px)]:!text-[14px] sm:text-[12px] text-[11px] text-[#A5A5A5] font-[400] [@media(min-width:1450px)]:pt-[3px] pt-[0px]">
                      {key.post}
                    </p>
                    <div className="flex items-center justify-center [@media(min-width:1450px)]:w-[62px] w-[51px] [@media(min-width:1450px)]:h-[26px] h-[21px] rounded-[25px] [@media(min-width:1450px)]:mt-[8px] mt-[4px] bg-[#F0F1F4] mx-auto">
                      <FaStar className="sm:text-[13px] text-[11px] text-[#FFCB2B] mb-[1px]" />
                      <p className="[@media(min-width:1450px)]:text-[14px] sm:text-[11.68px] text-[10px] font-[700] pl-[5px]">
                        {key.rating}
                      </p>
                    </div>
                    <div className="w-full flex justify-center [@media(min-width:1450px)]:pt-[0.8rem] pt-[0.5rem] sm:px-0 px-[5px]">
                      <BsPatchCheckFill className="sm:text-[14px] text-[12px] text-[#487C27] sm:mr-[2px] mr-[5px] mt-[2px]" />
                      <p className="[@media(min-width:1450px)]:!text-[12px] sm:text-[11px] text-[10px] font-[500] text-[#487C27] text-left">
                        <b className="font-[600]">Verified Talent</b> in{" "}
                        {key.verified}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="[@media(min-width:1450px)]:!w-[565px] [@media(min-width:1210px)]:w-[470px] w-[553px] [@media(min-width:1210px)]:!mx-0 [@media(min-width:565px)]:mx-[2rem] mx-[1rem] [@media(min-width:1210px)]:mt-0 mt-[4rem]">
            <h1 className="[@media(min-width:1450px)]:!text-[50px] [@media(min-width:1210px)]:!text-[42px] sm:text-[28px] text-[20px] text-[#18470D] font-[500] [@media(min-width:1450px)]:leading-[68px] [@media(min-width:1210px)]:leading-[56.75px] leading-[36px] [@media(min-width:1450px)]:!pb-[3rem] [@media(min-width:1210px)]:pb-[2rem] pb-[1rem]">
              Work with top talents
              <br className="[@media(min-width:1210px)]:flex hidden" />
              across industries{" "}
              <br className="[@media(min-width:1210px)]:flex hidden" />
              for success
            </h1>
            <p className="[@media(min-width:1450px)]:!text-[24px] [@media(min-width:1210px)]:text-[20px] text-[16px] text-[#545454] font-[400] [@media(min-width:1450px)]:!leading-[38px] [@media(min-width:1210px)]:leading-[31.71px] leading-[24px] [@media(min-width:1450px)]:pb-[2rem] pb-[1rem]">
              Discover top talents across various industries—
              <br className="[@media(min-width:1210px)]:flex hidden" />
              talents who are ready to make your life easier,
              <br className="[@media(min-width:1210px)]:flex hidden" />
              provide essential services, or grow your
              <br className="[@media(min-width:1210px)]:flex hidden" />
              business.
            </p>
            <div className="flex items-center [@media(min-width:1450px)]:!pb-[3rem] [@media(min-width:1210px)]:pb-[2.5rem] pb-[2rem] [@media(min-width:1210px)]:pt-0 pt-[1rem]">
              <button className="sm:w-[122px] w-[96px] sm:h-[48px] h-[40px] sm:text-[14px] text-[12px] sm:mr-[18px] mr-[12px] font-[500] text-[#18470D] bg-[#CBEC5E] rounded-[30px]">
                Sign Up
              </button>
              <button className="sm:w-[122px] w-[96px] sm:h-[48px] h-[40px] sm:text-[14px] text-[11px] font-[500] text-[#ffffff] bg-[#000000] rounded-[30px]">
                Contact Us
              </button>
            </div>

            <div className="flex items-center">
              <div className="[@media(min-width:1450px)]:w-[26px] w-[21px] [@media(min-width:1450px)]:h-[26px] h-[21px]  flex justify-center items-center rounded-[50%] border-[1px] border-[#7FE800] ">
                <FaCircleCheck className="[@media(min-width:1450px)]:text-[20px] text-[18px] text-[#000]" />
              </div>
              <p className="[@media(min-width:1450px)]:!text-[18px] sm:text-[16px] text-[15px] font-[500] pl-[10px]">
                Diverse Industry Specialists
              </p>
            </div>
            <div className="flex items-center pt-[1.1rem]">
              <div className="[@media(min-width:1450px)]:w-[26px] w-[21px] [@media(min-width:1450px)]:h-[26px] h-[21px] flex justify-center items-center rounded-[50%] border-[1px] border-[#7FE800] ">
                <FaCircleCheck className="[@media(min-width:1450px)]:text-[20px] text-[18px] text-[#000]" />
              </div>
              <p className="[@media(min-width:1450px)]:text-[18px] sm:text-[16px] text-[15px] font-[500] pl-[10px]">
                On-Demand Talent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topTalentsReadyToHelp;
