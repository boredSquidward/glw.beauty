import React from "react";

import Scaffold from "../../scaffold/Scaffold";

import { ServicesSection } from "./ServicesSection";
import { Reviews } from "./ReviewsSection";
import { TopSection } from "./TopSection";

const Home = () => {
  return (
    <Scaffold>
      <TopSection />
      <div className={`h-screen bg-white`}></div>
      <ServicesSection />
      <Reviews />
    </Scaffold>
  );
};

export default Home;
