import React from "react";

const Banner = () => {
  return (
    <>
      <div className="select-none max-w-full w-full h-[70px] max-h-[70px] p-2 border-b-[0.5px] backdrop-blur-md flex justify-center px-10 items-center">
        <div className="poppins-light-italic w-[60vw] h-full rounded-2xl flex items-center justify-center p-1.5">
          Offer for two days and Get flat
          <span className="ml-2 text-[18px] border-1.5 border-amber-500 bg-amber-950 bg-opacity-25 font-semibold rounded-2xl rounded-tr-[8px] rounded-bl-[10px] w-[100px] h-full flex justify-center items-center">
            20% OFF
          </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
