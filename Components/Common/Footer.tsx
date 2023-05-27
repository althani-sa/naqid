import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/index";
import Image from "next/image";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "AppContext";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const Footer = ({}) => {
  let { isArabic } = useContext(AppContext);
  return (
    <footer className="px-36 py-28 desc:px-20 pb-10 bg-darkBlue text-white ">
      <div className="container flex flex-row-reverse justify-between items-center desc:flex-col desc:items-center">
        {/* Start sLogo */}
        <div className="flex flex-col items-center tab:items-center gap-8 tab:mb-10 self-start tab:self-center">
          <Image
            src={require("../../public/Assets/Svg/WhiteLogo.svg")}
            width={251}
            height={143}
            alt=""
          />
        </div>
        {/* Start Links */}
        <div className="links-container flex gap-32 mob:flex-col mob:mt-16 desc:mb-12 mob:gap-16">
          <ul className="grid grid-cols-2 grid-rows-3 gap-x-32">
            <p className="links-heading text-end tab:text-center col-start-1 col-end-3 font-bold font-Larrseit mb-12 tab:text-4xl">
              {isArabic ? "الروابط السريعة" : "Quick Links"}
            </p>
            <li className="link mb-9 text-end">
              <a
                href={"/#about"}
                rel="noreferrer"
                className=" font-Larrseit text-sm tab:text-2xl text-white opacity-70 "
              >
                من نحن
              </a>
            </li>
            <li className="link mb-9 text-end">
              <a
                href={"/#contact"}
                rel="noreferrer"
                className=" font-Larrseit text-sm tab:text-2xl text-white opacity-70 "
              >
                التواصل
              </a>
            </li>
            <li className="link mb-9 text-end">
              <a
                href={"/#services"}
                rel="noreferrer"
                className=" font-Larrseit text-sm tab:text-2xl text-white opacity-70 "
              >
                الخدمات
              </a>
            </li>
            <li className="link mb-9 text-end">
              <a
                href={"/#features"}
                rel="noreferrer"
                className=" font-Larrseit text-sm tab:text-2xl text-white opacity-70 "
              >
                المزايا
              </a>
            </li>
          </ul>
        </div>
        {/* Start Links */}
        <button className="text-white px-7 py-4 rounded-3xl bg-green text-3xl">
          التسجيل في ناقد
        </button>
      </div>
      <div className="container flex mob:flex-col mob:items-center mt-10 tab:mt-10 ">
        <div className="links flex flex-row-reverse flex-1 justify-center items-center gap-10 border-t-2 border-blue text-white border-opacity-20 mob:border-opacity-0 pt-6 mob:gap-5 tab:text-xl tab:w-full">
          <Link
            href={"#"}
            rel="noreferrer"
            className="tab:text-3xl w-10 aspect-square desc:w-16 flex items-center justify-center rounded-full border-blue border-2 border-opacity-30"
            hrefLang="en"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            href={"#"}
            rel="noreferrer"
            className="tab:text-3xl w-10 aspect-square desc:w-16 flex items-center justify-center rounded-full border-blue border-2 border-opacity-30"
            hrefLang="en"
          >
            {" "}
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            href={"#"}
            rel="noreferrer"
            className="tab:text-3xl w-10 aspect-square desc:w-16 flex items-center justify-center rounded-full border-blue border-2 border-opacity-30"
          >
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
