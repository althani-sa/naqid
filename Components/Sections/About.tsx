import { Section } from "Components/Styled/Section";
import Image from "next/image";
import React from "react";
import aboutUsBg from "../../public/Assets/Images/AboutUsBg.png";

const About = ({ aboutUsText, aboutUsSections, aboutUsImage }) => {
  return (
    <Section direction="row" items="start" pr="0" pb="0">
      <div className="basis-5/10">
        <Image
          alt=""
          src={aboutUsImage}
          className="w-full h-auto"
          width={100000}
          height={10000}
        />
      </div>
      <div className="basis-5/10">
        <p className="text-2xl font-semibold leading-10 mb-10">{aboutUsText}</p>
        {aboutUsSections.map((section, i) => {
          return (
            <div
              className="relative py-6 pr-52 bg-darkBlue text-white mb-5 rounded-full text-xl shadow-xl h-24 flex items-center max-h-24"
              key={i}
            >
              {section}
              <span className="flexCenter centerV right-0 h-full text-center px-16 rounded-full bg-green text-white text-3xl">
                0{i}
              </span>
            </div>
          );
        })}
      </div>
      {/* BG Image */}
      <Image
        src={aboutUsBg.src}
        alt=""
        width={10000}
        height={10000}
        className="absolute top-0 right-0 -translate-y-1/5 w-[30rem] h-auto"
      />
    </Section>
  );
};

export default About;
