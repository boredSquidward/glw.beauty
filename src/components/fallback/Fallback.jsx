import Spinner from "react-bootstrap/Spinner";

import styles from "./fallBack.module.css";

const FallBack = () => (
  <div className={styles.container}>
    <Spinner animation="grow" variant="light" />
    <h2>
      <div>Please wait...</div>
    </h2>
  </div>
);

export default FallBack;
