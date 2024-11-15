import React from "react";

const NetworkConnectionWarning = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black text-white p-4 text-center z-50 flex flex-col md:flex-row items-center justify-center">
      {/* Warning symbol ⚠️ in amber-500 color */}
      <span className="text-amber-500 text-[40px] md:text-xl lg:text-2xl xl:text-3xl mr-2">
        ⚠️
      </span>

      {/* Warning message */}
      <p className="chakra-medium text-[13px] md:text-md lg:text-lg xl:text-xl">
        You are offline. Please check your network connection.
      </p>
    </div>
  );
};

export default NetworkConnectionWarning;
