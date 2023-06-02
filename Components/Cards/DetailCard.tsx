import Image from "next/image";
import React from "react";

const DetailCard = ({ detail, active, activateDetail }) => {
  return (
    <div
      className={`w-64 tab:w-full flex flex-col items-center justify-center cursor-pointer aspect-square rounded-4xl shadow-2xl rounded-xl duration-200 mx-auto ${
        active ? "bg-darkBlue " : "bg-white"
      }`}
      onClick={activateDetail}
    >
      <div className="relative w-4/10 aspect-square mb-4">
        <Image
          src={detail.icon}
          alt=""
          className={`absCenter w-full h-auto duration-300 ${
            active && "opacity-0"
          }`}
          width={10000}
          height={10000}
        />
        <Image
          src={detail.whiteIcon}
          alt=""
          className={`absCenter w-full h-auto duration-300 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          width={10000}
          height={10000}
        />
      </div>
      <h3
        className={`font-semibold text-2xl mb-2 ${
          active ? "text-white" : "text-darkBlue"
        }`}
      >
        {detail.title}
      </h3>
      <p className={`text-xl ${active ? "text-white" : "text-green"}`}>
        {detail.subTitle}
      </p>
    </div>
  );
};

export default DetailCard;
