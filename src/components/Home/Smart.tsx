import React from "react";
import Gradient from "../../assets/Gradient.svg";
import ProductImg from "../../assets/SampleImage.png";
import Tick from "../../assets/Tick.svg";

const Smart = () => {
  return (
    <>
      <div className="w-full h-[500px] mt-10 md:mt-10 lg:mt-1 lg:h-[600px] xl:h-[1000px] flex justify-center items-center bg-opacity-25 backdrop-blur-3xl text-center overflow-hidden">
        {/* Background Images */}
        <img
          src={Gradient}
          alt=""
          className="absolute top-0 transform -translate-x-1/3 md:w-[500px] lg:max-w-[600px] xl:w-[1000px] -z-50 opacity-25"
        />
        <div className="relative md:mt-0 lg:-mt-24 xl:-mt-52 z-10 md:flex justify-between items-center bg-black bg-opacity-30 backdrop-blur-lg border-[1px] border-neutral-700 opacity-80 md:w-[90vw] xl:w-[1200px] mx-auto xl:min-h-[700px] md:h-[400px] lg:h-[500px] max-h-[calc(100vh-110px)] rounded-2xl overflow-hidden">
          <div className="w-[88vw] md:w-[65%] max-h-[400px] md:h-full overflow-hidden">
            {/* Shadow Overlay */}
            <div className="md:absolute right-0 top-0 bottom-0 h-full w-[200%] bg-gradient-to-l from-black via-transparent to-transparent opacity-100 z-10 pointer-events-none"></div>
            <img
              className="md:absolute top-0 bottom-0 left-0 w-full md:max-w-[62.5%] shadow-inner md:shadow-none h-full object-cover"
              src={ProductImg}
              alt=""
            />
          </div>
          <div className="p-4 md:p-4 lg:p-8 xl:p-10 z-10">
            <h1 className="poppins-bold text-white text-[15px] md:text-[17px] lg:text-[23px] xl:text-[35px]">
              Smartest Marketing
            </h1>
            <p className="Geist-normal text-gray-300 mt-1 text-[10px] md:text-[11px] lg:text-[13px] xl:text-[16px]">
              Enreach unlocks the potential of Marketing Strategies.
            </p>
            <ul className="mt-5 md:mt-9 w-[85%] mx-auto">
              <li className="Geist-normal flex gap-5 text-[11px] md:text-[12px] lg:text-[14px] items-center xl:text-[18px] py-1.5 md:py-2.5 lg:py-3 xl:py-3.5 border-b-[0.5px] border-t-[1px] border-amber-500 border-opacity-25">
                <img src={Tick} alt="" className="w-4 md:w-5 lg:w-6 xl:w-7" />
                Search Engine Optimization
              </li>
              <li className="Geist-normal flex gap-5 text-[11px] md:text-[12px] lg:text-[14px] items-center xl:text-[18px] py-1.5 md:py-2.5 lg:py-3 xl:py-3.5 border-b-[0.5px] border-t-[0.5px] border-amber-500 border-opacity-25">
                <img src={Tick} alt="" className="w-4 md:w-5 lg:w-6 xl:w-7" />
                Content Marketing
              </li>
              <li className="Geist-normal flex gap-5 text-[11px] md:text-[12px] lg:text-[14px] items-center xl:text-[18px] py-1.5 md:py-2.5 lg:py-3 xl:py-3.5 border-b-[1px] border-t-[0.5px] border-amber-500 border-opacity-25">
                <img src={Tick} alt="" className="w-4 md:w-5 lg:w-6 xl:w-7" />
                Meta Ads
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Smart;
