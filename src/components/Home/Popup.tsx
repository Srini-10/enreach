import React, { useEffect, useState } from "react";

interface PopupProps {
  containerRef: React.RefObject<HTMLDivElement>; // Accept containerRef as a prop
}

const Popup: React.FC<PopupProps> = ({ containerRef }) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const mobileHeight = window.innerWidth <= 768 ? 920 : 770;
        const isNearBottom =
          containerRef.current.scrollHeight -
            containerRef.current.scrollTop -
            containerRef.current.clientHeight <=
          mobileHeight;

        if (isNearBottom) {
          setShowPopup(false);
        } else {
          setShowPopup(true);
        }
      }
    };

    // Add scroll event listener to the scrollable container
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    // Initial check to ensure popup state is correct on component mount
    if (containerRef.current) {
      handleScroll();
    }

    // Cleanup function to remove the scroll event listener
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [containerRef]);

  return (
    <div
      className={`select-none sticky top-[calc(100vh-70px)] z-40 max-w-full w-full h-[60px] lg:h-[66px] xl:h-[70px] mt-32 max-h-[70px] p-2 flex justify-center px-10 items-center transition-all duration-500 ease-in-out ${
        !showPopup
          ? "opacity-0 visibility-hidden translate-y-12"
          : "opacity-100 visibility-visible translate-y-0"
      }`}
    >
      <div className="poppins-light-italic text-[9px] md:text-[13px] lg:text-[15px] xl:text-[17px] w-[80vw] md:w-[64vw] xl:w-[760px] border-[1px] border-neutral-700 h-full rounded-2xl backdrop-blur-md flex items-center justify-center p-1.5">
        Offer for two days and Get flat
        <span className="ml-2 text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] border-1.5 border-amber-500 bg-amber-950 bg-opacity-25 font-semibold rounded-2xl rounded-tr-[8px] rounded-bl-[11px] w-[100px] h-full flex justify-center items-center">
          20% OFF
        </span>
      </div>
    </div>
  );
};

export default Popup;
