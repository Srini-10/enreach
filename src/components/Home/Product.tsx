import React, { useEffect, useRef } from "react";
import SampleImage from "../../assets/SampleImage.png";

const Product = () => {
  const ballsContainer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ballsContainer.current) {
        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate percentage of cursor position within the window
        const offsetX = (clientX / windowWidth) * 30 - 15;
        const offsetY = (clientY / windowHeight) * 30 - 15;

        // Apply transform to the balls container
        ballsContainer.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative z-10 lg:flex justify-between items-center gap-5 bg-black bg-opacity-30 backdrop-blur-lg opacity-80 mx-auto w-full px-[10vw] md:px-0 md:w-[90vw] lg:w-[900px] xl:w-[1200px] lg:max-h-[500px] xl:max-h-[700px] lg:h-[calc(100vh-110px)] border-t-[1px] border-neutral-700 md:border-none mt-0 pt-12 md:pt-0 md:mt-20 overflow-hidden md:rounded-2xl">
        {/* Left Container with Background Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:min-h-full flex flex-col justify-end p-6 md:p-10 overflow-hidden rounded-2xl border-[1px] border-neutral-700">
          <img
            src={SampleImage}
            alt="Background"
            className="absolute top-0 bottom-0 left-0 w-auto md:w-full lg:w-auto h-full md:h-auto lg:h-full opacity-50 object-cover"
            style={{ zIndex: -1 }}
          />
          <h1 className="Geist-bold text-[17px] md:text-[20px] lg:text-[30px] xl:text-[45px] text-white">
            Digital Marketing
          </h1>
          <p className="Geist-medium opacity-80 text-white text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
            Automatically enhance your photos using our AI app's photo editing
            feature. Try it now!
          </p>
        </div>

        {/* Right Container with Top Content and Bottom Image */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-full bg-amber-500 bg-opacity-10 flex flex-col lg:mt-0 mt-7 justify-between p-5 overflow-hidden rounded-2xl border-[1px] border-neutral-700">
          {/* Top Content */}
          <div className="text-white px-2 md:px-4 pb-5 lg:p-5">
            <h2 className="text-[17px] md:text-[25px] lg:text-[30px] xl:text-[45px] font-bold">
              About Our Service
            </h2>
            <p className="text-[12px] md:text-[14px] lg:text-[15px] xl:text-[20px] lg:mt-1 xl:mt-2 opacity-70">
              Discover our AI-powered tools that bring your ideas to life with
              ease.
            </p>
          </div>

          {/* Bottom Image */}
          <img
            src={SampleImage}
            alt="Right Side Background"
            className="w-full h-[78%] lg:h-[60%] object-cover rounded-xl"
            style={{ alignSelf: "flex-end" }}
          />

          {/* Floating Balls at Bottom Right */}
          <div
            ref={ballsContainer}
            className="absolute scale-[0.3] md:scale-[0.7] lg:scale-1 bottom-8 md:bottom-10 right-8 md:right-10"
          >
            <div className="ball ball-1 bg-amber-500 shadow-lg"></div>
            <div className="ball ball-2 bg-amber-600 shadow-lg"></div>
            <div className="ball ball-3 bg-amber-500 shadow-lg"></div>
            <div className="ball ball-4 bg-amber-400 shadow-lg"></div>
            <div className="ball ball-5 bg-amber-500 shadow-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
