import React from "react";
import { Col, Row, Container } from "reactstrap";
import avatar from "../../images/avatar.png";

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
            <Col md="4">
              <img
                width="250px"
                className="img-fluid"
                src={avatar}
                alt={avatar}
              />
            </Col>
            <Col style={{ alignSelf: "center" }} md="8">
              <p>
                I’m a freelance web developer based in the West Midlands, UK,
                working remotely for clients across the world. I have experience
                in many aspects of web development including the development of
                websites for small businesses, PSD to HTML jobs, on-page SEO and
                page speed optimisation. I’m constantly aiming to improve my
                techniques and build on my skills in HTML, CSS, JS and PHP so I
                welcome any job set before me. I’ll code each pixel of your site
                from scratch, allowing me to pay close attention to detail and
                deliver a strikingly unique end result. Want to see for
                yourself? Check out my portfolio below, and then head over to
                the contact form - I’d love to hear from you!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
