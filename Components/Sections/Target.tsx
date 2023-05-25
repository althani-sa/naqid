import SectionHeading from "Components/Common/SectionHeading";
import { Paragraph } from "Components/Styled/Paragraph";
import { Section } from "Components/Styled/Section";
import Image from "next/image";

const Target = ({
  targetHeadline,
  targetText,
  durationHeadline,
  durationText,
  targetImage,
}) => {
  return (
    <Section direction="row" items="start" pr="0">
      <div className="basis-5/10">
        <Image
          src={targetImage}
          alt=""
          className="w-full h-auto"
          width={10000}
          height={10000}
        />
      </div>
      <div className="basis-1/2">
        <SectionHeading title={targetHeadline} />
        <Paragraph className="mb-16">{targetText}</Paragraph>
        <SectionHeading title={durationHeadline} />
        <Paragraph>{durationText}</Paragraph>
        <button className="font-bold px-7 py-4 rounded-3xl bg-darkBlue text-white text-2xl mt-24">
          انضم الى برنامج ناقد
        </button>
      </div>
    </Section>
  );
};

export default Target;
