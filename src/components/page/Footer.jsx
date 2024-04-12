import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import styles from "./footer.module.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  // const year = new Date().getFullYear();

  return (
    <footer className={styles.Footer}>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={Logo} rounded />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
