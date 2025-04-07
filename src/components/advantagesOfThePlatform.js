import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { ImArrowDownRight2 } from "react-icons/im";

function advantagesOfThePlatform() {
  return (
    <div>
      <div className="w-full pb-[3rem]">
        <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full mx-auto ">
          {/* Tittle */}
          <div className="[@media(min-width:1200px)]:w-[30.6rem] sm:w-[26.5rem] w-[13.5rem] relative mx-auto flex justify-center items-center text-center">
            <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
              Advantages Of The Platform
            </h1>
            <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] sm:top-0 top-[-15px] h-full flex items-center">
              <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#C0D724]"></div>
            </div>
            <div className="absolute sm:right-0 right-[52px] bottom-0 h-full flex items-end">
              <div className="[@media(min-width:1200px)]:!w-[165px] sm:w-[140px] w-[110px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#C0D724]"></div>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-full flex flex-wrap items-end justify-between">
            <div className="[@media(min-width:1215px)]:w-auto w-[100%] sm:px-0 px-[1rem] [@media(min-width:1215px)]:mt-0 mt-[3rem]">
            <img
              src="./AdvantagesOfThePlatform.png"
              className="[@media(min-width:1450px)]:w-[628px] sm:w-[520px] w-[100%] [@media(min-width:1450px)]:h-[412px] sm:h-[341px] h-auto [@media(min-width:1215px)]:mx-0 mx-auto"
            />
            </div>
            <div className="[@media(min-width:1450px)]:w-[710px] w-[588px]  [@media(min-width:1215px)]:mx-0 mx-auto sm:px-0 px-[1rem]">
              <div className="flex justify-end">
              <div className="[@media(min-width:1210px)]:w-[297px] w-[224px] [@media(min-width:1210px)]:h-[56px] h-[46px] sm:mt-[3rem] mt-[2rem] mb-[1.5rem] flex items-center bg-white rounded-[30px]">
                <button className="w-[50%] h-full [@media(min-width:1210px)]:text-[18px] text-[14px] font-[500] text-[#18470D] bg-[#ffffff] rounded-[30px]">
                  Client
                </button>
                <button className="w-[50%] h-full [@media(min-width:1210px)]:text-[18px] text-[14px] font-[500] text-[#18470D] bg-[#CBEC5E] border-[3px] border-[#ffffff] rounded-[30px]">
                  Talent
                </button>
              </div>
              </div>
              <div className="w-full [@media(min-width:1450px)]:h-[169px] sm:h-[140px] h-[93px] flex justify-between [@media(min-width:1450px)]:px-[35px] sm:px-[30px] px-[25px] [@media(min-width:1450px)]:py-[30px] sm:py-[25px] py-[15px] bg-white sm:rounded-[30px] rounded-[15px] border-[2px] border-[#C1EC05] relative">
                <div>
                  <h1 className="[@media(min-width:1450px)]:text-[30px] sm:text-[24px] text-[14px] font-[500]">
                    Top Clients Verified
                  </h1>
                  <p className="sm:text-[16px] text-[12px] font-[400] text-[#3F3C3C] [@media(min-width:1450px)]:pt-[10px] pt-[5px]">
                    Showcase your portfolio, client reviews, and verified
                    <br className="[@media(min-width:460px)]:flex hidden" />
                    credentials to stand out.
                  </p>
                </div>
                <div className="absolute [@media(min-width:1450px)]:!top-[30px] top-[20px]  [@media(min-width:1450px)]:!right-[30px] right-[25px]  [@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#000000]">
                  <ImArrowDownRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#ffffff]" />
                </div>
              </div>
              <div className="w-full [@media(min-width:1450px)]:h-[108px] sm:h-[90px] h-[51px] sm:px-[30px] px-[25px] mt-[1rem] flex justify-between items-center sm:rounded-[30px] rounded-[15px] bg-white">
                <h1 className="[@media(min-width:1450px)]:text-[30px] sm:text-[24px] text-[14px] font-[500]">
                  Risk-Free Hiring
                </h1>
                <div className="[@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#000000]">
                  <ImArrowUpRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#ffffff]" />
                </div>
              </div>
              <div className="w-full [@media(min-width:1450px)]:h-[108px] sm:h-[90px] h-[51px] sm:px-[30px] px-[25px] mt-[1rem] flex justify-between items-center sm:rounded-[30px] rounded-[15px] bg-white">
                <h1 className="[@media(min-width:1450px)]:text-[30px] sm:text-[24px] text-[14px] font-[500]">
                  Safe contract system
                </h1>
                <div className="[@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#000000]">
                  <ImArrowUpRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#ffffff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default advantagesOfThePlatform;
