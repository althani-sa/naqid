import AppContext from "AppContext";
import SectionHeading from "Components/Common/SectionHeading";
import { Paragraph } from "Components/Styled/Paragraph";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Target = ({
  targetHeadline,
  targetText,
  durationHeadline,
  durationText,
  targetImage,
}) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? "row" : "column"}
      items="start"
      pr="0"
      pl={screenWidth < 768 && "1rem"}
      pt={screenWidth < 768 && "5rem"}
      id="target"
      className="scroll-mt-32"
    >
      <div
        className="basis-5/10
                      tab:mb-10"
      >
        <Image
          src={targetImage}
          alt=""
          className="w-full h-auto"
          width={10000}
          height={10000}
        />
      </div>
      <div className="basis-1/2 tab:pr-8">
        <SectionHeading title={targetHeadline} />
        <Paragraph className="mb-16">{targetText}</Paragraph>
        <SectionHeading title={durationHeadline} />
        <Paragraph>{durationText}</Paragraph>
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfNF4QUVDppaiUl3uFrmrvjzT1cca5B_5p4QKgplhfq5GT6Ew/viewform"
          }
          target="_blank"
          className="block w-fit font-bold px-7 py-4 rounded-3xl bg-darkBlue text-white text-2xl mt-16
                            tab:mt-10"
        >
          سجّل الآن
        </Link>
      </div>
    </Section>
  );
};

export default Target;
