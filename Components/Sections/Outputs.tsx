import AppContext from "AppContext";
import SectionHeading from "Components/Common/SectionHeading";
import { Paragraph } from "Components/Styled/Paragraph";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import React, { useContext } from "react";

const Outputs = ({
  programOutputsHeadline,
  programOutputsText,
  programOutputsImage,
}) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section direction={screenWidth > 768 ? "" : ""} pr="0" gap="5rem">
      <div className="basis-1/2">
        <Image
          src={programOutputsImage}
          alt=""
          width={10000}
          height={10000}
          className="w-full h-auto"
        />
      </div>
      <div className="basis-1/2 tab:pr-28 tab:mb-28">
        <SectionHeading title={programOutputsHeadline} />
        <Paragraph>{programOutputsText}</Paragraph>
      </div>
    </Section>
  );
};

export default Outputs;
