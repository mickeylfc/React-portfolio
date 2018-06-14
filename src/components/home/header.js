import React from "react";
import { Col, Button, Row, Container } from "reactstrap";
import Typist from "react-typist";

const Header = () => {
  return (
    <Container>
      <Col className="header">
        <Typist>
          <h2 className="header-text">
            Hello, My name is{" "}
            <span style={{ color: "red" }}>Michael English</span>
          </h2>
          <h2 className="header-text">
            {" "}
            and I am a junior front-end developer
          </h2>
        </Typist>
      </Col>
      <Row>
        <Button className="mx-auto contact-button">Contact me</Button>
      </Row>
      <Col>
        <p id="freelance">Availble for freelance work</p>
      </Col>
    </Container>
  );
};

export default Header;
