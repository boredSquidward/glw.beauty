import React from "react";
import { useInView } from "react-intersection-observer";

import Scaffold from "../../scaffold/Scaffold";
import styles from "./home.module.css";
import Laser from "../../../assets/images/laser.avif";
import Facial from "../../../assets/images/facial.avif";
import Derma from "../../../assets/images/derma.avif";
import ViannaAndDad from "../../../assets/images/Vianna-and-dad.png";
import KelleyBlackshear from "../../../assets/images/Kelley-Blackshear.png";
import PriscillaCarlos from "../../../assets/images/Priscilla-Carlos.png";

const Home = () => {
  return (
    <Scaffold>
      <FirstSection />
      <div className={`h-screen bg-white`}></div>
      <SecondSection />
      <Reviews />
    </Scaffold>
  );
};

const Reviews = () => (
  <div class="bg-white lg:h-screen py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          People who trust us
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Explore the stories of our satisfied clients and discover how our
          services have helped them.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article class="flex max-w-xl flex-col items-start justify-around cursor-pointer">
          <a
            href="https://maps.app.goo.gl/WD2gZ2JiueYnQtP97"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="group relative">
              <p class="mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
                If you’re looking for laser hair removal and facials then this
                is the place to go! Rozana is super sweet, professional, and
                will take good care of you! I’ve gone to several laser hair
                removal locations and this is the best one. For my first ever
                facial, the hydro facial was phenomenal. Left my skin feeling
                super clean, soft, and glowy (no breakouts). Definitely check it
                out!
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src={PriscillaCarlos}
                alt="customer"
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <span class="absolute inset-0"></span>
                  Priscilla Carlos
                </p>
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">
                    Aug, 2023
                  </time>
                </div>
              </div>
            </div>
          </a>
        </article>
        <article class="flex max-w-xl flex-col items-start justify-around cursor-pointer">
          <a
            href="https://maps.app.goo.gl/L6Ums2mTCSkwdTkL6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="group relative">
              <p class="mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
                I recently had laser hair removal at glisten wellness I’m
                thrilled with the results and the overall experience. Rozana was
                incredibly professional and made me feel comfortable throughout
                the process. The procedure was virtually painless, and I’ve
                already noticed a significant reduction in hair after just a
                couple of sessions. The clinic is clean, and they follow strict
                safety protocols. I highly recommend Glisten Wellness for anyone
                looking for effective and reliable laser hair removal. I
                couldn’t be happier with the results!
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src={ViannaAndDad}
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <span class="absolute inset-0"></span>
                  Vianna & dad
                </p>
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">
                    Nov, 2023
                  </time>
                </div>
              </div>
            </div>
          </a>
        </article>
        <article class="flex max-w-xl flex-col items-start justify-around cursor-pointer">
          <a
            href="https://maps.app.goo.gl/8J6YaAaZHqfkHheeA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="group relative">
              <p class="mt-5 line-clamp-6 text-sm leading-6 text-gray-600">
                Just completed my second laser visit with great results. I am
                doing the significant parts of my body (full legs, face,
                Brazilian, underarms and bum) for a great price. After my first
                visit. I experienced a little sensitivity on my bum to hot water
                which I used the recommended aloe vera to soothe. Right after I
                had a little hair growth return (hair that was already there and
                seems normal according to what I read) and then no hair for 2
                weeks on my face, bum and legs. I was amazed, I always had thick
                hair growth in those areas. Some hair did return underarms and
                Brazilian area however, nothing like what I had before alot
                thinner and much less hair. At first I thought maybe the
                treatment didn’t take, as well But I was completely wrong. I
                can’t wait to see what comes back this time. Hoping for less and
                less hair. Rozana was a complete professional, clean office
                space and very nice. The experience while uncomfortable isn’t
                unbearable and she is understanding. Feels like your skin is
                being popped with a rubber band. I am in and out in 45 mins or
                less each visit. I would highly recommend Rozana not only for
                laser hair removal services but her high quality service and
                machine. Can’t wait to see the final results.
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src={KelleyBlackshear}
                alt=""
                class="h-10 w-10 rounded-full bg-gray-50"
              />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <span class="absolute inset-0"></span>
                  Kelley Blackshear
                </p>
                <div class="flex items-center gap-x-4 text-xs">
                  <time datetime="2020-03-16" class="text-gray-500">
                    Dec, 2023
                  </time>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </div>
);

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
      <button className="mb-20 sm:mb-0 mt-6 2xl:mt-10 xl:mr-32 2xl:px-20 xl:px-16 lg:px-4 px-6 2xl:py-5 xl:py-3 py-2 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500">
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
