import React from "react";
import { Link } from "react-router-dom";

import { Col, Button, Row, Container } from "reactstrap";
import Typist from "react-typist";

const Header = () => {
  return (
    <Container>
      <Col className="header">
        <Typist>
          <h2 className="header-text">
            Hello, My name is{" "}
            <span style={{ color: "#1ff0d8" }}>Michael English</span>
          </h2>
          <h2 className="header-text">
            {" "}
            and I am a junior front-end developer
          </h2>
        </Typist>
      </Col>
      <Row>
        <Link className="mx-auto" to="/contact">
          <Button className="contact-button">Contact me</Button>
        </Link>
      </Row>
      <Col>
        <p id="freelance">Availble for freelance work</p>
      </Col>
    </Container>
  );
};

export default Header;
