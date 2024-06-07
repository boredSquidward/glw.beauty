import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./home.module.css";
import MainPic from "../../../assets/images/main-pic.avif";

export const TopSection = () => {
  const [isMainPicVisible, setIsMainPicVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  return (
    <div
      className={`${styles.first_section} -z-20 relative bg-main-photo h-screen bg-no-repeat bg-cover sm:bg-left-top bg-center flex justify-end sm:justify-center xl:items-end items-center flex-col`}
    >
      <img
        className={`${
          isMainPicVisible ? " opacity-100" : " opacity-0"
        } w-full h-full absolute -bottom-20 object-cover object-center -z-10 transition-opacity ease-out`}
        onLoad={() => setIsMainPicVisible(true)}
        loading="eager"
        alt="main-pic"
        src={MainPic}
      />
      <div
        className={`xl:pr-32 xl:mt-32 text-white ${
          inView ? styles.show_1 : styles.hide_2
        }`}
        ref={ref}
      >
        <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl sm:text-6xl text-5xl text-center font-medium">
          find your
        </h1>
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-4xl sm:text-3xl text-2xl text-center font-semibold">
          Best Hair Removal Solution
        </h2>
        <p className="mt-2 2xl:mt-4 2xl:text-3xl xl:text-2xl xl:text-end sm:text-base text-xs text-center font-bold">
          CLEANSE YOUR SKIN AND REFRESH YOUR BODY
        </p>
      </div>
      <Link
        className="mb-32 sm:mb-0 mt-6 2xl:mt-10 xl:mr-32 2xl:px-20 xl:px-16 lg:px-4 px-6 2xl:py-5 xl:py-3 py-2 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500"
        to="https://book.squareup.com/appointments/zt4ca7luehw7ut/location/LZR19TJKEN977/services"
        target="_blank"
      >
        BOOK NOW
      </Link>
    </div>
  );
};
