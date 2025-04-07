import React from "react";

function stepsofsuccess() {
  const stepsofsuccessData = [
    {
      id: 1,
      img: "/stepofsuccess/1.png",
      tittle: "Sign Up & Get Started",
      description: "Register instantly and start your career journey.",
    },
    {
      id: 2,
      img: "/stepofsuccess/2.png",
      tittle: "Build Your Profile",
      description: "Showcase your skills to stand out and get hired.",
    },
    {
      id: 3,
      img: "/stepofsuccess/3.png",
      tittle: "Find Your Desire Job",
      description: "Find jobs that match your expertise and goals.",
    },
    {
      id: 4,
      img: "/stepofsuccess/4.png",
      tittle: "Negotiate Like a Pro",
      description: "Connect, chat, and secure the best deals easily.",
    },
    {
      id: 5,
      img: "/stepofsuccess/5.png",
      tittle: "Secure Contracts",
      description: "Be safe with our contracts and work with confidence.",
    },
  ];
  return (
    <div className="w-full pb-[3rem]">
      <div className="[@media(min-width:1450px)]:!w-[1440px] [@media(min-width:1210px)]:w-[1200px] w-full mx-auto ">
        <div className="[@media(min-width:1200px)]:w-[17.7rem] sm:w-[15.3rem] w-[11.9rem] relative mx-auto flex justify-center items-center text-center">
          <h1 className="text-[#000000] [@media(min-width:1200px)]:!text-[30px] sm:text-[26px] text-[20px] font-[800] uppercase">
            STEPS OF SUCCESS
          </h1>
          <div className="absolute [@media(min-width:1200px)]:left-[-25px] left-[-20px] top-0 h-full flex items-center">
            <div className="[@media(min-width:1200px)]:w-[14px] w-[10px] [@media(min-width:1200px)]:h-[14px] h-[10px] bg-[#C0D724]"></div>
          </div>
          <div className="absolute right-0 bottom-0 h-full flex items-end">
            <div className="[@media(min-width:1200px)]:w-[124px] w-[92px] [@media(min-width:1200px)]:h-[4px] h-[2px] rounded-[25px] bg-[#C0D724]"></div>
          </div>
        </div>
        <div className="w-full [@media(min-width:1210px)]:pl-0 sm:pl-[2rem] pl-[1.2rem]">

        
        <div className="[@media(min-width:1210px)]:w-[297px] w-[224px] [@media(min-width:1210px)]:h-[56px] h-[46px] sm:mt-[3rem] mt-[2rem] mb-[1.5rem] flex items-center bg-white rounded-[30px]">
          <button className="w-[50%] h-full [@media(min-width:1210px)]:text-[18px] text-[14px] font-[500] text-[#18470D] bg-[#ffffff] rounded-[30px]">
            Client
          </button>
          <button className="w-[50%] h-full [@media(min-width:1210px)]:text-[18px] text-[14px] font-[500] text-[#18470D] bg-[#CBEC5E] border-[3px] border-[#ffffff] rounded-[30px]">
            Talent
          </button>
        </div>
        <div className="w-full flex items-center justify-between max-h-full overflow-x-auto [@media(min-width:1210px)]:gap-[15px] gap-0 bottomScrollbar">
          {stepsofsuccessData.map((key) => {
            return (
              <div
                key={key.id}
                className=" [@media(min-width:1440px)]:w-[275px] w-[230px] [@media(min-width:1440px)]:min-w-[275px] min-w-[230px] [@media(min-width:1440px)]:h-[384px] h-[320px] [@media(min-width:1440px)]:px-[15px] px-[10px] [@media(min-width:1440px)]:pb-[15px] pb-[10px] [@media(min-width:1440px)]:!pt-[75px] [@media(min-width:1210px)]:pt-[50px] pt-[55px] rounded-[30px] flex flex-col justify-start items-end bg-white relative overflow-hidden [@media(min-width:1210px)]:mr-0 mr-[15px]"
              >
                <div className="absolute [@media(min-width:1440px)]:left-[1rem] left-[0.7rem] [@media(min-width:1440px)]:top-[1rem] top-[0.7rem] [@media(min-width:1440px)]:w-[70px] w-[60px] [@media(min-width:1440px)]:h-[70px] h-[60px] felx items-center justify-center text-center">
                  <div
                    className="relative [@media(min-width:1440px)]:w-[70px] w-[60px] [@media(min-width:1440px)]:h-[70px] h-[60px]"
                  >
                    <svg
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="
            M 50,5
            Q 57,5 63,10
            L 85,25
            Q 91,30 91,37
            L 91,63
            Q 91,70 85,75
            L 63,90
            Q 57,95 50,95
            Q 43,95 37,90
            L 15,75
            Q 9,70 9,63
            L 9,37
            Q 9,30 15,25
            L 37,10
            Q 43,5 50,5
            Z"
                        fill="#000000"
                      />
                    </svg>
                    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                      <h1 className="[@media(min-width:1440px)]:text-[30px] text-[25px] font-[600] text-[white] text-center">
                        {key.id}
                      </h1>
                    </div>
                  </div>
                </div>

                <img src={key.img} className="[@media(min-width:1440px)]:w-[175px] w-[150px] mx-auto" />
                <div className="pt-[1rem] w-full">
                  <h1 className="[@media(min-width:1440px)]:text-[22px]  text-[18px] font-[700]">
                    {key.tittle}
                  </h1>
                  <p className="[@media(min-width:1440px)]:text-[16px] text-[14px] font-[400] pt-[6px] text-[#000000]">
                    {key.description}
                  </p>
                </div>
                <div className="absolute left-0 [@media(min-width:1440px)]:bottom-[-18px] bottom-[-10px] w-full flex justify-center">
                  <div className="[@media(min-width:1440px)]:w-[161px] w-[134px] [@media(min-width:1440px)]:h-[25px] h-[16px] bg-[#CBEC5E] rounded-t-[15px]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

export default stepsofsuccess;
