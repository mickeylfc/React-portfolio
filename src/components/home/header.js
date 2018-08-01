import React from "react";
import { Link } from "react-router-dom";

import { Col, Button, Container } from "reactstrap";
import Typist from "react-typist";
import mac from "../../images/mac-window-new.svg";
import macBlack from "../../images/mac-window-black.svg";
import macMaterial from "../../images/mac-window-material.svg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Container>
        <div className="row">
          <div className="col-md-6 intro-wrapper d-flex justify-content-center">
            <h2 className="mb-6">Who am I ?</h2>
            <p style={{ lineHeight: "1.7em" }} className="pt-4 pb-4">
              I’m a recent Computer Science graduate based in London, looking
              for some fun projects to work on. I have a strong passion for web
              development mainly with Ruby on Rails for the back-end and React
              for the front-end. I recently gained a first-class degree and I am
              now actively looking for junior developer oppertunities.
            </p>
            <button className="btn btn-primary btn-portfolio">PORTFOLIO</button>
          </div>

          <div
            style={{
              backgroundImage: `url(${macMaterial})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "400px"
            }}
            className="col-md-6 typist-wrapper p-0"
          >
            <Typist className="header-text">
              {" "}
              <h3 style={{ fontWeight: "600" }}>
                Hello, my name is <span id="header-name">Michael English</span>{" "}
                and I am a junior front-end developer{" "}
              </h3>{" "}
            </Typist>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
