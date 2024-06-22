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
      <div className={`h-screen bg-white flex justify-center items-center`}>
        <p>Your video goes here</p>
      </div>
      <ServicesSection />
      <ReviewsSection />
    </Scaffold>
  );
};

export default Home;
