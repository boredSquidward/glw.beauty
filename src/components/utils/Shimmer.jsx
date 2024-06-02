import React from "react";

import styles from "./shimmer.module.css";

const Shimmer = ({ style }) => {
  return <div className={styles.shimmer} style={style && style}></div>;
};

export default Shimmer;
