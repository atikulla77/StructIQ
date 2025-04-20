import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";


const footer = () => {
  return (
    <footer className="relative">
      <div className="w-full flex justify-center text-center [@media(min-width:1210px)]:!pb-0 [@media(min-width:1135px)]:pb-[1rem] pb-[5.5rem]">
        <p className="[@media(min-width:1450px)]:!text-[30px] [@media(min-width:1135px)]:text-[25px] text-[17px] font-[500] text-[#004b52]">
          Subscribe now
          <br />
          and be the first to know!
        </p>
      </div>
      <div
        className={`w-full h-[100%] [@media(min-width:500px)]:pb-[3rem] pb-[46px] bg-[#F0F1F4] flex clip-path-footer justify-center relative`}
      >
        <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-[95%]  [@media(min-width:1050px)]:!px-[5.5rem] [@media(min-width:885px)]:px-[3.5rem] px-[15px] mx-auto bg-white [@media(min-width:885px)]:rounded-[50px] [@media(min-width:440px)]:rounded-[40px] rounded-[30px] ">
          <div className="[@media(min-width:1135px)]:relative absolute left-0 [@media(min-width:1135px)]:top-0 top-[-4.8rem] w-full [@media(min-width:1135px)]:pt-[3rem] pt-0 flex flex-col items-center justify-center">
            <div className="w-full flex [@media(min-width:1135px)]:flex-row flex-col justify-center">
              <label className="[@media(min-width:600px)]:w-auto w-[90%]  relative [@media(min-width:1135px)]:mx-0 mx-auto">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="off"
                  placeholder="First Name Last Name"
                  className="[@media(min-width:1450px)]:!w-[555px] [@media(min-width:600px)]:w-[28rem] w-full [@media(min-width:1450px)]:!h-[60px] [@media(min-width:375px)]:h-[50px] h-[38px] [@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[12px] text-black rounded-[25px] border-none shadow-[0_15px_30px_0px_#73737326] focus:ring-[#ffffff00] focus:border-[#ffffff00] block px-[25px] dark:!bg-white bg-white dark:border-[#ffffff00] dark:focus:ring-[#ffffff00] dark:focus:border-[#ffffff00] font-[500] outline-none"
                />
                <div className="absolute right-0 top-0 [@media(min-width:1450px)]:!py-[17px] [@media(min-width:375px)]:py-[12px] py-[9px] [@media(min-width:1450px)]:!w-[7.5rem] [@media(min-width:440px)]:w-[6rem] w-[5rem] h-full flex items-center">
                  <div className="w-[1.57px] h-full bg-[#737373ae]"></div>
                  <div className=" [@media(min-width:440px)]:pl-[1.3rem] pl-[0.6rem] flex items-center">
                    <p className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[13.5px] text-[12px] font-[500] text-[#474747] pr-[8px]">
                      Talent
                    </p>
                    <FaAngleDown className="[@media(min-width:440px)]:w-[12px] w-[10px] text-[#474747]" />
                  </div>
                </div>
              </label>
              <div className="[@media(min-width:1450px)]:!w-[60px] [@media(min-width:1135px)]:w-[1.8rem] w-0 [@media(min-width:1135px)]:h-0 h-[0.8rem]"></div>
              <label className="[@media(min-width:600px)]:w-auto w-[90%] relative flex items-center [@media(min-width:1135px)]:mx-0 mx-auto">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="off"
                  placeholder="Enter your email"
                  className="[@media(min-width:1450px)]:!w-[426px] [@media(min-width:600px)]:w-[21rem] w-[100%] [@media(min-width:1450px)]:!h-[60px] [@media(min-width:375px)]:h-[50px] h-[38px] [@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[12px] text-black rounded-[25px] border-none shadow-[0_15px_30px_0px_#73737326] focus:ring-[#ffffff00] focus:border-[#ffffff00] block [@media(min-width:1450px)]:!pl-[68px] [@media(min-width:440px)]:pl-[58px] pl-[48px] pr-[25px] [@media(min-width:440px)]:py-[14px] py-[12px] dark:!bg-white bg-white dark:border-[#ffffff00] dark:focus:ring-[#ffffff00] dark:focus:border-[#ffffff00] font-[500] outline-none"
                />
                <div className="absolute [@media(min-width:440px)]:left-[6px] left-[4px] top-0 flex items-center h-full">
                  <div className="bg-gradient-to-r from-[#00ffe2] to-[#00b9ff]  [@media(min-width:1450px)]:!w-[50.02px] [@media(min-width:440px)]:w-[38px] w-[36px] [@media(min-width:1450px)]:!h-[50.02px]  [@media(min-width:440px)]:h-[38px] h-[36px] flex items-center justify-center rounded-[50%]">
                    <div className="bg-[#0C0C0C] [@media(min-width:1450px)]:!w-[48px] [@media(min-width:440px)]:w-[36px] w-[34px] [@media(min-width:1450px)]:!h-[48px] [@media(min-width:440px)]:h-[36px] h-[34px] flex items-center justify-center rounded-[50%]">
                      <AiOutlineUser className="text-white [@media(min-width:1450px)]:!text-[25px] [@media(min-width:440px)]:text-[22px] text-[18px]" />
                    </div>
                  </div>
                </div>
                <button className="[@media(min-width:1450px)]:!w-[131px] w-auto [@media(min-width:440px)]:px-[20px] px-[15px] [@media(min-width:1450px)]:!h-[60px] [@media(min-width:375px)]:h-[50px] h-[38px] [@media(min-width:1450px)]:!text-[16px] [@media(min-width:375px)]:text-[13px] text-[12px] font-[500] text-[#004b52] border-[3px] border-white bg-[#7affff] rounded-[30px] shadow-[0_15px_40px_5px_#73737333]">
                  Subscribe
                </button>
              </label>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center  [@media(min-width:1135px)]:pt-[4rem] pt-[5.2rem]">
            <div className="[@media(min-width:1450px)]:!w-[240px] [@media(min-width:885px)]:w-[200px] w-full flex-col [@media(min-width:885px)]:justify-start justify-center [@media(min-width:885px)]:mx-0 mx-auto text-center [@media(min-width:885px)]:text-left">
              <a className="flex title-font font-medium items-center [@media(min-width:885px)]:justify-start justify-center text-gray-900">
                <img src="/StructIQ_Logo-2.png" className="sm:w-[150px] w-[120px]" />
              </a>
              <div className="[@media(min-width:885px)]:flex hidden items-center [@media(min-width:885px)]:justify-start justify-center [@media(min-width:910px)]:pt-[2rem] pt-[1.2rem] [@media(min-width:910px)]:pb-[2rem] pb-[1.2rem] text-black [@media(min-width:885px)]:mx-0 mx-auto">
                <MdEmail className="w-[20px] h-[19px] mr-[5px] mt-[1px]" />
                <p className="[@media(min-width:1450px)]:!text-[16px] text-[14px] font-[500]">
                  support@structiq.com
                </p>
              </div>
              <div className="w-[90px] h-[40px] rounded-[25px] border-[1px] border-[#94949480]  text-black flex justify-center items-center  [@media(min-width:885px)]:mx-0 mx-auto [@media(min-width:885px)]:mt-0 mt-[1.5rem]">
                <Image
                  src="/flag.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="cursor-pointer rounded-[50%]"
                />
                <p className="text-[13px] font-[500] ml-[11px] mr-[5px]">EN</p>
                <FaAngleDown className="text-[10px] mt-[2px]" />
              </div>
              <div className="[@media(min-width:885px)]:hidden flex items-center justify-center [@media(min-width:910px)]:pt-[2rem] pt-[1.2rem] text-black [@media(min-width:885px)]:mx-0 mx-auto">
                <MdEmail className="[@media(min-width:440px)]:w-[20px] w-[18px] [@media(min-width:440px)]:h-[20px] h-[18px]" />
                <p className="[@media(min-width:440px)]:text-[14px] text-[13px] font-[500] pl-[5px]">
                  support@structiq.com
                </p>
              </div>
            </div>
            <div className="[@media(min-width:885px)]:w-auto w-[100%] flex [@media(min-width:885px)]:flex-row flex-col [@media(min-width:885px)]:justify-start justify-center text-black [@media(min-width:885px)]:text-left text-center [@media(min-width:885px)]:pt-0 [@media(min-width:440px)]:pt-[1.8rem] pt-[1rem]">
              <nav className="[@media(min-width:1450px)]:!w-[18rem] [@media(min-width:1140px)]:!w-[15rem] [@media(min-width:885px)]:w-[11rem] w-[9rem] [@media(min-width:1140px)]:px-4 px-0 list-none [@media(min-width:885px)]:mx-0 mx-auto">
                <li className="[@media(min-width:1450px)]:!pb-[2rem] [@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    About Us
                  </a>
                </li>
                <li className="[@media(min-width:1450px)]:!pb-[2rem] [@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    FAQ
                  </a>
                </li>
                <li className="">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    Steps of Success
                  </a>
                </li>
              </nav>
              <nav className="[@media(min-width:1450px)]:!w-[15rem] [@media(min-width:1140px)]:!w-[12rem] [@media(min-width:885px)]:w-[11rem] w-[9rem] [@media(min-width:1140px)]:px-4 px-0 list-none [@media(min-width:885px)]:mx-0 mx-auto [@media(min-width:885px)]:pt-0 pt-[1.2rem]">
                <li className="[@media(min-width:1450px)]:!pb-[2rem] [@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    Platform
                  </a>
                </li>
                <li className="[@media(min-width:1450px)]:!pb-[2rem] [@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    Contracts
                  </a>
                </li>
                <li className="">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    Advantages
                  </a>
                </li>
              </nav>
              <nav className="[@media(min-width:1450px)]:!w-[17rem] [@media(min-width:1140px)]:!w-[15rem] [@media(min-width:885px)]:w-[11rem] w-[9rem] [@media(min-width:1140px)]:px-4 px-0 list-none [@media(min-width:885px)]:mx-0 mx-auto [@media(min-width:885px)]:pt-0 pt-[1.2rem]">
                <li className="[@media(min-width:1450px)]:!pb-[2rem] [@media(min-width:440px)]:pb-[1.8rem] pb-[1rem]">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    Services
                  </a>
                </li>
                <li className="pb-[1.8rem]">
                  <a className="[@media(min-width:1450px)]:!text-[16px] [@media(min-width:440px)]:text-[14px] text-[13px] font-[500]">
                    Top Talents
                  </a>
                </li>
                <div className="flex items-center [@media(min-width:885px)]:justify-start justify-center gap-[9px]">
                  <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                    <Image
                      src="/social/facebook.png"
                      alt="Logo"
                      width={17}
                      height={17}
                      className="cursor-pointer mx-auto mt-[2px]"
                    />
                  </div>
                  <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                    <Image
                      src="/social/linkedin.png"
                      alt="Logo"
                      width={17}
                      height={17}
                      className="cursor-pointer mx-auto"
                    />
                  </div>
                  <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                    <Image
                      src="/social/instagram.png"
                      alt="Logo"
                      width={15}
                      height={15}
                      className="cursor-pointer mx-auto"
                    />
                  </div>
                  <div className="w-[28px] h-[28px] rounded-[50%] flex justify-center items-center bg-[#2B2B2B]">
                    <Image
                      src="/social/tiktok.png"
                      alt="Logo"
                      width={16}
                      height={16}
                      className="cursor-pointer mx-auto"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="bg-[#DBDBDB] w-full h-[1px] mt-[2rem]"></div>
          <div className="w-full flex [@media(min-width:885px)]:flex-row flex-col [@media(min-width:885px)]:justify-between justify-center items-center [@media(min-width:885px)]:text-left text-center pt-[1.4rem] pb-[1.7rem]">
            <p className="[@media(min-width:1450px)]:!text-[14px] [@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500] [@media(min-width:885px)]:!pb-0 [@media(min-width:440px)]:pb-[1.5rem] pb-[1.2rem]">
              © 2025 StructIQ All rights reserved.
            </p>
            <div className="flex [@media(min-width:885px)]:flex-row flex-col items-center [@media(min-width:885px)]:justify-start justify-center">
              <p className="[@media(min-width:1450px)]:!text-[14px] [@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500] [@media(min-width:1450px)]:!pr-[4rem] [@media(min-width:885px)]:pr-[2rem] pr-0 [@media(min-width:885px)]:!pb-0 [@media(min-width:440px)]:pb-[1.5rem] pb-[1.2rem]">
                Terms of Service
              </p>
              <p className="[@media(min-width:1450px)]:!text-[14px] [@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500] [@media(min-width:1450px)]:!pr-[4rem] [@media(min-width:885px)]:pr-[2rem] pr-0 [@media(min-width:885px)]:!pb-0 [@media(min-width:440px)]:pb-[1.5rem] pb-[1.2rem]">
                Privacy Policy
              </p>
              <p className="[@media(min-width:1450px)]:!text-[14px] [@media(min-width:440px)]:text-[13px] text-[12px] text-[#757575] font-[500]  [@media(min-width:885px)]:pb-0 pb-[0.7rem]">
                Cookies
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[14px] bg-[#00f3ff]"></div>
    </footer>
  );
};

export default footer;
