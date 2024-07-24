import React from "react";
import { HashLink } from "react-router-hash-link";

import { TopSection } from "./TopSection";
import Scaffold from "../../scaffold/Scaffold";
import { ServicesSection } from "./ServicesSection";
import { ReviewsSection } from "./ReviewsSection";

const Home = () => {
  return (
    <Scaffold>
      {/* <HashLink to="top"></HashLink> */}
      <TopSection />
      {/* <div
        className={`h-screen bg-white flex flex-col justify-center items-center`}
      >
        <div className="w-full h-full overflow-hidden bg-black">
          <iframe
            allow="  accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            src={`https://www.youtube.com/embed/U6fC4Ij608A`}
            className="w-full h-full "
            title="Embedded youtube"
            allowFullScreen
          />
        </div>
      </div> */}
      {/* <ServicesSection />
      <ReviewsSection /> */}
    </Scaffold>
  );
};

export default Home;
