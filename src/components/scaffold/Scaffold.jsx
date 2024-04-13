import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../fallback/Footer";

const Scaffold = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Scaffold;
