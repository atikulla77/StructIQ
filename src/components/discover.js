import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";

const Discover = () => {
  const discovers = [
    { id: 1, img: "/images/d-1.png", title: "Household Services" },
    { id: 2, img: "/images/d-2.png", title: "Home Maintenance Services" },
    { id: 3, img: "/images/d-3.png", title: "Beauty and Wellness" },
    { id: 4, img: "/images/d-4.png", title: "Education and Tutoring" },
    { id: 5, img: "/images/d-5.png", title: "Event and Entertainment" },
    {
      id: 6,
      img: "/images/d-6.png",
      title: "Marine Services",
      uniceClass: "[@media(min-width:1440px)]:!block [@media(min-width:1210px)]:hidden block",
    },
  ];

  return (
    <div className="py-12">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full mx-auto text-center [@media(min-width:1200px)]:!pl-0 [@media(min-width:600px)]:pl-[2rem] pl-[1.5rem]">
        {/* Discover More with Underline */}
        <div className="[@media(min-width:1200px)]:!w-[9.6rem] sm:w-[8.5rem] w-[6.4rem] relative mx-auto flex justify-center items-center text-center [@media(min-width:1450px)]:!mt-[2rem] [@media(min-width:1200px)]:mt-[1rem] mt-0 [@media(min-width:1200px)]:mb-[4rem] mb-[2rem]">
          <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
            Discover
          </h1>
          <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#C0D724]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="[@media(min-width:1200px)]:!w-[79px]  sm:w-[70px] w-[50px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#C0D724]"></div>
          </div>
        </div>

        {/* Discover Cards */}
        <div className="w-full flex justify-between [@media(min-width:1200px)]:gap-[12px] gap-0 max-h-full overflow-x-auto bottomScrollbar">
          {discovers.map((dis, i) => (
            <div
              key={i}
              className={`${dis?.uniceClass} w-[224px] min-w-[224px] h-[329px] overflow-hidden [@media(min-width:1200px)]:mr-0 mr-[1.5rem]`}
            >
              <Image
                src={dis.img}
                alt={dis.title}
                width={223}
                height={262}
                className="rounded-3xl w-full h-auto object-cover"
              />
              <div className="relative w-[224px] h-[56px] py-2 pl-4 pr-[60px] mt-3 bg-white rounded-full flex justify-between items-center">
                <h3 className="text-[14px] leading-[19px]  font-semibold text-left ">
                  {dis.title}
                </h3>
                <div className="absolute right-[4px] top-0 h-full flex items-center">
                  <p className=" w-[48px] h-[48px] flex items-center justify-center bg-[#CBEC5E] rounded-full">
                    <CgArrowTopRight className="text-[20px] text-[#18470D]" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* Slider Controls */}
       <div className="[@media(min-width:1450px)]:!mt-[3rem] [@media(min-width:1210px)]:mt-[2rem] mt-[1.5rem] [@media(min-width:1210px)]:flex hidden justify-center space-x-4">
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

export default Discover;
