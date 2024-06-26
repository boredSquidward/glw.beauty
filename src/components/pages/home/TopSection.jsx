import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useState } from "react";

import MainPic from "../../../assets/images/main-pic.avif";
import styles from "./home.module.css";

export const TopSection = () => {
  const [isMainPicVisible, setIsMainPicVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div
      className={`${styles.first_section} relative h-screen overflow-hidden bg-main-photo bg-no-repeat bg-cover`}
    >
      <img
        className={`${
          isMainPicVisible ? " opacity-100" : " opacity-0"
        } h-full mt-24 right-0 z-10 w-full object-cover transition-opacity`}
        onLoad={() => setIsMainPicVisible(true)}
        loading="eager"
        alt="main-pic"
        src={MainPic}
      />
      <div
        className={`${
          inView ? styles.show_1 : styles.hide_2
        } text-white absolute bottom-16 right-0 z-20 pr-5 flex flex-col justify-center`}
        ref={ref}
      >
        <h1 className="2xl:text-9xl xl:text-8xl lg:text-6xl sm:text-6xl text-5xl text-end font-medium">
          find your
        </h1>
        <h2 className="2xl:text-7xl xl:text-4xl lg:text-3xl sm:text-3xl text-xl text-end font-semibold">
          Best Hair Removal Solution
        </h2>
        <p className="2xl:mt-4 2xl:text-3xl xl:text-xl xl:text-end sm:text-base text-xs text-end">
          CLEANSE YOUR SKIN AND REFRESH YOUR BODY
        </p>
        <div className="h-3" />
        <Link
          to="https://book.squareup.com/appointments/zt4ca7luehw7ut/location/LZR19TJKEN977/services/"
          target="_blank"
          id="book-now"
        >
          <div className="flex flex-row justify-center items-center gap-2 py-2 px-4 mt-3 text-center text-black 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-5"
                strokeWidth={4}
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <span className="text-black">Book Now</span>
          </div>
        </Link>
        <div className="h-10" />
      </div>
    </div>
  );
};
