import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { ImArrowUpRight2 } from "react-icons/im";
import { ImArrowDownRight2 } from "react-icons/im";

function getAnswers() {
  return (
    <div className="w-full [@media(min-width:1200px)]:mt-[8rem] mt-[5rem] [@media(min-width:1450px)]:!pb-[5rem] [@media(min-width:1210px)]:pb-[2rem] pb-[3rem]">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full mx-auto ">
        {/* Tittle */}
        <div className="[@media(min-width:1200px)]:!w-[13.5rem] sm:w-[11.8rem] w-[9rem] relative mx-auto flex justify-center items-center text-center">
          <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
            get Answers
          </h1>
          <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#00f3ff]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="[@media(min-width:1200px)]:w-[105px] w-[92px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#00f3ff]"></div>
          </div>
        </div>
        {/* main content */}
        <div className="w-full flex flex-wrap justify-between [@media(min-width:1200px)]:pt-[4rem] pt-[2.5rem] [@media(min-width:1450px)]:px-[0px] sm:px-[1.5rem] px-0">
          <div className="[@media(min-width:1450px)]:!w-[555px] [@media(min-width:1200px)]:w-[463px] w-full [@media(min-width:1200px)]:!pl-0 [@media(min-width:460px)]:pl-[1.5rem] pl-[1rem] [@media(min-width:460px)]:!pr-0 pr-[1rem] [@media(min-width:1200px)]:pb-0 sm:pb-[3rem] pb-[2rem]">
            <h1 className="[@media(min-width:1450px)]:!text-[50px] [@media(min-width:1200px)]:!text-[42px] sm:text-[28px] text-[20px] text-[#004b52] font-[500] [@media(min-width:1450px)]:!leading-[68px] [@media(min-width:1200px)]:leading-[56px] leading-[36px] [@media(min-width:1450px)]:!pb-[2rem] [@media(min-width:1200px)]:pb-[1rem] sm:pb-[1.4rem] pb-[0.7rem]">
              Need Help?{" "}
              <br className="[@media(min-width:1200px)]:flex hidden" />
              Start with Our FAQ!
            </h1>
            <p className="[@media(min-width:1450px)]:!text-[24px] [@media(min-width:1200px)]:!text-[20px] sm:text-[16px] text-[15px] text-[#545454] font-[400] [@media(min-width:1450px)]:!leading-[38px] [@media(min-width:1200px)]:leading-[31px] leading-[24px] [@media(min-width:1200px)]:pb-[4rem] sm:pb-[1.5rem] pb-[0.9rem]">
              Our platform connects people and businesses{" "}
              <br className="[@media(min-width:1200px)]!:hidden [@media(min-width:460px)]:flex hidden" />
              with top talents and freelancers. Post a job,{" "}
              <br className="[@media(min-width:1200px)]!:hidden [@media(min-width:460px)]:flex hidden" />
              receive proposals, hire the best fit, and pay{" "}
              <br className="[@media(min-width:1200px)]!:hidden [@media(min-width:460px)]:flex hidden" />
              securely through our system.
            </p>
            <div className="sm:w-[155px] w-[145px] sm:h-[48px] h-[45px] bg-[#7affff] rounded-[30px] pr-[8px] sm:pl-[25px] pl-[20px] flex justify-between items-center">
              <button className="sm:text-[14px] text-[13px] font-[500] text-[#004b52]">
                More FAQ’s
              </button>
              <div className="sm:w-[34px] w-[31px] sm:h-[34px] h-[31px] flex justify-center items-center rounded-[50%] bg-black">
                <HiOutlineArrowUpRight className="sm:text-[15px] text-[14px] text-white" />
              </div>
            </div>
          </div>
          <div className="[@media(min-width:1450px)]:!w-[710px] sm:w-[591px] w-[90%] [@media(min-width:1200px)]:mx-0 mx-auto">
            <div className="w-full [@media(min-width:1450px)]:!h-[146px] sm:h-[121px] h-[90px] [@media(min-width:1450px)]:!p-[30px] sm:p-[20px] p-[13px] flex justify-between sm:rounded-t-[30px] rounded-t-[15px] bg-white ">
              <div className="[@media(min-width:1450px)]:!pl-0 pl-[5px]">
                <h1 className="[@media(min-width:1450px)]:!text-[26px] sm:text-[22px] text-[14px] font-[500] [@media(min-width:1450px)]:!pb-[13px] sm:pb-[10px] pb-[5px]">
                  How does the platform work?
                </h1>
                <p className="[@media(min-width:1450px)]:!text-[16px] sm:text-[15px] text-[12px] font-[400] text-[#3F3C3C]">
                  Clients hire, talents work, and payments stay secure.
                </p>
              </div>
              <div className="[@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#7affff]">
                <ImArrowDownRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#004b52]" />
              </div>
            </div>
            <div className="w-full [@media(min-width:1450px)]:!h-[108px] sm:h-[90px] h-[50px] [@media(min-width:1450px)]:!p-[30px] p-[15px] flex justify-between items-center border-b-[1px] border-b-[#E2E2E2]">
              <h1 className="[@media(min-width:1450px)]:!text-[26px] sm:text-[22px] text-[14px] font-[500]">
                Are there any additional fees?
              </h1>
              <div className="[@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#7affff]">
                <ImArrowUpRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#004b52]" />
              </div>
            </div>
            <div className="w-full [@media(min-width:1450px)]:!h-[108px] sm:h-[90px] h-[50px] [@media(min-width:1450px)]:!p-[30px] p-[15px] flex justify-between items-center border-b-[1px] border-b-[#E2E2E2]">
              <h1 className="[@media(min-width:1450px)]:!text-[26px] sm:text-[22px] text-[14px] font-[500]">
                How can I access the platform?
              </h1>
              <div className="[@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#7affff]">
                <ImArrowUpRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#004b52]" />
              </div>
            </div>
            <div className="w-full [@media(min-width:1450px)]:!h-[108px] sm:h-[90px] h-[50px] [@media(min-width:1450px)]:!p-[30px] p-[15px] flex justify-between items-center border-b-[1px] border-b-[#E2E2E2]">
              <h1 className="[@media(min-width:1450px)]:!text-[26px] sm:text-[22px] text-[14px] font-[500]">
                What services do you offer?
              </h1>
              <div className="[@media(min-width:1450px)]:!w-[48px] sm:w-[40px] w-[22px] [@media(min-width:1450px)]:!h-[48px] sm:h-[40px] h-[22px] flex justify-center items-center rounded-[50%] bg-[#7affff]">
                <ImArrowUpRight2 className="[@media(min-width:1450px)]:text-[18px] sm:text-[17px] text-[10px] text-[#004b52]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default getAnswers;
