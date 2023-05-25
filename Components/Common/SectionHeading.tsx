import React from "react";

const SectionHeading = ({ title, white = false }) => {
  return (
    <h2
      className={`relative text-4xl font-semibold after:centerV after:w-44 after:h-[150%] after:bg-black after:bg-opacity-10 after:right-0 after:translate-x-1/3 ${
        white ? "text-white" : "text-darkBlue "
      }`}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
