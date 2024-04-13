import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

import styles from "./notFound.module.css";
import Scaffold from "../scaffold/Scaffold";
import { appRoutes } from "../../core/constants/routes";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Scaffold>
      <Container className="my-5 text-center">
        <h1 className={styles.emoji}>☹️</h1>
        <h1 className={styles.error}>404</h1>
        <h3>Page Not Found</h3>
        <p>
          The page you are looking for doesn't exist or an other error occured.{" "}
          <br />
          <span onClick={goBack}>
            <Link className="link link-light link-underline-primary link-offset-1">
              Go back
            </Link>
          </span>{" "}
          or head over to{" "}
          <Link
            className="link link-light link-underline-primary link-offset-1"
            to={appRoutes.homePath}
          >
            home page
          </Link>{" "}
          to choose a new direction.
        </p>
      </Container>
    </Scaffold>
  );
};

export default NotFound;
