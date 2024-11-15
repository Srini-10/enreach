import React, { useEffect, useRef, useState } from "react";
import Gradient from "../../assets/Gradient2.svg";
import GradientMobile from "../../assets/Gradient3.svg";
import Arrow from "../../assets/Arrow.svg";
import SampleImage from "../../assets/SampleImage.png";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

// Variables for card contents
const cardContent = [
  {
    title: "Ask anything",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates sequi, repellatnon similique quam.",
    image: SampleImage,
  },
  {
    title: "Ask anything",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates sequi, repellatnon similique quam.",
    image: SampleImage,
  },
  {
    title: "Ask anything",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates sequi, repellatnon similique quam.",
    image: SampleImage,
  },
  {
    title: "Ask anything",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates sequi, repellatnon similique quam.",
    image: SampleImage,
  },
  {
    title: "Ask anything",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates sequi, repellatnon similique quam.",
    image: SampleImage,
  },
  {
    title: "Ask anything",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptates sequi, repellatnon similique quam.",
    image: SampleImage,
  },
];

const Templates = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 1440);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [clickedStates, setClickedStates] = useState(
    new Array(cardContent.length).fill(false)
  );

  const buttonRefs = useRef([]);

  const handleClick = (index) => {
    setClickedStates((prevStates) =>
      prevStates.map((state, idx) => (idx === index ? !state : state))
    );

    const buttonRect = buttonRefs.current[index].getBoundingClientRect();

    confetti({
      particleCount: 40,
      spread: 80,
      startVelocity: 15,
      origin: {
        x: (buttonRect.left + buttonRect.width / 2) / window.innerWidth,
        y: (buttonRect.top + buttonRect.height / 2) / window.innerHeight,
      },
      scalar: 0.5, // Scale down the confetti size
    });
  };

  return (
    <>
      <div className="w-full lg:h-[720px] xl:h-[880px] -mt-24 lg:-mt-18 xl:mt-22 flex-col justify-center items-center relative">
        <h1 className="text-[20px] md:text-[32px] lg:text-[40px] xl:text-[50px] w-[300px] md:w-[500px] lg:w-[700px] mx-auto text-center Geist-medium md:leading-[40px] lg:leading-[50px] xl:leading-[60px]">
          Chat Smarter, Not Harder with Brainwave
        </h1>
        <img
          src={Gradient}
          alt="Gradient Background"
          className="absolute hidden md:block md:top-32 lg:top-0 left-1/2 transform -translate-x-1/2 md:w-[680px] lg:w-[800px] xl:w-[1000px] opacity-25"
        />
        <img
          src={GradientMobile}
          alt="Gradient Background"
          className="absolute md:hidden top-0 left-1/2 transform -translate-x-1/2 w-full opacity-25"
        />

        <div className="w-full xl:w-[1400px] xl:max-w-full mx-auto h-auto px-[30px] md:px-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 xl:gap-10 mt-10 md:mt-16 relative z-10">
          {cardContent.map((card, index) => (
            <div key={index} className="relative">
              <div className="group relative w-full h-[250px] md:h-[220px] xl:h-[300px] rounded-3xl">
                {/* Front Side */}
                <div className="absolute w-full h-full p-5 xl:p-6 border-[1px] border-neutral-700 bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl rounded-tr-[50px] flex flex-col justify-between origin-left transform group-hover:rotate-y-180 transition-all duration-700 ease-in-out">
                  <div>
                    <h1 className="text-[20px] md:text-[22px] xl:text-[28px] Geist-bold">
                      {card.title}
                    </h1>
                    <p className="text-[14px] md:text-[12px] xl:text-[16px] text-justify Geist-light mt-2.5 opacity-50">
                      {card.description}
                    </p>
                  </div>
                  <div className="w-full flex justify-between items-center transition duration-1000">
                    <Button
                      className="group-hover:opacity-100 opacity-0 z-50 transition-all duration-1000 ease-in-out rounded-tr-[7px]"
                      color="warning"
                      variant="bordered"
                      size={isMobile ? "md" : "sm"}
                    >
                      Buy Now
                    </Button>

                    {/* "Learn More" button with localized confetti effect */}
                    <div
                      onClick={() => handleClick(index)}
                      className="flex justify-end group items-center xl:px-4 cursor-pointer"
                      ref={(el) => (buttonRefs.current[index] = el)}
                    >
                      <p className="Geist-medium text-[14px] md:text-[15px] lg:text-[12px] xl:text-[15px]">
                        LEARN MORE
                      </p>
                      <img
                        className={`w-[16px] h-[16px] ml-3 transition-all duration-1000 ease-in-out ${
                          clickedStates[index]
                            ? "transform translate-x-6"
                            : "group-hover:translate-x-3"
                        }`}
                        src={Arrow}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-[73%] rounded-3xl rounded-tr-[50px] shadow-md overflow-hidden border border-neutral-700 transform origin-left rotate-y-180 group-hover:rotate-y-0 transition-all duration-700 ease-in-out back-face opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                  <img
                    src={card.image}
                    alt="Card Back"
                    className="w-full h-full object-cover rounded-3xl rounded-tr-[50px] transition-opacity duration-700 ease-in-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Templates;
