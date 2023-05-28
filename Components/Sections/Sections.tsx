import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import greenWing from "../../public/Assets/Svg/GreenWing.svg";
import { useContext } from "react";
import AppContext from "AppContext";

const Sections = ({
  programSectionsHeadline,
  programSections,
  programSectionsImage,
}) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direciton="row"
      items="start"
      className="overflow-hidden scroll-mt-32"
      pb="5rem"
      pt="3rem"
      px={screenWidth < 768 && "2rem"}
      id="topics"
    >
      <div className="basis-1/2 tab:pt-[100vw]">
        <SectionHeading title={programSectionsHeadline} />
        <div className="flex flex-col gap-4 mt-20 mb-16">
          {programSections.map((section, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-8 text-2xl after:centerV after:w-screen after:h-full py-4 after:bg-darkBlue after:right-0 relative after:-z-10 after:translate-x-1/3 text-white tab:after:translate-x-1/10"
              >
                <Image
                  src={greenWing.src}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-5 h-auto"
                />
                {section}
              </div>
            );
          })}
        </div>
        <button
          className="text-darkBlue font-bold px-7 py-4 rounded-3xl bg-green text-4xl
        tab:text-3xl"
        >
          سارع بالتسجيل في ناقد
        </button>
      </div>
      {/* Image */}
      <Image
        src={programSectionsImage}
        alt=""
        width={100000}
        height={1000000}
        className="absolute top-0 left-0 h-full w-auto
                    tab:w-full tab:h-auto"
      />
    </Section>
  );
};

export default Sections;
