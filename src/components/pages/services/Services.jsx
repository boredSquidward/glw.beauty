import React from "react";

import Scaffold from "../../scaffold/Scaffold";
import { LaserHairRemoval } from "./LaserHairRemoval";
import { Derma } from "./Derma";
import { Facial } from "./Facial";

const Services = () => {
  return (
    <Scaffold>
      <article className="px-5 sm:px-10">
        <div className="h-20"></div>
        <LaserHairRemoval />
        <Derma />
        <Facial />
      </article>
    </Scaffold>
  );
};

export default Services;
