import React from "react";

function topTalentsReadyToHelp() {
    const topTalentsReadyToHelpData = [
        {
            id:1,
            img: "./top_talents_ready_to_help/1.png",
        },
        {
            id:2,
            img: "",
        },
        {
            id:3,
            img: "",
        },
        {
            id:4,
            img: "",
        },
        {
            id:5,
            img: "",
        },
        {
            id:6,
            img: "",
        },

    ]
  return (
    <div className="w-full">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full mx-auto ">
        {/* Tittle */}
        <div className="[@media(min-width:1200px)]:!w-[27rem] sm:w-[23.4rem] w-[18rem] relative mx-auto flex justify-center items-center text-center">
          <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
          TOP TALENTS READY TO HELP
          </h1>
          <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#C0D724]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="[@media(min-width:1200px)]:w-[105px] w-[92px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#C0D724]"></div>
          </div>
        </div>
{/* Content */}
        <div className="w-full">
             
        </div>
      </div>
    </div>
  );
}

export default topTalentsReadyToHelp;
