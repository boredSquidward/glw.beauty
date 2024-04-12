import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
