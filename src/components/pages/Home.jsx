import React from "react";
import styles from "./home.module.css";
import Page from "../page/Page";

const Home = () => {
  return (
    <Page>
      <div className={`${styles.home}`}>home</div>
    </Page>
  );
};

export default Home;
