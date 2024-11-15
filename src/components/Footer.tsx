import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Light.svg";
import YoutubeIcon from "../assets/icons/YoutubeIcon.tsx";
import TwitterIcon from "../assets/icons/TwitterIcon.tsx";
import InstagramIcon from "../assets/icons/InstagramIcon.tsx";
import DiscardIcon from "../assets/icons/DiscordIcon.tsx";
import GithubIcon from "../assets/icons/GithubIcon.tsx";

const Footer = () => {
  return (
    <footer className="w-full text-neutral-400 mt-10 md:mt-0">
      <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-8 lg:gap-y-0 lg:flex justify-between border-y-[1px] border-neutral-700 py-8 md:py-12 lg:py-16 xl:py-20">
        {/* Product Section */}
        <div>
          <h4 className="chakra-bold text-neutral-600 font-semibold lg:mb-1.5 xl:mb-2 uppercase text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
            Product
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Editor
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Runtimes
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Renderer
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Changelog
              </Link>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h4 className="chakra-bold text-neutral-600 font-semibold lg:mb-1.5 xl:mb-2 uppercase text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
            Community
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Community Files
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Bug Reports
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Feature Requests
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Experts
              </Link>
            </li>
          </ul>
        </div>

        {/* Learn Section */}
        <div>
          <h4 className="chakra-bold text-neutral-600 font-semibold lg:mb-1.5 xl:mb-2 uppercase text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
            Learn
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="chakra-bold text-neutral-600 font-semibold lg:mb-1.5 xl:mb-2 uppercase text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
            Company
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div>
          <h4 className="chakra-bold text-neutral-600 font-semibold lg:mb-1.5 xl:mb-2 uppercase text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
            Use Cases
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Game UI
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Runtime
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="poppins-medium hover:text-white underline text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
              >
                Product design
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Social Links */}
      <div className="w-full py-14">
        <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Caption */}
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <div className="md:block flex flex-col items-center justify-center text-center md:text-left w-full md:w-[410px]">
              <img className="w-12" src={Logo} alt="" />
              <p className="text-neutral-400 text-[11px] lg:text-[13px] xl:text-[15.5px] font-semibold mt-3">
                &copy; {new Date().getFullYear()} Enreach, Inc. All rights
                reserved.
              </p>
            </div>
            <p className="text-neutral-600 text-[11px] lg:text-[13px] xl:text-[15.5px] mt-1.5 font-semibold mx-auto md:mx-0 w-[320px] max-w-[86vw] lg:w-[370px] xl:w-[410px]">
              All trademarks, logos, and brand names are the property of their
              respective owners.
            </p>
          </div>

          {/* Social Links */}
          <div className="mx-auto flex space-x-4">
            <Link to="#" target="_blank">
              <YoutubeIcon />
            </Link>
            <Link to="#" target="_blank">
              <TwitterIcon />
            </Link>
            <Link to="#" target="_blank">
              <InstagramIcon />
            </Link>
            <Link to="#" target="_blank">
              <GithubIcon />
            </Link>
            <Link to="#" target="_blank">
              <DiscardIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
