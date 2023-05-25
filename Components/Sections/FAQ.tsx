import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";
import React, { useState } from "react";

const FAQ = ({ faqsHeadline, faqs }) => {
  let [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  return (
    <Section pb="5rem">
      <SectionHeading title={faqsHeadline} />
      <div className="mt-20 flex flex-col w-full items-stretch">
        {faqs.map(({ question, answer }, i) => {
          return (
            <div
              className={`relative py-4 text-2xl border-t-2 px-20 duration-300 cursor-pointer ${
                activeQuestionIndex == i ? "max-h-[20rem]" : "max-h-[4rem]"
              }`}
              key={i}
              onClick={() => setActiveQuestionIndex(i)}
            >
              <FontAwesomeIcon
                className="absolute top-4 left-20"
                icon={faArrowDown}
              />
              <h4 className="text-2xl font-bold mb-4">{question}</h4>
              <p
                className={`mb-2 duration-200 ${
                  activeQuestionIndex == i
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                {answer}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
