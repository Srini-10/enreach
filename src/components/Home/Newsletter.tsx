import React from "react";
import { Button } from "@nextui-org/react";

const Newsletter = () => {
  return (
    <>
      <div className="w-full h-[100px] md:h-[180px] lg:h-[210px] mt-14 md:mt-6 lg:mt-14 xl:mt-16 flex justify-center items-center">
        <div className="w-[80vw] md:w-[88vw] xl:w-[1100px] h-full md:flex justify-between gap-16 items-center">
          <div className="w-[280px] md:min-w-[300px] lg:min-w-[340px] xl:min-w-[400px]">
            <h1 className="chakra-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[23px] uppercase">
              Join our newsletter
            </h1>
            <p className="roboto-normal md:mt-1 opacity-60 text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
              Get all the latest Enreach news delivered to your inbox.
            </p>
          </div>
          <div className="w-full h-8 md:h-full flex justify-between items-center gap-4 mt-3 md:mt-0">
            <input
              type="text"
              className="w-full h-8 md:h-10 lg:h-12 rounded-xl px-2 md:px-3 lg:px-4 text-[11px] md:text-[13px] lg:text-[15px] text-neutral-800 focus:outline-none"
              placeholder="email@enreach.io"
            />
            <Button
              size="md"
              color="warning"
              variant="bordered"
              className="w-[130px] h-8 md:h-10 xl:h-12 rounded-xl rounded-tr-md text-amber-500 font-medium text-[12px] md:text-[14px] lg:text-[16px]"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
