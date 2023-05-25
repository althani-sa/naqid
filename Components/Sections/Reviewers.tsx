import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";

const Reviewers = ({ reviewersHeadline, reviewers }) => {
  return (
    <Section items="start">
      <SectionHeading title={reviewersHeadline} />
      <div className="grid grid-cols-5 gap-20 mt-32 w-full">
        {reviewers.map((reviewer, i) => {
          return (
            <p key={i} className="text-center text-3xl font-semibold">
              {reviewer}
            </p>
          );
        })}
      </div>
    </Section>
  );
};

export default Reviewers;
