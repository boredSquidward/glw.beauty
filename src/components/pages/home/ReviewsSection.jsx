import { useState } from "react";

import ViannaAndDad from "../../../assets/images/Vianna-and-dad.png";
import KelleyBlackshear from "../../../assets/images/Kelley-Blackshear.png";
import PriscillaCarlos from "../../../assets/images/Priscilla-Carlos.png";
import ShaniBefore from "../../../assets/images/shani-before.avif";
import ShaniAfter from "../../../assets/images/shani-after.avif";
import styles from "./home.module.css";

export const ReviewsSection = () => {
  return (
    <>
      <div className="mx-auto">
        <FirstPart />
        <SecPart />
        <article className="px-3 flex flex-col items-center justify-center h-screen">
          <div className="sm:max-w-96">
            <a
              href="https://maps.app.goo.gl/8J6YaAaZHqfkHheeA"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <img
                  src={KelleyBlackshear}
                  alt="KelleyBlackshear"
                  className="w-10 xl:w-14 2xl:w-20 h-10 xl:h-14 2xl:h-20 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-bold text-gray-900 text-lg">
                    <span className="inset-0"></span>
                    Kelley Blackshear
                  </p>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
                      Dec, 2023
                    </time>
                  </div>
                </div>
              </div>
            </a>
            <div className="group">
              <p className="mt-3 text-xs 2xl:text-sm text-gray-600">
                Just completed my second laser visit with great results. I am
                doing the significant parts of my body (full legs, face,
                Brazilian, underarms and bum) for a great price. After my first
                visit. <br /> I experienced a little sensitivity on my bum to hot water
                which I used the recommended aloe vera to soothe. Right after I
                had a little hair growth return (hair that was already there and
                seems normal according to what I read) and then no hair for 2
                weeks on my face, bum and legs. <br /> I was amazed, I always had thick
                hair growth in those areas. Some hair did return underarms and
                Brazilian area however, nothing like what I had before alot
                thinner and much less hair. <br /> At first I thought maybe the
                treatment didn’t take, as well But I was completely wrong. I
                can’t wait to see what comes back this time. Hoping for less and
                less hair. Rozana was a complete professional, clean office
                space and very nice. <br /> The experience while uncomfortable isn’t
                unbearable and she is understanding. Feels like your skin is
                being popped with a rubber band. I am in and out in 45 mins or
                less each visit. I would highly recommend Rozana not only for
                laser hair removal services but her high quality service and
                machine. Can’t wait to see the final results.
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

const FirstPart = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start h-screen">
        <article className="px-3 flex flex-col items-center justify-center h-1/2 sm:h-full w-full sm:w-1/2 bg-black text-white border-t border-gray-900 ">
          <div className="max-w-96">
            <a
              href="https://maps.app.goo.gl/L6Ums2mTCSkwdTkL6"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <img
                  src={ViannaAndDad}
                  alt="viannaAndDad"
                  className="w-10 xl:w-14 2xl:w-16 h-10 xl:h-14 2xl:h-16 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-base">
                    <span className="inset-0"></span>
                    Vianna & dad
                  </p>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-400">
                      Nov, 2023
                    </time>
                  </div>
                </div>
              </div>
            </a>
            <p className="mt-3 max-w-96 text-xs xl:text-sm">
              I recently had laser hair removal at glisten wellness I’m thrilled
              with the results and the overall experience. Rozana was incredibly
              professional and made me feel comfortable throughout the process.
              The procedure was virtually painless, and I’ve already noticed a
              significant reduction in hair after just a couple of sessions. The
              clinic is clean, and they follow strict safety protocols. I highly
              recommend Glisten Wellness for anyone looking for effective and
              reliable laser hair removal. I couldn’t be happier with the
              results!
            </p>
          </div>
        </article>
        <article className="px-3 flex flex-col items-center justify-center h-1/2 sm:h-full w-full sm:w-1/2">
          <div className="max-w-96">
            <a
              href="https://maps.app.goo.gl/WD2gZ2JiueYnQtP97"
              className="cursor-pointer"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="relative flex items-center gap-x-4">
                <img
                  className="w-10 xl:w-14 2xl:w-16 h-10 xl:h-14 2xl:h-16 rounded-full bg-gray-50"
                  src={PriscillaCarlos}
                  alt="PriscillaCarlos"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-base">
                    <span className="absolute inset-0"></span>
                    Priscilla Carlos
                  </p>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-600">
                      Aug, 2023
                    </time>
                  </div>
                </div>
              </div>
            </a>
            <p className="mt-3 max-w-96 text-xs xl:text-sm">
              If you’re looking for laser hair removal and facials then this is
              the place to go! Rozana is super sweet, professional, and will
              take good care of you! I’ve gone to several laser hair removal
              locations and this is the best one. For my first ever facial, the
              hydro facial was phenomenal. Left my skin feeling super clean,
              soft, and glowy (no breakouts). Definitely check it out!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

const SecPart = () => {
  const [isShaniBeforeLoaded, setIsShaniBeforeLoaded] = useState(false);
  const [isShaniAfterLoaded, setIsShaniAfterLoaded] = useState(false);

  return (
    <div className="flex min-h-screen p-3 justify-center items-center bg-black text-white w-full">
      <div className="flex flex-col sm:flex-row items-start justify-around">
        <article className="sm:w-1/2 sm:pr-5 flex justify-center">
          <div className="flex justify-center flex-col " style={{ width: '80%' }}>
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-3xl xl:text-4xl font-bold tracking-tight">
                People who trust us
              </h2>
              <p className="mt-2 text-xs">
                Explore the stories of our satisfied clients and discover how
                our services helped them.
              </p>
            </div>
            <div>
              <a
                href="https://maps.app.goo.gl/k55yKifijSwNNn2c6"
                className="cursor-pointer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="relative sm:mt-0 flex items-center gap-x-4 2xl:gap-x-6 pt-5">
                  <div className="flex items-center justify-center rounded-full w-10 xl:w-14 2xl:w-20 h-10 xl:h-14 2xl:h-20 bg-slate-900 text-center text-white xl:text-xl 2xl:text-4xl font-medium">
                    S
                  </div>
                  <div className="text-sm leading-6 xl:text-lg">
                    <p className="font-bold">
                      <span className="absolute inset-0"></span>
                      Shani Jackson
                    </p>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime="2020-03-16" className="text-gray-300">
                        May, 2023
                      </time>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="group relative">
              <p className="mt-3 text-xs 2xl:text-sm text-justify">
                EXCELLENT!!!!!!! I get a hydrafacial for my eczema and it is
                absolutely worth every single cent. Her studio is clean,
                peaceful, and quiet. She takes her time and gently makes each
                move. The first time I got this facial done I fell asleep
                because I was so relaxed. She warmed my face to open my pores.
                She uses a high quality solution to exfoliate and moisturize
                your skin at the same time. I have combination skin so it’s
                great for both! My rosacea, eczema, and hyperpigmentation issues
                are safe with the products used. She uses various sheet face
                masks to replenish the skin while opening your pores to increase
                absorption. Then she uses radio frequency with various sheet
                face masks to kill bacteria and free radicals on the skin. I
                leave with my skin glowing and hydrated. My dermatologist
                recommended this facial to prevent clogged pores and it is 1000%
                worth it. If you are hesitating because of the cost, let me be
                the first to tell you - when this is facial is finished you
                won’t think twice about setting another appointment. She cared
                for my skin and I’m appreciative. Stop spending money on
                products that don’t work and get your hydrafacial at Glisten
                Wellness. P.S. you get a fodder bag at the end of your session!
                Before photo is in the pink robe and after two sessions is the
                photo in the white jacket.
              </p>
            </div>
          </div>
        </article>
        <div
          className="flex flex-row sm:w-1/2 justify-between items-center pt-5 sm:my-0"
          style={{ height: "70vh" }}
        >
          <div
            className={`${styles.shani_after} w-full h-full bg-shani-after bg-no-repeat bg-cover rounded-xl 2xl:rounded-3xl 2xl:rounded-r-none rounded-r-none hover:filter-none transition`}
            style={{ width: "49%" }}
          >
            <img
              className={`${isShaniBeforeLoaded ? "opacity-100" : "opacity-0"
                } rounded-xl 2xl:rounded-3xl 2xl:rounded-r-none rounded-r-none w-full h-full object-cover object-left transition-opacity`}
              onLoad={() => setIsShaniBeforeLoaded(true)}
              alt="shani-before"
              src={ShaniBefore}
              loading="lazy"
            />
          </div>
          <div
            className={`${styles.shani_before} w-full h-full bg-shani-after bg-no-repeat bg-cover rounded-xl 2xl:rounded-3xl 2xl:rounded-l-none rounded-l-none transition`}
            style={{ width: "49%" }}
          >
            <img
              className={`${isShaniAfterLoaded ? "opacity-100" : "opacity-0"
                } rounded-xl 2xl:rounded-3xl 2xl:rounded-l-none rounded-l-none w-full h-full object-cover object-left transition-opacity`}
              onLoad={() => setIsShaniAfterLoaded(true)}
              alt="shani-after"
              src={ShaniAfter}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
