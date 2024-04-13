import React from "react";
import styles from "./home.module.css";
import Scaffold from "../../scaffold/Scaffold";

const Home = () => {
  return (
    <Scaffold>
      <div className={`${styles.home}`}>home</div>
    </Scaffold>
  );
};

export default Home;
