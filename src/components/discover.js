import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import Image from "next/image";

const Discover = () =>
{
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
            <div className="max-w-7xl mx-auto text-center">
                {/* Discover More with Underline */}
                <div className=" mb-10 flex justify-center  gap-2">
                    <div className="w-3 h-3 mt-4 bg-[#CBEC5E] "></div>
                    <h2 className="text-2xl sm:text-3xl capitalize font-bold md:text-4xl  ">
                        DISC<span className=" relative">OVER  <span className="absolute left-0 bottom-[-3px] w-full h-1 bg-[#CBEC5E] rounded-full"></span></span>

                    </h2>
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