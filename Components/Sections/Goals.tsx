import SectionHeading from "Components/Common/SectionHeading";
import { Paragraph } from "Components/Styled/Paragraph";
import { Section } from "Components/Styled/Section";
import Image from "next/image";

const Goals = ({ goalsHeadline, goalsText, goalsImage }) => {
  return (
    <Section direction="row" pl="0">
      <div className="flex flex-col gap-10 basis-5/10">
        <SectionHeading title={goalsHeadline} />
        <Paragraph>{goalsText}</Paragraph>
      </div>
      <div className="basis-5/10">
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
