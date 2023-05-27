import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import wing from "../../public/Assets/Svg/CircleWings.svg";
import { useContext } from "react";
import AppContext from "AppContext";

const Conditions = ({ conditionsHeadline, conditionsImage, conditions }) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? "row" : "column"}
      pr="0"
      gap={screenWidth > 768 ? "5rem" : "0"}
    >
      <div className="basis-1/2">
        <Image
          src={conditionsImage}
          alt=""
          width={10000}
          height={10000}
          className="w-full h-auto"
        />
      </div>
      <div className="basis-1/2 tab:pr-28">
        <SectionHeading title={conditionsHeadline} />
        {conditions.map((condition, i) => {
          return (
            <div key={i} className="flex items-center gap-4 mb-8 mt-10">
              <div className="relative max-w-[4.4rem] min-w-[4.4rem] aspect-square rounded-full bg-green flexCenter text-white text-3xl">
                <Image
                  src={wing.src}
                  alt=""
                  className="absolute top-1/4 left-0 w-1/2 h-auto"
                  width={10000}
                  height={10000}
                />
                0{i}
              </div>
              <p className="text-2xl">{condition}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Conditions;
