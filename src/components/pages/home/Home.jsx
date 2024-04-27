import React from "react";
import { useInView } from "react-intersection-observer";

import Scaffold from "../../scaffold/Scaffold";
import styles from "./home.module.css";
import Laser from "../../../assets/images/laser.avif";
import Facial from "../../../assets/images/facial.avif";
import Derma from "../../../assets/images/derma.avif";

const Home = () => {
  return (
    <Scaffold>
      <FirstSection />
      <div className={`h-screen bg-white`}></div>
      <SecondSection />
      <div className={`h-screen bg-white`}></div>
    </Scaffold>
  );
};

const FirstSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  return (
    <div
      className={`${styles.first_section} bg-main-photo h-screen bg-no-repeat bg-cover sm:bg-left-top bg-center flex justify-end sm:justify-center xl:items-end items-center flex-col`}
    >
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
      <button className="mb-10 2xl:mt-10 mt-6 xl:mr-32 2xl:px-20 xl:px-16 lg:px-4 px-6 2xl:py-5 xl:py-3 py-2 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500">
        BOOK NOW
      </button>
    </div>
  );
};

const SecondSection = () => {
  const width = window.innerWidth;
  const { ref, inView } = useInView({
    threshold: width >= 640 ? 0.3 : 0.2,
  });

  return (
    <div className={`sm:h-screen bg-black`}>
      <div ref={ref} className={inView ? styles.show_2 : styles.hide_1}>
        <div
          className={`mx-auto py-8 sm:py-12 lg:py-14 xl:py-16 2xl:py-24 flex flex-col justify-center items-center`}
        >
          <p className="text-sm xl:text-base 2xl:text-4xl 2xl:pb-3 leading-8 text-white">
            WHY THEY HAVE TO REGISTER?
          </p>
          <h2 className="text-3xl xl:text-4xl 2xl:text-8xl font-bold tracking-tight text-white">
            Our Special Services
          </h2>
        </div>
        <div className="">
          <div className="hidden h-3/5 px-10 sm:flex flex-row justify-around">
            <img
              src={Laser}
              className={`${styles.second_section_item} rounded-2xl object-cover ease-linear duration-300 hover:scale-105 cursor-pointer`}
              loading="lazy"
              alt="laser"
            />
            <img
              src={Derma}
              className={`${styles.second_section_item} rounded-2xl object-cover ease-linear duration-300 hover:scale-105 cursor-pointer`}
              loading="lazy"
              alt="derma"
            />
            <img
              src={Facial}
              className={`${styles.second_section_item} rounded-2xl object-cover ease-linear duration-300 hover:scale-105 cursor-pointer`}
              loading="lazy"
              alt="facial"
            />
          </div>
          <div className="hidden h-2/5 px-10 sm:flex flex-row justify-around">
            <div className={`${styles.second_section_item}`}>
              <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-5xl pt-3 pb-1 xl:py-3 2xl:py-10 font-bold">
                Laser Hair Removal
              </h3>
              <p className="text-white text-xs lg:text-sm xl:text-base 2xl:text-4xl">
                Laser hair removal offers a long-lasting solution by targeting
                hair follicles. It's safe, effective, and virtually painless for
                all skin types providing smooth skin. The procedure is quick,
                with minimal side effects, making it popular worldwide.
              </p>
            </div>
            <div className={styles.second_section_item}>
              <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-5xl pt-3 pb-1 xl:py-3 2xl:py-10 font-bold">
                Dermafrac Micro Channeling
              </h3>
              <p className="text-white text-xs lg:text-sm xl:text-base 2xl:text-4xl">
                Dermafrac Micro-channeling or micro-needling, is an advanced
                cosmetic procedure targeting skin concerns. It gently punctures
                the skin's surface layers with fine needles, stimulating
                collagen production for rejuvenated, radiant skin. Tailored to
                individual skin types, it addresses fine lines, wrinkles, aging
                signs, acne scarring, hyperpigmentation, and enlarged pores.
              </p>
            </div>
            <div className={styles.second_section_item}>
              <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-5xl pt-3 pb-1 xl:py-3 2xl:py-10 font-bold">
                Hydra-Facial
              </h3>
              <p className="text-white text-xs lg:text-sm xl:text-base 2xl:text-4xl">
                Achieve radiant skin with advanced facial treatments.
                Hydrafacial, a rising trend, offers a solution for smooth,
                luminous skin. It involves cleansing, exfoliation, extraction,
                and rejuvenating serums in a single session, delivering
                noticeable results in 60 minutes.
              </p>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            width > 375 ? "px-10" : "px-5"
          } sm:px-10 flex sm:hidden flex-col`}
        >
          <div className="">
            <img src={Laser} className="rounded-2xl object-cover" alt="laser" />
            <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-5xl pt-3 pb-1 xl:py-3 2xl:py-10 font-bold">
              Laser Hair Removal
            </h3>
            <p className="text-white text-xs lg:text-sm xl:text-base 2xl:text-4xl">
              Laser hair removal offers a long-lasting solution by targeting
              hair follicles. It's safe, effective, and virtually painless for
              all skin types providing smooth skin. The procedure is quick, with
              minimal side effects, making it popular worldwide.
            </p>
          </div>
          <div className="py-10">
            <img src={Derma} className="rounded-2xl object-cover" alt="derma" />
            <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-5xl pt-3 pb-1 xl:py-3 2xl:py-10 font-bold">
              Dermafrac Micro Channeling
            </h3>
            <p className="text-white text-xs lg:text-sm xl:text-base 2xl:text-4xl">
              Dermafrac Micro-channeling, or micro-needling, is an advanced
              cosmetic procedure targeting skin concerns. It gently punctures
              the skin's surface layers with fine needles, stimulating collagen
              production for rejuvenated, radiant skin. Tailored to individual
              skin types, it addresses fine lines, wrinkles, aging signs, acne
              scarring, hyperpigmentation, and enlarged pores.
            </p>
          </div>
          <div className="pb-20">
            <img
              src={Facial}
              className="rounded-2xl object-cover"
              alt="facial"
            />
            <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-5xl pt-3 pb-1 xl:py-3 2xl:py-10 font-bold">
              Hydra-Facial
            </h3>
            <p className="text-white text-xs lg:text-sm xl:text-base 2xl:text-4xl">
              Achieve radiant skin with advanced facial treatments. Hydrafacial,
              a rising trend, offers a solution for smooth, luminous skin. It
              involves cleansing, exfoliation, extraction, and rejuvenating
              serums in a single session, delivering noticeable results in 60
              minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
