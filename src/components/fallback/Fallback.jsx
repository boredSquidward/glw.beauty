import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

import styles from "./fallBack.module.css";

const FallBack = () => (
  <Container
    className={`${styles.container} d-flex flex-column align-items-center justify-content-center`}
  >
    <Spinner animation="grow" variant="light" />
    <h2 className={styles.header}>
      <div>Please wait...</div>
    </h2>
  </Container>
);

export default FallBack;
