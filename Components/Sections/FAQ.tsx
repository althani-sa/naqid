import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "AppContext";
import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";
import Link from "next/link";
import React, { useContext, useState } from "react";

const FAQ = ({ faqsHeadline, faqs }) => {
  let [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  let { screenWidth } = useContext(AppContext);

  return (
    <Section
      pb="5rem"
      px={screenWidth < 768 && "2rem"}
      id="faq"
      className="scroll-mt-32"
    >
      <SectionHeading title={faqsHeadline} />
      <div className="mt-20 flex flex-col w-full items-stretch">
        {faqs.map(({ question, answer }, i) => {
          return (
            <div
              className={`relative py-4 text-2xl tab:text-xl border-t-2 px-20 duration-300 cursor-pointer
                tab:px-10 ${
                  activeQuestionIndex == i ? "max-h-[20rem]" : "max-h-[4rem]"
                }`}
              key={i}
              onClick={() => setActiveQuestionIndex(i)}
            >
              <FontAwesomeIcon
                className="absolute top-4 left-20 tab:left-10"
                icon={faArrowDown}
              />
              <h4 className=" font-bold mb-4">{question}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: answer }}
                className={`mb-2 duration-200 ${
                  activeQuestionIndex == i
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              />
            </div>
          );
        })}
        <div
          className={`relative py-4 text-2xl tab:text-xl border-t-2 px-20 duration-300 cursor-pointer
                tab:px-10 ${
                  activeQuestionIndex == faqs.length
                    ? "max-h-[20rem]"
                    : "max-h-[4rem]"
                }`}
          onClick={() => setActiveQuestionIndex(faqs.length)}
        >
          <FontAwesomeIcon
            className="absolute top-4 left-20 tab:left-10"
            icon={faArrowDown}
          />
          <h4 className=" font-bold mb-4">ما آلية التسجيل؟</h4>
          <p
            className={`mb-2 duration-200 ${
              activeQuestionIndex == faqs.length
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
          >
            للتسجيل في البرنامج الرجاء زيارة رابط التسجيل من
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSfNF4QUVDppaiUl3uFrmrvjzT1cca5B_5p4QKgplhfq5GT6Ew/viewform"
              }
              target="_blank"
              className="underline"
            >
              {" "}
              هنا.
            </Link>
            <br />
            بعد إتمام عملية التسجيل، سيقوم فريق البرنامج بالتواصل مع جميع
            المتقدمين وإجراء مقابلة سريعة للتأكد من التزامهم بالحضور وتوفر مشروع
            نقدي يعمل عليه المتدرب خلال البرنامج.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
