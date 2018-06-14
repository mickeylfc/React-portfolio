import React from "react";
import { Container, Row, Col } from "reactstrap";

const Header = props => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ color: props.color }} className="about-header-text">
            {props.heading}
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
