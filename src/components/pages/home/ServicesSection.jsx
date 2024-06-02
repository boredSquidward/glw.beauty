import styles from "./home.module.css";
import { HashLink as Link } from "react-router-hash-link";

import Laser from "../../../assets/images/laser.avif";
import Facial from "../../../assets/images/facial.avif";
import Derma from "../../../assets/images/derma.avif";
import { appRoutes } from "../../../core/constants/routes";
// import LazyImage from "../../utils/LazyImage";
// import HashedLaser from "../../../assets/hashed/laser.png";

export const ServicesSection = () => {
  const width = window.innerWidth;

  return (
    <div className="sm:h-screen bg-black">
      <div className="mx-auto py-8 lg:py-10 xl:py-12 flex flex-col justify-center items-center">
        <p className="text-sm xl:text-base 2xl:text-xl 2xl:pb-3 leading-8 text-white">
          WHY THEY HAVE TO REGISTER?
        </p>
        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-white">
          Our Special Services
        </h1>
      </div>
      <div>
        <div className="hidden h-3/5 px-10 sm:flex flex-row justify-around">
          <Link
            to={`${appRoutes.servicesPath}#hair-removal`}
            className={`${styles.second_section_item} transition rounded-2xl cursor-pointer hover:scale-105 ease-in-out`}
          >
            {/* <LazyImage
              bg={HashedLaser}
              alt={"laser"}
              img={Laser}
              className={"w-66 h-66 object-cover"}
            /> */}
            <img
              src={Laser}
              loading="lazy"
              alt="laser"
              className="rounded-2xl object-cover h-64 w-full"
            />
          </Link>
          <Link
            to={`${appRoutes.servicesPath}#derma-frac`}
            className={`${styles.second_section_item} transition ease-linear cursor-pointer hover:scale-105`}
          >
            {/* <LazyImage
              bg={Derma}
              alt={"Derma"}
              img={Derma}
              className={"w-full h-66 "}
            /> */}
            <img
              src={Derma}
              loading="lazy"
              alt="derma"
              className="rounded-2xl h-64 w-full object-cover "
            />
          </Link>
          <Link
            to={`${appRoutes.servicesPath}#hydra-facial`}
            className={`${styles.second_section_item} transition ease-linear cursor-pointer hover:scale-105`}
          >
            {/* <LazyImage
              bg={Facial}
              alt={"Facial"}
              img={Facial}
              className={"w-full h-66 "}
            /> */}
            <img
              src={Facial}
              loading="lazy"
              alt="facial"
              className="rounded-2xl object-cover h-64 w-full"
            />
          </Link>
        </div>
        <div className="hidden h-2/5 px-10 sm:flex flex-row justify-around">
          <div className={`${styles.second_section_item}`}>
            <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-2xl pt-5 pb-2 xl:pt-7 xl:pb-3 tracking-tight font-bold">
              Laser Hair Removal
            </h3>
            <p className="text-white text-xs lg:text-sm 2xl:text-xl tracking-tight text-start">
              Laser hair removal offers a long-lasting solution by targeting
              hair follicles. It's safe, effective, and virtually painless for
              all skin types providing smooth skin. The procedure is quick, with
              minimal side effects, making it popular worldwide.
            </p>
          </div>
          <div className={styles.second_section_item}>
            <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-2xl pt-5 pb-2 xl:pt-7 xl:pb-3 tracking-tight font-bold">
              Dermafrac Micro Channeling
            </h3>
            <p className="text-white text-xs lg:text-sm 2xl:text-xl tracking-tight text-start">
              Dermafrac Micro-channeling or micro-needling, is an advanced
              cosmetic procedure targeting skin concerns. It gently punctures
              the skin's surface layers with fine needles, stimulating collagen
              production for rejuvenated, radiant skin. Tailored to individual
              skin types, it addresses fine lines, wrinkles, aging signs, acne
              scarring, hyperpigmentation, and enlarged pores.
            </p>
          </div>
          <div className={styles.second_section_item}>
            <h3 className="text-white text-sm lg:text-base xl:text-xl 2xl:text-2xl pt-5 pb-2 xl:pt-7 xl:pb-3 tracking-tight font-bold">
              Hydra-Facial
            </h3>
            <p className="text-white text-xs lg:text-sm 2xl:text-xl tracking-tight text-start">
              Achieve radiant skin with advanced facial treatments. Hydrafacial,
              a rising trend, offers a solution for smooth, luminous skin. It
              involves cleansing, exfoliation, extraction, and rejuvenating
              serums in a single session, delivering noticeable results in 60
              minutes.
            </p>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            width > 375 ? "px-10" : "px-5"
          } sm:px-10 flex sm:hidden flex-col`}
        >
          <div className="">
            <Link to={`${appRoutes.servicesPath}#hair-removal`}>
              <img
                src={Laser}
                className="rounded-2xl object-cover"
                alt="laser"
              />
            </Link>
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
            <Link to={`${appRoutes.servicesPath}/#derma-frac`}>
              <img
                src={Derma}
                className="rounded-2xl object-cover"
                alt="derma"
              />
            </Link>
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
            <Link to={`${appRoutes.servicesPath}/#hydra-facial`}>
              <img
                src={Facial}
                className="rounded-2xl object-cover"
                alt="facial"
              />
            </Link>
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
