import React from "react";
import { Link } from "react-router-dom";

import { Col, Button, Container } from "reactstrap";
import Typist from "react-typist";
import mac from "../../images/mac.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Container className="p-0">
        <div className="header">
          <img className="header-image img-fluid" alt="header" src={mac} />
          <Typist className="header-text">
            <h3>
              Hello, my name is <span id="header-name">Michael English</span>{" "}
              and I am a junior front-end developer{" "}
            </h3>
          </Typist>
          <Link className="btn-portfolio-div" to="/work">
            <Button className="btn-portfolio">PORTFOLIO</Button>
          </Link>
        </div>

        <Col className="p-0">
          <Link to="/contact">
            <p id="freelance">Available for freelance work</p>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default Header;
