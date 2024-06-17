import { Link } from "react-router-dom";
import { useState } from "react";

import Img1 from "../../../assets/images/1687253926649173a63b3b41.avif";
import Img2 from "../../../assets/images/clean-background-w7k9sqsj91esv3sm.avif";
import Img3 from "../../../assets/images/pexels-photo-3849160_1.avif";
import Scaffold from "../../scaffold/Scaffold";

export const Derma = () => {
  const [isImg1Loaded, setIsImg1Loaded] = useState(false);
  return (
    <Scaffold>
      <article className="leading-tight">
        <div className="h-screen flex flex-col sm:flex-row justify-between items-center bg-black">
          <div className="bg-lady-in-derma-page xs:w-full sm:h-full sm:w-1/2 xs:h-2/3 bg-cover bg-center bg-no-repeat">
            <img
              className={`${
                isImg1Loaded ? "opacity-100" : "opacity-0"
              } h-full w-full object-cover object-center transition-opacity`}
              onLoad={() => setIsImg1Loaded(true)}
              loading="eager"
              alt="derma"
              src={Img1}
            />
          </div>
          <div
            className={`flex flex-col justify-start sm:justify-center items-center xs:px-5 sm:p-5 sm:w-1/2 xs:h-1/3 sm:h-full text-white tracking-tight text-center`}
          >
            <Link id="derma-frac"></Link>
            <h1 className="text-xl xl:text-4xl 2xl:text-5xl font-bold">
              DERMAFRAC MICRO CHANNELING
            </h1>
            <h2 className="text-xs xl:text-base 2xl:text-xl font-bold">
              MICRO-NEEDLING WITH THE DERMAFRAC SYSTEM
            </h2>

            <p className="pt-2 text-center text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal">
              Micro-needling is rapidly becoming one of the most popular
              techniques used to smooth out rough, brittle, or wrinkled skin. As
              we age, our skin holds less moisture and is subject to folding and
              creasing because of the effects of gravity.
            </p>
            <Link
              to="https://book.squareup.com/appointments/zt4ca7luehw7ut/location/LZR19TJKEN977/services/OC266YU2VIN4WLEO627E3S5F"
              target="_blank"
              id="book-now"
            >
              <div className="flex flex-row justify-center items-center gap-2 py-2 px-4 xs:mt-2 sm:mt-5 text-center text-black 2xl:text-4xl xl:text-2xl text-base font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500">
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
          </div>
        </div>
        <div className="flex flex-col h-screen w-screen text-center items-center justify-center bg-white">
          <img
            className="relative object-cover w-full h-screen"
            loading="lazy"
            src={Img2}
            alt="bg"
          />
          <div
            className="absolute px-3 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal text-center"
            style={{ maxWidth: "600px" }}
          >
            <p className="">
              Pore size tends to increase, and any discolorations such as injury
              scars or freckles become more noticeable. Micro-needling involves
              the creation of tiny controlled wounds. As these microchannels
              heal, the body replaces old tissue with healthier cells.
            </p>
            <p className="pt-4">
              The DermaFrac system is unique in that it not only creates
              channels in the skin, but it also delivers nutrients and performs
              a crystal-free microdermabrasion. We highly recommend this
              all-in-one treatment for those who show signs of aging skin on the
              face.
            </p>
            <p className="pt-4">
              About Micro-Needling The idea behind this treatment is that
              controlled wounds will heal over with new, healthier tissue. The
              channels created by the multitude of tiny micro-needles kick
              starts a recovery process. The nutrients in blood platelets and
              the healthy tissue that lies between the individual punctures
              stimulate the creation of new skin tissue. Collagen production
              also increases.
            </p>
          </div>
        </div>
        <div className="h-screen flex flex-col sm:flex-row 2xl:mt-10 bg-black">
          <div className="h-1/2 py-5 sm:h-screen sm:w-1/2 flex sm:items-center items-end justify-center">
            <p
              className="px-3 text-xs lg:text-sm xl:text-base 2xl:text-xl 2xl:leading-normal text-center text-white"
              style={{ maxWidth: "700px" }}
            >
              The DermaFrac system is a newer technique that involves using a
              specialized instrument containing a delivery mechanism for
              nutrient introduction. The pen-style wand with the tiny needles at
              one end makes small punctures in the skin, usually to a depth of
              about two millimeters. The actual depth of the puncture is
              determined by closely examining the thickness of the skin. For
              maximum efficiency, the punctures should only be as deep as the
              dermal-epidermal junction.
            </p>
          </div>
          <img
            className="h-1/2 sm:h-screen w-full sm:w-1/2 object-cover object-center"
            alt="micro-niddle"
            loading="lazy"
            src={Img3}
          />
        </div>
      </article>
    </Scaffold>
  );
};
