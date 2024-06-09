import { useState } from "react";

import ViannaAndDad from "../../../assets/images/Vianna-and-dad.png";
import KelleyBlackshear from "../../../assets/images/Kelley-Blackshear.png";
import PriscillaCarlos from "../../../assets/images/Priscilla-Carlos.png";
import ShaniBefore from "../../../assets/images/shani-before.avif";
import ShaniAfter from "../../../assets/images/shani-after.avif";
import styles from "./home.module.css";

export const ReviewsSection = () => {
  const [isShaniBeforeLoaded, setIsShaniBeforeLoaded] = useState(false);
  const [isShaniAfterLoaded, setIsShaniAfterLoaded] = useState(false);
  const width = window.innerWidth;
  return (
    <div
      className={`${width <= 375 ? "px-5" : "p-10"} bg-white lg:px-8 xl:px-20`}
    >
      <div className="mx-auto pb-6 lg:pb-8 xl:pb-20">
        <div>
          <div
            className="mx-auto flex flex-col items-start justify-center"
            style={{ height: "20vh" }}
          >
            <h2 className="text-3xl xl:text-3xl 2xl:text-6xl font-bold tracking-tight text-gray-900">
              People who trust us
            </h2>
            <p className="mt-2 text-sm xl:text-base 2xl:text-xl text-gray-600">
              Explore the stories of our satisfied clients and discover how our
              services helped them.
            </p>
          </div>
          <article className="flex flex-col sm:flex-row items-start justify-around">
            <div
              className="sm:w-1/2 flex justify-center flex-col"
              style={width >= 768 ? { height: "70vh" } : {}}
            >
              <div className="flex">
                <a
                  href="https://maps.app.goo.gl/k55yKifijSwNNn2c6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <div className="relative sm:mt-0 flex items-center gap-x-4 2xl:gap-x-6">
                    <div className="flex items-center justify-center rounded-full w-10 xl:w-14 2xl:w-24 h-10 xl:h-14 2xl:h-24 bg-slate-900 text-center text-white xl:text-xl 2xl:text-4xl font-medium">
                      S
                    </div>
                    <div className="text-sm leading-6 xl:text-base 2xl:text-2xl">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0"></span>
                        Shani Jackson
                      </p>
                      <div className="flex items-center gap-x-4 text-xs 2xl:text-xl">
                        <time dateTime="2020-03-16" className="text-gray-500">
                          May, 2023
                        </time>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="group relative sm:pr-5">
                <p className="mt-5 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal 2xl:mt-10 text-justify text-gray-600">
                  EXCELLENT!!!!!!! I get a hydrafacial for my eczema and it is
                  absolutely worth every single cent. Her studio is clean,
                  peaceful, and quiet. She takes her time and gently makes each
                  move. The first time I got this facial done I fell asleep
                  because I was so relaxed. She warmed my face to open my pores.
                  She uses a high quality solution to exfoliate and moisturize
                  your skin at the same time. I have combination skin so it’s
                  great for both! My rosacea, eczema, and hyperpigmentation
                  issues are safe with the products used. She uses various sheet
                  face masks to replenish the skin while opening your pores to
                  increase absorption. Then she uses radio frequency with
                  various sheet face masks to kill bacteria and free radicals on
                  the skin. I leave with my skin glowing and hydrated. My
                  dermatologist recommended this facial to prevent clogged pores
                  and it is 1000% worth it. If you are hesitating because of the
                  cost, let me be the first to tell you - when this is facial is
                  finished you won’t think twice about setting another
                  appointment. She cared for my skin and I’m appreciative. Stop
                  spending money on products that don’t work and get your
                  hydrafacial at Glisten Wellness. P.S. you get a fodder bag at
                  the end of your session! Before photo is in the pink robe and
                  after two sessions is the photo in the white jacket.
                </p>
              </div>
            </div>
            <div
              className="flex flex-row  sm:w-1/2 justify-between items-center my-10 sm:my-0"
              style={{ height: "70vh" }}
            >
              <div
                className={`${styles.shani_after} w-full h-full bg-shani-after bg-no-repeat bg-cover rounded-xl 2xl:rounded-3xl 2xl:rounded-r-none rounded-r-none shadow-lg hover:filter-none transition`}
                style={{ width: "49%" }}
              >
                <img
                  className={`${
                    isShaniBeforeLoaded ? "opacity-100" : "opacity-0"
                  } rounded-xl 2xl:rounded-3xl 2xl:rounded-r-none rounded-r-none w-full h-full object-cover object-left transition-opacity`}
                  onLoad={() => setIsShaniBeforeLoaded(true)}
                  alt="shani-before"
                  src={ShaniBefore}
                  loading="lazy"
                />
              </div>
              <div
                className={`${styles.shani_before} w-full h-full bg-shani-after bg-no-repeat bg-cover rounded-xl 2xl:rounded-3xl 2xl:rounded-l-none rounded-l-none shadow-lg transition`}
                style={{ width: "49%" }}
              >
                <img
                  className={`${
                    isShaniAfterLoaded ? "opacity-100" : "opacity-0"
                  } rounded-xl 2xl:rounded-3xl 2xl:rounded-l-none rounded-l-none w-full h-full object-cover object-left transition-opacity`}
                  onLoad={() => setIsShaniAfterLoaded(true)}
                  alt="shani-after"
                  src={ShaniAfter}
                  loading="lazy"
                />
              </div>
            </div>
          </article>
          <div className="h-0 sm:h-10" />
        </div>
        <div className="flex flex-col mx-auto border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <article
              className="flex flex-col items-start justify-around w-full pt-10"
              style={width >= 640 ? { width: "46%" } : {}}
            >
              <a
                href="https://maps.app.goo.gl/WD2gZ2JiueYnQtP97"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={PriscillaCarlos}
                    alt="PriscillaCarlos"
                    className="w-10 xl:w-14 2xl:w-24 h-10 xl:h-14 2xl:h-24 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 xl:text-base 2xl:text-2xl">
                      <span className="absolute inset-0"></span>
                      Priscilla Carlos
                    </p>
                    <div className="flex items-center gap-x-4 text-xs 2xl:text-xl">
                      <time dateTime="2020-03-16" className="text-gray-500">
                        Aug, 2023
                      </time>
                    </div>
                  </div>
                </div>
              </a>
              <div className="group relative">
                <p className="mt-5 text-xs text-justify lg:text-sm xl:text-base 2xl:text-xl text-gray-600">
                  If you’re looking for laser hair removal and facials then this
                  is the place to go! Rozana is super sweet, professional, and
                  will take good care of you! I’ve gone to several laser hair
                  removal locations and this is the best one. For my first ever
                  facial, the hydro facial was phenomenal. Left my skin feeling
                  super clean, soft, and glowy (no breakouts). Definitely check
                  it out!
                </p>
              </div>
            </article>
            <article
              className="flex flex-col items-start justify-around w-full pt-10"
              style={width >= 640 ? { width: "50%" } : {}}
            >
              <a
                href="https://maps.app.goo.gl/L6Ums2mTCSkwdTkL6"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={ViannaAndDad}
                    alt="viannaAndDad"
                    className="w-10 xl:w-14 2xl:w-24 h-10 xl:h-14 2xl:h-24 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 xl:text-base 2xl:text-2xl">
                      <span className="absolute inset-0"></span>
                      Vianna & dad
                    </p>
                    <div className="flex items-center gap-x-4 text-xs 2xl:text-xl">
                      <time dateTime="2020-03-16" className="text-gray-500">
                        Nov, 2023
                      </time>
                    </div>
                  </div>
                </div>
              </a>
              <div className="group relative">
                <p className="mt-5 text-xs lg:text-sm xl:text-base 2xl:text-xl text-justify text-gray-600">
                  I recently had laser hair removal at glisten wellness I’m
                  thrilled with the results and the overall experience. Rozana
                  was incredibly professional and made me feel comfortable
                  throughout the process. The procedure was virtually painless,
                  and I’ve already noticed a significant reduction in hair after
                  just a couple of sessions. The clinic is clean, and they
                  follow strict safety protocols. I highly recommend Glisten
                  Wellness for anyone looking for effective and reliable laser
                  hair removal. I couldn’t be happier with the results!
                </p>
              </div>
            </article>
          </div>
          <article className="flex flex-col items-start justify-around py-10">
            <a
              href="https://maps.app.goo.gl/8J6YaAaZHqfkHheeA"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={KelleyBlackshear}
                  alt="KelleyBlackshear"
                  className="w-10 xl:w-14 2xl:w-24 h-10 xl:h-14 2xl:h-24 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900 xl:text-base 2xl:text-2xl">
                    <span className="absolute inset-0"></span>
                    Kelley Blackshear
                  </p>
                  <div className="flex items-center gap-x-4 text-xs 2xl:text-xl">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Dec, 2023
                    </time>
                  </div>
                </div>
              </div>
            </a>
            <div className="group relative">
              <p className="mt-5 text-xs lg:text-sm xl:text-base 2xl:text-xl text-justify text-gray-600">
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
          </article>
        </div>
      </div>
    </div>
  );
};
