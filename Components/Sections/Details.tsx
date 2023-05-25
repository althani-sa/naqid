import DetailCard from "Components/Cards/DetailCard";
import SectionHeading from "Components/Common/SectionHeading";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AppContext from "AppContext";
import { Section } from "Components/Styled/Section";
import { ProgramDetail } from "public/Assets/Types/types";

const Details = ({
  programDetailsHeadline,
  programDetails,
}: {
  programDetailsHeadline: string;
  programDetails: ProgramDetail[];
}) => {
  let { screenWidth } = useContext(AppContext);
  let [activeDetail, setActiveDetail] = useState<ProgramDetail | null>(null);
  const updateService = (service) => {
    let activeDetailElement = document.getElementById(
      "activeDetail"
    ) as HTMLElement;
    if (!activeDetail) {
      let detailsGrid = document.getElementById("detailsGrid") as HTMLElement;
      detailsGrid.classList.remove("basis-full");
      detailsGrid.classList.add("basis-6/10");
    } else {
      activeDetailElement.style.opacity = "0";
    }
    setTimeout(() => {
      setActiveDetail(service);
    }, 500);
    setTimeout(() => {
      let activeDetailElement = document.getElementById(
        "activeDetail"
      ) as HTMLElement;
      if (activeDetailElement) {
        activeDetailElement.style.opacity = "1";
        if (screenWidth < 768) {
          window.scrollTo(0, window.scrollY + 400);
        }
      }
    }, 550);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{
        duration: 0.7,
      }}
    >
      <Section id="details" className="scroll-mt-32">
        <SectionHeading title={programDetailsHeadline} />
        <div className="flex items-stretch tab:flex-col tab:gap-10 gap-0 w-full">
          {/* Services */}
          <div
            className={`grid grid-cols-3 tab:grid-cols-2 gap-12 duration-500 basis-full pl-14 tab:pl-0 mt-28`}
            id="detailsGrid"
          >
            {programDetails.map((detail, i) => {
              return (
                <DetailCard
                  detail={detail}
                  key={i}
                  active={activeDetail?.title == detail.title}
                  activateDetail={() => updateService(detail)}
                />
              );
            })}
          </div>
          {/* Active Service */}
          {activeDetail && (
            <div
              className="basis-4/10 w-full bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-10 duration-300 opacity-0"
              style={{ animationDelay: "500ms" }}
              id="activeDetail"
            >
              <div className="flex flex-col items-center justify-center gap-4 mb-8">
                <figure className="relative z-50">
                  <Image
                    src={activeDetail?.icon}
                    alt={activeDetail?.title}
                    width={1000}
                    height={1000}
                    className="w-32 h-auto"
                  />
                </figure>
                <h3 className="text-3xl text-darkBlue font-bold">
                  {activeDetail?.title}
                </h3>
              </div>
              {/* Active Service Brief */}
              <p className="text-xl font-medium text-darkBlue text-center">
                {activeDetail?.brief}
              </p>
            </div>
          )}
        </div>
      </Section>
    </motion.div>
  );
};

export default Details;
