import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const headerLinks = [
  {
    link: "/",
    name: "الصفحة الرئيسية",
  },
  {
    link: "/#about",
    name: "عن البرنامج",
  },
  // {
  //   link: "/#who",
  //   name: "لمن ناقد؟",
  // },
  {
    link: "/#plan",
    name: "خطة البرنامج",
  },
  {
    link: "/#conditions",
    name: "شروط التسجيل",
  },
  {
    link: "/#topics",
    name: "المحاور والمخرجات",
  },
  {
    link: "/#faq",
    name: "الأسئلة الشائعة",
  },
];

const Header = () => {
  let [sidebarIsActive, setSidebarIsActive] = useState(false);
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY > 500 && !isScrolled) {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className="fixed top-0 left-0 w-full flex items-center justify-between px-24 bg-green bg-opacity-70
      tab:py-5 tab:px-10  z-50"
      style={{ direction: "ltr" }}
    >
      <div className="">
        <Link
          className="px-5 py-2 border-darkBlue border-2 rounded-2xl text-darkBlue text-2xl"
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfNF4QUVDppaiUl3uFrmrvjzT1cca5B_5p4QKgplhfq5GT6Ew/viewform"
          }
          target="_blank"
        >
          التسجيل
        </Link>
      </div>
      {/* Links */}
      <ul
        className={`flex flex-row-reverse items-center gap-8 text-white tab:fixed tab:top-0 tab:right-0 tab:h-full tab:w-full duration-500 mob:bg-darkBlue mob:z-[9999] mob:flex-col mob:items-center mob:justify-center ease-out ${
          sidebarIsActive ? "tab:-translate-y-0" : "tab:-translate-y-full"
        }`}
      >
        {headerLinks.map(({ link, name }, i) => {
          return (
            <li
              key={i}
              className="py-8 relative hover:text-darkBlue duration-100 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:rounded-2xl after:bg-orange after:opacity-0 hover:after:opacity-100 after:duration-200 opacity-0 animate-fadeIn"
              onClick={() => setSidebarIsActive(false)}
            >
              <Link
                href={link}
                className="relative text-xl font-bold hover:text-orange duration-200 "
              >
                {name}
              </Link>
            </li>
          );
        })}

        {/* Disable Button */}
        <li>
          <button
            className="absolute top-8 right-8 hidden tab:block "
            onClick={() => setSidebarIsActive(false)}
          >
            <FontAwesomeIcon icon={faBars} className="text-4xl text-white" />
          </button>
        </li>
      </ul>
      {/* Activate sidebar button */}
      <button
        className="hidden tab:block"
        onClick={() => setSidebarIsActive(true)}
      >
        <FontAwesomeIcon icon={faBars} className="text-4xl text-white" />
      </button>
      {/* {isScrolled && */}
      <div className="fixed bottom-10 right-10">
        <Link
          className="px-4 py-2 bg-darkBlue border-darkBlue border-2 rounded-2xl text-white text-3xl"
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfNF4QUVDppaiUl3uFrmrvjzT1cca5B_5p4QKgplhfq5GT6Ew/viewform"
          }
          target="_blank"
        >
          للتسجيل
        </Link>
      </div>
    </header>
  );
};

export default Header;
