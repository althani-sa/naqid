import { Section } from "Components/Styled/Section";
import Image from "next/image";
import React, { useContext } from "react";
import aboutUsBg from "../../public/Assets/Images/AboutUsBg.png";
import AppContext from "AppContext";

const About = ({ aboutUsText, aboutUsSections, aboutUsImage }) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? "row" : "column"}
      items="start"
      pr="0"
      pl={screenWidth < 768 && "0"}
      pb="0"
    >
      <div
        className="basis-5/10
        tab:pl-0"
      >
        <Image
          alt=""
          src={aboutUsImage}
          className="w-full h-auto"
          width={100000}
          height={10000}
        />
      </div>
      <div
        className="basis-5/10 flex flex-col
       tab:px-8"
      >
        <p className="text-2xl font-semibold leading-10 mb-10">{aboutUsText}</p>
        <div className="flex flex-col items-stretch">
          {aboutUsSections.map((section, i) => {
            return (
              <div
                className="relative py-6 pr-52 bg-darkBlue text-white mb-5 rounded-full text-xl shadow-xl h-24 flex items-center max-h-24
                tab:pr-40 tab:pl-5 tab:max-h-20"
                key={i}
              >
                {section}
                <span
                  className="flexCenter centerV right-0 h-full text-center px-16 rounded-full bg-green text-white text-3xl
                tab:px-10"
                >
                  0{i}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* BG Image */}
      <Image
        src={aboutUsBg.src}
        alt=""
        width={10000}
        height={10000}
        className="absolute top-0 right-0 -translate-y-1/5 w-[30rem] h-auto
        tab:w-60"
      />
    </Section>
  );
};

export default About;
