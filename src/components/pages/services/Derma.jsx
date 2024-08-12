import { Link } from "react-router-dom";
import { useState } from "react";

import Img1 from "../../../assets/images/1687253926649173a63b3b41.avif";
import Img3 from "../../../assets/images/pexels-photo-3849160_1.avif";
import Scaffold from "../../scaffold/Scaffold";

const Derma = () => {
  const [isImg1Loaded, setIsImg1Loaded] = useState(false);
  const [isImg3Loaded, setIsImg3Loaded] = useState(false);

  return (
    <Scaffold>
      <article className="leading-tight">
        <section className="h-screen flex flex-col sm:flex-row justify-between items-center bg-black">
          <div className="relative bg-lady-in-derma-page w-full h-full sm:w-1/2 bg-cover bg-center bg-no-repeat">
            <img
              className={`${isImg1Loaded ? "opacity-100" : "opacity-0"
                } h-full w-full object-cover object-center transition-opacity`}
              onLoad={() => setIsImg1Loaded(true)}
              loading="eager"
              alt="derma"
              src={Img1}
            />
          </div>
          <div
            className={`absolute sm:relative bottom-10 flex flex-col justify-start sm:justify-center items-center xs:px-5 sm:p-5 sm:w-1/2 sm:h-full text-white tracking-tight text-center`}
          >
            <h1 className="text-xl xl:text-4xl font-bold">
              DERMAFRAC MICRO CHANNELING
            </h1>
            <h2 className="text-xs xl:text-base font-bold">
              MICRO-NEEDLING WITH THE DERMAFRAC SYSTEM
            </h2>

            <p className="pt-3 text-center text-xs 2xl:text-sm xl:leading-normal"
              style={{ width: '80%' }}
            >
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
              <div className="flex flex-row justify-center items-center gap-2 py-2 px-4 mt-4 text-center text-black text-base 2xl:text-xl font-bold rounded-full bg-white hover:ring-2 hover:ring-blue-500">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="size-3 lg:size-4 xl:size-5"
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
        </section>
        <section className="bg-white-bg flex flex-col h-screen text-center items-center justify-center bg-white bg-cover bg-no-repeat">
          <p className="max-w-96 text-xs 2xl:text-sm xl:leading-normal text-start">
            Pore size tends to increase, and any discolorations such as injury
            scars or freckles become more noticeable. Micro-needling involves
            the creation of tiny controlled wounds. As these microchannels
            heal, the body replaces old tissue with healthier cells.
          </p>
          <p className="max-w-96 pt-3 text-xs 2xl:text-sm xl:leading-normal text-start">
            The DermaFrac system is unique in that it not only creates
            channels in the skin, but it also delivers nutrients and performs
            a crystal-free microdermabrasion. We highly recommend this
            all-in-one treatment for those who show signs of aging skin on the
            face.
          </p>
          <p className="max-w-96 pt-3 text-xs 2xl:text-sm xl:leading-normal text-start">
            About Micro-Needling The idea behind this treatment is that
            controlled wounds will heal over with new, healthier tissue. The
            channels created by the multitude of tiny micro-needles kick
            starts a recovery process. The nutrients in blood platelets and
            the healthy tissue that lies between the individual punctures
            stimulate the creation of new skin tissue. Collagen production
            also increases.
          </p>
        </section>
        <section className="h-screen flex flex-col items-center sm:flex-row bg-black border-b border-gray-900">
          <div className="h-1/2 py-5 sm:h-screen sm:w-1/2 flex flex-col sm:items-center items-end justify-center">
            <p className="text-xs 2xl:text-sm xl:leading-normal text-white max-w-96 text-start">
              The DermaFrac system is a newer technique that involves using a
              specialized instrument containing a delivery mechanism for
              nutrient introduction.
            </p>
            <p className="pt-3 text-xs 2xl:text-sm xl:leading-normal text-white max-w-96 text-start">
              The pen-style wand with the tiny needles at one end makes small
              punctures in the skin, usually to a depth of about two
              millimeters.
            </p>
            <p className="pt-3 text-xs 2xl:text-sm xl:leading-normal text-white max-w-96 text-start">
              The actual depth of the puncture is determined by closely
              examining the thickness of the skin. For maximum efficiency, the
              punctures should only be as deep as the dermal-epidermal junction.
            </p>
          </div>
          <div className="h-1/2 sm:h-full w-full sm:w-1/2 bg-flower bg-cover bg-no-repeat">
            <img
              className={`${isImg3Loaded ? "opacity-100" : "opacity-0"
                } w-full h-full sm:h-screen object-cover object-center transition-opacity`}
              onLoad={() => setIsImg3Loaded(true)}
              alt="micro-niddle"
              loading="lazy"
              src={Img3}
            />
          </div>
        </section>
      </article>
    </Scaffold>
  );
};

export default Derma;
