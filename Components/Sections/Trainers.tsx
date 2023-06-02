import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import React, { useContext } from "react";
import leftShapeFill from "../../public/Assets/Images/LeftShapeFill.png";
import AppContext from "AppContext";

const Trainers = ({ trainersTeam, trainersTeamHeadline }) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      items="start"
      className="overflow-hidden scroll-mt-32"
      px={screenWidth < 768 && "2rem"}
      id="trainers"
    >
      <SectionHeading title={trainersTeamHeadline} />
      <div className="grid grid-cols-5 desc:grid-cols-3 tab:grid-cols-2 gap-32 mt-36 tab:px-10 w-full">
        {trainersTeam.map(({ name, image, noBg }, i) => {
          return (
            <div
              className={`relative after:centerH after:bottom-0 after:w-full min-h-[10rem] w-full after:aspect-square after:rounded-full after:-z-20 before:centerH before:top-full before:w-[130%] before:h-4  before:rounded-full mb-20 z-10 before:bg-darkBlue ${
                noBg ? "after:bg-none" : "after-bg-darkBlue"
              }`}
              key={i}
            >
              <Image
                src={image}
                alt=""
                width={10000}
                height={1000}
                className={`mx-auto w-full h-auto min-h-[16rem] centerH bottom-0 ${
                  noBg && "scale-150"
                }`}
              />
              <p className="centerH top-full translate-y-8 text-darkBlue text-xl w-52 text-center">
                {name}
              </p>
              {!noBg && (
                <Image
                  src={leftShapeFill.src}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-32 absolute bottom-0 left-0 -translate-x-1/2 -z-10 
                  tab:w-20"
                />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Trainers;
