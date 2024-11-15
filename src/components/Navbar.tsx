import React, { useState, useEffect } from "react";
import { Squeeze } from "hamburger-react";
import Logo from "../assets/Enreach_Light.svg";
import LogoMobile from "../assets/Enreach_Light_Empty.svg";
import { Button, Link } from "@nextui-org/react";
import DotGroup from "../animation/DotGroup.tsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on component mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-full w-full min-h-[64px] max-h-[64px] border-b-[0.5px] border-neutral-700 bg-black bg-opacity-80 backdrop-blur-sm sticky flex justify-between px-5 md:px-10 items-center top-0 z-50">
      <div className="w-36 z-50 flex justify-between items-center max-h-[60px]">
        {/* Conditionally render Logo based on screen size */}
        <img src={isMobile ? LogoMobile : Logo} alt="Logo" />
      </div>

      <div className="hidden lg:flex list-none space-x-10 items-center">
        <Link href="">
          <li className="cursor-pointer text-[16.5px] font-medium text-neutral-400 hover:text-white transition duration-300">
            Home
          </li>
        </Link>
        <Link href="">
          <li className="cursor-pointer text-[16.5px] font-medium text-neutral-400 hover:text-white transition duration-300">
            About
          </li>
        </Link>
        <Link href="">
          <li className="cursor-pointer text-[16.5px] font-medium text-neutral-400 hover:text-white transition duration-300">
            Templates
          </li>
        </Link>
        <Link href="">
          <li className="cursor-pointer text-[16.5px] font-medium text-neutral-400 hover:text-white transition duration-300">
            Contact
          </li>
        </Link>
      </div>

      <div className="hidden lg:block">
        <Button
          size="md"
          color="warning"
          variant="bordered"
          className="rounded-tr-[7px]"
        >
          Get Started
        </Button>
      </div>

      <div className="lg:hidden flex items-center z-50">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="relative z-50"
        >
          <Squeeze
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            color="white"
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute list-none top-[calc(0px+64px)] left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-lg flex flex-col items-start space-y-3 pt-10 z-40">
          <Link
            href=""
            className="w-[90vw] mx-auto hover:bg-amber-500 bg-opacity-10 rounded-md min-h-10 px-5 relative flex justify-between items-center"
          >
            <li
              onClick={toggleMenu}
              className="text-[18px] text-neutral-400 hover:text-white transition duration-300"
            >
              Home
            </li>
            <DotGroup count={3} />
          </Link>
          <Link
            href=""
            className="w-[90vw] mx-auto hover:bg-amber-500 bg-opacity-10 rounded-md min-h-10 px-5 relative flex justify-between items-center"
          >
            <li
              onClick={toggleMenu}
              className="text-[18px] text-neutral-400 hover:text-white transition duration-300"
            >
              About
            </li>
            <DotGroup count={2} />
          </Link>
          <Link
            href=""
            className="w-[90vw] mx-auto hover:bg-amber-500 bg-opacity-10 rounded-md min-h-10 px-5 relative flex justify-between items-center"
          >
            <li
              onClick={toggleMenu}
              className="text-[18px] text-neutral-400 hover:text-white transition duration-300"
            >
              Templates
            </li>
            <DotGroup count={4} />
          </Link>
          <Link
            href=""
            className="w-[90vw] mx-auto hover:bg-amber-500 bg-opacity-10 rounded-md min-h-10 px-5 relative flex justify-between items-center"
          >
            <li
              onClick={toggleMenu}
              className="text-[18px] text-neutral-400 hover:text-white transition duration-300"
            >
              Contact
            </li>
            <DotGroup count={2} />
          </Link>
          <div className="pt-7 w-[88vw] mx-auto">
            <Button
              size="md"
              color="warning"
              variant="bordered"
              className="rounded-tr-[7px] w-full py-5"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>

          {/* Quote positioned at the bottom */}
          <div className="w-full absolute bottom-12 text-center text-neutral-700 text-sm pb-10">
            "The future belongs to Tech."
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
