import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";

const Discover = () => {
  const discovers = [
    {
      img: "/images/d-1.png",
      title: "Household Services",
    },
    {
      img: "/images/d-2.png",
      title: "HomeMaintenance Services",
    },
    {
      img: "/images/d-3.png",
      title: "Beauty and Wellness",
    },
    {
      img: "/images/d-4.png",
      title: "Education and Tutoring",
    },
    {
      img: "/images/d-5.png",
      title: "Event and Entertainment",
    },
    {
      img: "/images/d-6.png",
      title: "Marine Services",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="  text-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  ">
          {discovers.map((dis, i) => (
            <div key={i} className="overflow-hidden">
              <Image
                src={dis.img}
                alt={dis.title}
                width={223}
                height={262}
                className="rounded-3xl w-full h-auto object-cover"
              />
              <div className="py-2 px-4 mt-3 bg-white rounded-full flex justify-between items-center">
                <h3 className="   font-semibold text-left ">{dis.title}</h3>
                <p className="p-2 md:p-3 bg-[#CBEC5E] rounded-full">
                  <CgArrowTopRight className="text-lg md:text-xl" />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="bg-white rounded-full p-2 md:p-3 shadow-md hover:bg-gray-100">
            <FaArrowLeft className="text-black text-lg md:text-xl" />
          </button>
          <button className="bg-white rounded-full p-2 md:p-3 shadow-md hover:bg-gray-100">
            <FaArrowRight className="text-black text-lg md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
