import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
import Profile from "../../images/me2.jpg";
import Fade from "react-reveal/Fade";
import Icons from "./icons";

const AboutSection = () => {
  return (
    <div>
      <div className="about-section-wrapper">
        <div className="about-inner-box">
          <div className="container p-0">
            <div className="about-heading-wrapper">
              <Row>
                <h2
                  style={{ textAlign: "center" }}
                  className="mx-auto about-heading"
                >
                  A little bit about me
              </h2>
              </Row>
            </div>
            <div className="about-section-container">
              <Col className="about-mobile" md="4">
                <Fade>
                  <img
                    width="250px"
                    className="img-fluid"
                    src={Profile}
                    alt={Profile}
                  />
                </Fade>
              </Col>

              <Col
                className="about-mobile-text"
                style={{ alignSelf: "center" }}
                md="8"
              >
                <p>
                  Hello, I'm a recent Computer Science graduate who is looking
                  to start working on some remote freelance projects for clients
                  around the world. Early on in my degree, I realised I have a
                  strong passion for web development.
                </p>
                <p>
                  I have experience in many aspects of web development,
                  including design, front-end and back-end development. To read
                  my full profile, click the read more button to find out my
                  personal skills, education, experience and hobbies.
                </p>
                <Link to="/about">
                  <Button className="read-more-button">Read more<i class="ri-arrow-right-line"></i></Button>
                </Link>
              </Col>
            </div>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
