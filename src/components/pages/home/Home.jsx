import React from "react";
import { HashLink } from "react-router-hash-link";

import { TopSection } from "./TopSection";
import Scaffold from "../../scaffold/Scaffold";
import { ServicesSection } from "./ServicesSection";
import { ReviewsSection } from "./ReviewsSection";

const Home = () => {
  return (
    <Scaffold>
      <HashLink to="top"></HashLink>
      <TopSection />
      <div
        className={`h-screen bg-white flex flex-col justify-center items-center`}
      >
        <iframe
          height={"80%"}
          width={"80%"}
          src={`https://www.youtube.com/embed/U6fC4Ij608A`}
          frameBorder="0"
          allow="  accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <p>Your video goes here</p>
      </div>
      <ServicesSection />
      <ReviewsSection />
    </Scaffold>
  );
};

export default Home;
