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
      <div className="grid grid-cols-10 w-full gap-10 overflow-x-clip">
        {agendaDetails.map(({ days, title }, i) => {
          return (
            <div
              className="relative col-span-1 w-full aspect-square rounded-full flexCenter bg-darkBlue mt-7 mb-28 after:absCenter after:w-[400%] after:h-2 after:bg-darkBlue after:-z-10"
              key={i}
            >
              <h3 className="centerH bottom-full -translate-y-1/2 whitespace-nowrap text-green text-2xl font-semibold">
                {days}
              </h3>
              <Image
                src={closedBook.src}
                alt=""
                className="w-8/10 h-auto"
                width={1000}
                height={10000}
              />
              <p className="centerH top-full translate-y-4 w-32 text-black opacity-50 text-center">
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
