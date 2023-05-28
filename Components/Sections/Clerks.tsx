import AppContext from "AppContext";
import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import { useContext } from "react";

const Clerks = ({
  profileClerks,
  profileClerksHeadline,
  cretiqueClerks,
  cretiqueClerksHeadline,
  clerksImage,
}) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? "row" : "column"}
      pr="0"
      gap={screenWidth < 768 && "7rem"}
    >
      <div className="basis-1/2">
        <Image
          className="w-full h-auto"
          src={clerksImage}
          alt=""
          width={10000}
          height={10000}
        />
      </div>
      <div className="basis-1/2 pr-8">
        <SectionHeading title={profileClerksHeadline} />
        <div className="w-full grid grid-cols-2 gap-10 gap-y-8 mt-16 mb-24">
          {profileClerks.map((clerk, i) => {
            return <p className="text-3xl font-bold tab:text-2xl">{clerk}</p>;
          })}
        </div>
        <SectionHeading title={cretiqueClerksHeadline} />
        <div className="w-full grid grid-cols-2 gap-10 gap-y-8 mt-16">
          {cretiqueClerks.map((clerk, i) => {
            return <p className="text-3xl font-bold tab:text-2xl">{clerk}</p>;
          })}
        </div>
      </div>
    </Section>
  );
};

export default Clerks;
