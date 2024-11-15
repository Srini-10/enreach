import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Gradient from "../../assets/Gradient.svg";
import Circles from "../../assets/Circles.svg";
import Line from "../../assets/Line.svg";
import ScreenShot from "../../assets/SampleImage.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="relative w-full flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-3xl text-center overflow-hidden">
        {/* Background Images */}
        <img
          src={Gradient}
          alt=""
          className="absolute top-0 md:top-16 lg:top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[700px] lg:w-[900px] xl:w-[1200px] -z-20 opacity-25 shadow-inner"
        />
        <img
          src={Circles}
          alt=""
          className="absolute top-8 md:top-16 lg:top-0 left-1/2 transform -translate-x-1/2 w-full md:w-[900px] lg:w-[1400px] opacity-20 -z-10"
        />

        {/* Content Section */}
        <div className="relative z-50 mt-5">
          <div className="w-[340px] max-w-[90vw] md:w-[680px] lg:w-[1000px] mx-auto h-[500px]">
            <h1 className="text-start md:text-center text-[20px] md:text-[32px] lg:text-[45px] xl:text-[55px] pt-8 md:pt-14 lg:pt-16 xl:pt-28 Geist-bold md:leading-[40px] lg:leading-[55px] xl:leading-[65px]">
              Explore the Possibilities of Marketing Strategies with Enreach.
            </h1>
            <div className="max-h-10 -mt-[22px] md:-mt-5 lg:-mt-5 xl:-mt-[17px] w-[352px] md:w-[550px] lg:w-[800px] xl:w-[870px] flex justify-end items-center overflow-hidden">
              <img className="w-28 md:w-44 lg:w-64 xl:w-80" src={Line} alt="" />
            </div>
            <p className="text-justify md:text-center text-[11px] md:text-[11px] lg:text-[14px] xl:text-[18px] font-semibold opacity-60 mb-5 md:mt-1 lg:mt-1.5 xl:mt-2 md:mx-16 lg:mx-32 xl:mx-20">
              Unlock the potential of your brand with Enreach Digital Marketing.
              Enhance your online presence and elevate your business with our
              cutting-edge digital marketing solutions.
            </p>
            <Button
              size={isMobile ? "lg" : "md"}
              className="bg-white shadow-lg group transition duration-300 z-50 relative rounded-tr-[7px]"
            >
              <div className="w-full h-full flex justify-between text-black group-hover:text-amber-500 items-center gap-3 transition duration-300">
                <div className="text-[13px] md:text-[17px] lg:text-[22px]">
                  Get Started
                </div>
                <div className="w-[0.5px] h-full bg-black opacity-15"></div>
              </div>
            </Button>
          </div>

          {/* Screenshot Container */}
          <div
            className="bg-black bg-opacity-90 border-[1px] border-neutral-700 overflow-hidden backdrop-blur-3xl opacity-80 mx-auto w-[88vw] md:w-[680px] lg:w-[960px] xl:w-[1300px] max-h-[700px] h-[200px] md:h-[500px] lg:h-[calc(100vh-110px)] -mt-56 md:-mt-40 lg:-mt-24 xl:mt-5 rounded-2xl"
            style={{ boxShadow: "0px 0px 10px 0px black" }}
          >
            <img
              src={ScreenShot}
              alt=""
              className="object-cover h-full w-full top-0 left-0"
            />
          </div>
          <div className="chakra-medium text-neutral-300 text-[10px] md:text-[14px] lg:text-[15px] xl:text-[16px] mt-6 md:mt-8 lg:mt-10 xl:mt-14">
            Helping people create beautiful content at
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
