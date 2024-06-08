import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./home.module.css";
import MainPic from "../../../assets/images/main-pic.avif";

export const TopSection = () => {
  const [isMainPicVisible, setIsMainPicVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  return (
    <div
      className={`${styles.first_section} relative bg-main-photo bg-no-repeat bg-cover`}
      style={{ height: "90vh" }}
    >
      <img
        className={`${
          isMainPicVisible ? " opacity-100" : " opacity-0"
        } absolute bottom-0 right-0 z-10 w-full object-cover transition-opacity`}
        onLoad={() => setIsMainPicVisible(true)}
        style={{ height: "90vh" }}
        loading="eager"
        alt="main-pic"
        src={MainPic}
      />

      <div
        className={`${
          inView ? styles.show_1 : styles.hide_2
        } text-white absolute bottom-10 right-0 z-20 pr-5 flex flex-col justify-center`}
        ref={ref}
      >
        <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl sm:text-6xl text-5xl text-end font-medium">
          find your
        </h1>
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-4xl sm:text-3xl text-xl text-end font-semibold">
          Best Hair Removal Solution
        </h2>
        <p className="2xl:mt-4 2xl:text-3xl xl:text-2xl xl:text-end sm:text-base text-xs text-end font-bold">
          CLEANSE YOUR SKIN AND REFRESH YOUR BODY
        </p>
        <div className="h-3" />
        <Link
          className="px-10 py-3 text-center text-black 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500"
          to="https://book.squareup.com/appointments/zt4ca7luehw7ut/location/LZR19TJKEN977/services"
          target="_blank"
          id="book-now"
        >
          BOOK NOW
        </Link>
        <div className="h-10" />
      </div>
    </div>
  );
};
