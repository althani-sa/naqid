import AppContext from "AppContext";
import SectionHeading from "Components/Common/SectionHeading";
import { Paragraph } from "Components/Styled/Paragraph";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import { useContext } from "react";

const Goals = ({ goalsHeadline, goalsText, goalsImage }) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? "row" : "column-reverse"}
      pl="0"
      pr={screenWidth < 768 && "0"}
      id="goals"
      className="scroll-mt-32"
    >
      <div
        className="flex flex-col gap-10 basis-5/10
      tab:px-8"
      >
        <SectionHeading title={goalsHeadline} />
        <Paragraph>{goalsText}</Paragraph>
      </div>
      <div className="basis-5/10 tab:mb-24">
        <Image
          src={goalsImage}
          alt=""
          className="w-full h-auto"
          width={10000}
          height={10000}
        />
      </div>
    </Section>
  );
};

export default Goals;
