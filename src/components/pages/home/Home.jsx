import React from "react";

import { TopSection } from "./TopSection";
import Scaffold from "../../scaffold/Scaffold";
import { ServicesSection } from "./ServicesSection";
import { ReviewsSection } from "./ReviewsSection";

const Home = () => {
  return (
    <Scaffold>
      <TopSection />
      {/* <div className={`h-screen bg-white`}></div> */}
      <ServicesSection />
      <ReviewsSection />
    </Scaffold>
  );
};

export default Home;
