import Image from "next/image";
import { Section } from "../Styled/Section";
import BgTexture from "../../public/Assets/Images/BgTexture.png";
import { useContext } from "react";
import AppContext from "../../AppContext";
import { motion } from "framer-motion";
import Link from "next/link";

const Landing = ({ landingImage, landingSupportingText }) => {
  let { screenWidth } = useContext(AppContext);
  return (
    <Section
      direction={screenWidth > 768 ? "row" : "column"}
      className="bg-cover bg-center bg-darkBlue text-white"
      gap="10rem"
      pb="5rem"
      pt="10rem"
    >
      <div
        className="absCenter w-full h-full bg-cover bg-center opacity-40 after:absCenter after:w-full after:h-full after:bg-black after:bg-opacity-100"
        style={{ backgroundImage: `url(${BgTexture.src})` }}
      />
      {/* Landing Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
        className="flex flex-col items-center basis-5/10 tab:mb-20 z-20"
      >
        <Image
          src={require("../../public/Assets/Svg/WhiteLogo.svg")}
          alt=""
          className=" w-8/10 h-auto mb-16
                      tab:mx-auto tab:w-full"
        />
        <p
          className="text-3xl leading-[3rem] mb-8
                      tab:text-center"
        >
          {landingSupportingText}
        </p>
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfNF4QUVDppaiUl3uFrmrvjzT1cca5B_5p4QKgplhfq5GT6Ew/viewform"
          }
          target="_blank"
          className="text-darkBlue font-bold px-7 py-4 rounded-3xl bg-white text-4xl
                    tab:text-2xl"
        >
          بادر بالتسجيل الآن
        </Link>
      </motion.div>
      {/* Landing Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="basis-5/10 z-20 tab:hidden"
      >
        <Image
          src={landingImage}
          alt=""
          width={9999}
          height={9999}
          className="w-full h-auto"
        />
      </motion.div>
    </Section>
  );
};

export default Landing;
