import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Scaffold = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Scaffold;
