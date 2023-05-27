import SectionHeading from "Components/Common/SectionHeading";
import { Section } from "Components/Styled/Section";

const Reviewers = ({ reviewersHeadline, reviewers }) => {
  return (
    <Section items="start">
      <SectionHeading title={reviewersHeadline} />
      <div className="grid grid-cols-5 desc:grid-cols-3 tab:grid-cols-2 tab:grid gap-20 mt-32 w-full">
        {reviewers.map((reviewer, i) => {
          return (
            <p
              key={i}
              className="text-center tab:text-start text-3xl font-semibold"
            >
              {reviewer}
            </p>
          );
        })}
      </div>
    </Section>
  );
};

export default Reviewers;
