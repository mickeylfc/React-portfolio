import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Button } from "reactstrap";
import Profile from "../../images/me2.jpg";

const AboutSection = () => {
  return (
    <div className="about-section-wrapper">
      <Container>
        <div className="about-inner-box">
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
          <Row>
            <Col className="about-mobile" md="4">
              <img
                width="250px"
                className="img-fluid"
                src={Profile}
                alt={Profile}
              />
            </Col>
            <Col
              className="about-mobile-text"
              style={{ alignSelf: "center" }}
              md="8"
            >
              <p>
                Hello, I'm a recent Computer Science graduate who is looking to
                start working on some remote freelance projects for clients
                around the world. Early on in my degree, I realised I have a
                strong passion for web development.
              </p>
              <p>
                I have experience in many aspects of web development, including
                design, front-end and back-end development. To read my full
                profile, click the read more button to find out my personal
                skills, education, experience and hobbies.
              </p>
              <Link to="/about">
                <Button className="read-more-button">Read more</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
