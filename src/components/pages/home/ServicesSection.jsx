import { HashLink as Link } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

import { appRoutes } from "../../../core/constants/routes";
import HairReduction from "../../../assets/images/Story-6.avif";
import SkinCare from "../../../assets/images/Story-3.avif";
import Hydra from "../../../assets/images/Story-2.avif";
import styles from "./home.module.css";

export const ServicesSection = () => {
  const [isLaserRemovalLoaded, setIsLaserRemovalLoaded] = useState(false);
  const [isFacialLoaded, setIsFacialLoaded] = useState(false);
  const [isDermaLoaded, setIsDermaLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="sm:min-h-screen p-5 bg-black flex flex-col justify-between">
      <div
        className="mx-auto flex flex-col justify-center items-center"
        style={{ height: "10vh" }}
      >
        <p className="text-sm xl:text-base 2xl:text-xl leading-8 text-white">
          WHY THEY HAVE TO REGISTER?
        </p>
        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-white">
          Our Special Services
        </h1>
      </div>
      <div
        className={`${
          inView ? styles.show_1 : styles.hide_1
        } pt-5 flex justify-center`}
        ref={ref}
      >
        <div className="flex flex-col md:flex-row justify-around">
          <ServiceItem
            to={`${appRoutes.servicesPath}#hair-removal`}
            setIsImgLoaded={setIsLaserRemovalLoaded}
            isImgLoaded={isLaserRemovalLoaded}
            title={"Laser Hair Removal"}
            bg={"bg-story-6"}
            img={HairReduction}
            content={`Laser hair removal offers a long-lasting solution by targeting hair
      follicles. It's safe, effective, and virtually painless for all skin types
      providing smooth skin. The procedure is quick, with minimal side effects,
      making it popular worldwide.`}
          />

          <ServiceItem
            to={`${appRoutes.servicesPath}#derma-frac`}
            title={"Dermafrac Micro Channeling"}
            setIsImgLoaded={setIsDermaLoaded}
            isImgLoaded={isDermaLoaded}
            className={"md:mx-5"}
            bg={"bg-story-3"}
            img={SkinCare}
            content={`Dermafrac Micro-channeling or micro-needling, is an advanced
              cosmetic procedure targeting skin concerns. It gently punctures
              the skin's surface layers with fine needles, stimulating collagen
              production for rejuvenated, radiant skin.`}
          />

          <ServiceItem
            to={`${appRoutes.servicesPath}#hydra-facial`}
            setIsImgLoaded={setIsFacialLoaded}
            isImgLoaded={isFacialLoaded}
            title={"Hydra-Facial"}
            bg={"bg-story-2"}
            img={Hydra}
            content={`Achieve radiant skin with advanced facial treatments. Hydrafacial,
              a rising trend, offers a solution for smooth, luminous skin. It
              involves cleansing, exfoliation, extraction, and rejuvenating
              serums in a single session, delivering noticeable results in 60
              minutes.`}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({
  setIsImgLoaded,
  isImgLoaded,
  className,
  content,
  title,
  img,
  bg,
  to,
}) => (
  <div
    className={`${className} ${styles.service_item} max-w-80 border-white border-spacing-x-1 transition hover:scale-105 p-5 sm:p-0`}
    style={{ height: "85vh" }}
  >
    <Link className={`${styles.second_section_item} cursor-pointer`} to={to}>
      <div
        style={{ height: "60vh" }}
        className={`${bg} ${styles.service_img} z-50 w-full bg-no-repeat bg-cover rounded-2xl sm:rounded-t-2xl transition overflow-hidden`}
      >
        <img
          className={`${
            isImgLoaded ? " opacity-100" : " opacity-0"
          } bg-story-2 h-full w-full z-10 transition object-cover object-bottom`}
          onLoad={() => setIsImgLoaded(true)}
          loading="lazy"
          alt="services"
          src={img}
        />
      </div>
    </Link>
    <h1 className="text-white pt-5 text-sm lg:text-base xl:text-xl 2xl:text-2xl tracking-tight font-bold text-center">
      {title}
    </h1>
    <p className="text-white text-xs lg:text-sm 2xl:text-xl tracking-tight text-center">
      {content}
    </p>
  </div>
);
