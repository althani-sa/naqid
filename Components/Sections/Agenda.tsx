import SectionHeading from "Components/Common/SectionHeading";
import { Paragraph } from "Components/Styled/Paragraph";
import { Section } from "Components/Styled/Section";
import Image from "next/image";
import { AgendaDetail } from "public/Assets/Types/types";
import closedBook from "../../public/Assets/Svg/CLosedBook.svg";
import openedBook from "../../public/Assets/Svg/OpenedBook.svg";

const Agenda = ({
  agendaHeadline,
  agendaText,
  agendaDetails,
}: {
  agendaHeadline: string;
  agendaText: string;
  agendaDetails: AgendaDetail[];
}) => {
  return (
    <Section items="start" className="">
      <SectionHeading title={agendaHeadline} />
      <Paragraph className="mb-20">{agendaText}</Paragraph>
      <div className="grid grid-cols-10 tab:grid-cols-1 w-full gap-10 overflow-x-clip">
        {agendaDetails.map(({ days, title }, i) => {
          return (
            <div
              className={`relative col-span-1 w-full aspect-square rounded-full flexCenter bg-darkBlue  mt-7 mb-28  after:w-[400%] after:h-2 after:bg-darkBlue after:-z-10 after:absCenter
              tab:w-44 tab:after:w-2 tab:after:h-[250%] tab:after:-z-10 ${
                i == 0
                  ? "tab:after:centerH tab:after:top-[200%]"
                  : i == agendaDetails.length - 1
                  ? "tab:after:centerH tab:after:top-[-100%]"
                  : ""
              }`}
              key={i}
            >
              <h3
                className="centerH bottom-full -translate-y-1/2 whitespace-nowrap text-green text-2xl font-semibold
                              tab:top-8 tab:right-full tab:-left-20 tab:translate-y-0"
              >
                {days}
              </h3>
              <Image
                src={closedBook.src}
                alt=""
                className="w-8/10 h-auto"
                width={1000}
                height={10000}
              />
              <p
                className="centerH top-full translate-y-4 w-32 text-black opacity-50 text-center
                            tab:top-20 tab:w-52 tab:right-7/10 tab:translate-y-0 tab:text-start"
              >
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Agenda;
