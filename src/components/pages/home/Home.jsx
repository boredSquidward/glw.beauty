import React from "react";

import Scaffold from "../../scaffold/Scaffold";

const Home = () => {
  return (
    <Scaffold>
      <div className="bg-main-photo h-screen bg-no-repeat sm:bg-cover flex justify-center xl:items-end flex-col">
        <div className="xl:pr-32 xl:mt-32">
          <h1 className="font-sans text-white text-8xl text-center font-medium">
            find your
          </h1>
          <h2 className="font-sans text-white text-6xl font-semibold">
            Best Hair Removal Solution
          </h2>
          <p className="font-sans text-white text-end mt-2 font-bold">
            CLEANSE YOUR SKIN AND REFRESH YOUR BODY
          </p>
        </div>
        <button className="px-10 py-3 bg-white mt-6 mr-32 rounded-3xl font-bold font-sans">
          BOOK NOW
        </button>
      </div>
      <div className="h-screen p-6 flex flex-col justify-center items-center">
        <h3 className="font-bold text-gray-900 font-sans">
          WHY THEY HAVE TO REGISTER?
        </h3>
        <h1 className="text-4xl font-bold text-gray-900 text-center pt-4 font-sans">
          Our Special Services
        </h1>
      </div>
    </Scaffold>
  );
};

export default Home;
