import React, { useState } from "react";

import Scaffold from "../../scaffold/Scaffold";
import Img from "../../../assets/images/IMG_3930.avif";
import Img2 from "../../../assets/images/IMG_7427.avif";
// import Img3 from '../../../assets/images/video-webp-converter.webp';

const AboutUs = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [isImg2Loaded, setIsImg2Loaded] = useState(false);
  return (
    <Scaffold>
      <section className=" bg-clinic bg-no-repeat bg-cover relative h-screen w-full flex flex-col justify-center items-center bg-black text-white text-justify">
        <img
          className={`${isImgLoaded ? "opacity-100" : "opacity-0"
            } h-full w-full object-cover object-center transition-opacity`}
          onLoad={() => setIsImgLoaded(true)}
          alt="saloon"
          src={Img}
        />
        <div className=" absolute w-full h-screen top-0 left-0 flex justify-center items-center">
          <div>
            <h1 className="font-bold text-5xl">Who am I?</h1>
            <h2 className=" text-sm">Let me share my experiences with you</h2>
          </div>
        </div>
      </section>
      <section className="h-screen w-full flex flex-col justify-center items-center px-3 bg-black text-white">
        <p className="max-w-96 text-xs 2xl:text-sm">
          Rozana Nazaralhoee has had a passion for medicine since childhood. She
          pursued her medical education at university and later developed a keen
          interest in business.
        </p>
        <p className="pt-3 max-w-96 text-xs 2xl:text-sm">
          Her dedication to both fields led her to seek opportunities to combine
          them. Today, Rozana has realized her dream by founding a venture that
          focuses on enhancing beauty and wellness.
        </p>
        <p className="pt-3 max-w-96 text-xs 2xl:text-sm">
          She is committed to helping individuals achieve their aesthetic goals
          and is driven by a deep love for her clients and their well-being.
          Rozana's mission is to make everyone feel more beautiful and
          confident.
        </p>
      </section>
      <section className="h-screen w-full flex flex-col sm:flex-row bg-cover bg-no-repeat">
        <div className=" bg-roza bg-no-repeat bg-cover h-1/2 sm:h-full w-full sm:w-1/4">
          <img
            src={Img2}
            alt="Rozana"
            onLoad={() => setIsImg2Loaded(true)}
            className={`${isImg2Loaded ? "opacity-100" : "opacity-0"
              } h-full w-full object-cover transition-opacity`}
          />
        </div>
        <div className="flex justify-center items-center px-3 flex-col h-1/2 sm:h-full w-full sm:w-3/4">
          <p className="max-w-96 text-xs 2xl:text-sm">
            She is a top expert in skincare and laser treatments. With 20 years
            of experience in skincare, beauty, and marketing, she has skillfully
            blended medical and cosmetic fields.
          </p>
          <p className="pt-3 max-w-96 text-xs 2xl:text-sm">
            Her strong interest in skincare and beauty has driven her career,
            leading to the creation of Glisten Wellness. This business was born
            from her desire to help people achieve healthy, flawless, and
            glowing skin.
          </p>
          <p className="pt-3 max-w-96 text-xs 2xl:text-sm">
            Rozana's passion for fashion, cosmetics, and interior design
            constantly inspires her. She believes that glowing skin boosts a
            person's confidence and that the future belongs to those who believe
            in their dreams.
          </p>
        </div>
      </section>
    </Scaffold>
  );
};

export default AboutUs;
