import React from "react";
import { Col, Jumbotron, Button, Row, Container } from "reactstrap";

const Header = () => {
  return (
    <Container>
      <Col className="header">
        <h2 className="header-text">
          Hello, My name is{" "}
          <span style={{ color: "red" }}>Michael English</span>
        </h2>
        <h2 className="header-text"> and I am a junior front-end developer </h2>
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
