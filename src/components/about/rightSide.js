import React from "react";
import CustomNavbar from "../navbar";
import { Container, Row, Col } from "reactstrap";
import Avatar from "../../images/avatar.png";

const RightSide = () => {
  return (
    <Col
      style={{
        padding: "20px",
        backgroundColor: "white"
      }}
      md="6"
    >
      <div className="avatar-wrapper">
        <img className="avatar" src={Avatar} />
      </div>

      <div className="name-heading">
        <h2 id="name">Michael English</h2>
        <h4 id="developer">Developer</h4>
        <div className="d-flex justify-content-center">
          <div id="developer-border" />
        </div>
      </div>
      <div className="about-text-wrapper">
        <Col>
          <p>
            I’m a freelance web developer based in the West Midlands, UK,
            working remotely for clients across the world. I have experience in
            many aspects of web development including the development of
            websites for small businesses, PSD to HTML jobs, on-page SEO and
            page speed optimisation. I’m constantly aiming to
          </p>
        </Col>
        <Col>
          <p>
            improve my techniques and build on my skills in HTML, CSS, JS and
            PHP so I welcome any job set before me. I’ll code each pixel of your
            site from scratch, allowing me to pay close attention to detail and
            deliver a strikingly unique end result. Want to see for yourself?
            Check out my portfolio below, and then head over to the contact form
            - I’d love to hear from you!
          </p>
        </Col>
        <Col>
          <p>
            improve my techniques and build on my skills in HTML, CSS, JS and
            PHP so I welcome any job set before me. I’ll code each pixel of your
            site from scratch, allowing me to pay close attention to detail and
            deliver a strikingly unique end result. Want to see for yourself?
            Check out my portfolio below, and then head over to the contact form
            - I’d love to hear from you!
          </p>
        </Col>
        <Col>
          <p>
            improve my techniques and build on my skills in HTML, CSS, JS and
            PHP so I welcome any job set before me. I’ll code each pixel of your
            site from scratch, allowing me to pay close attention to detail and
            deliver a strikingly unique end result. Want to see for yourself?
            Check out my portfolio below, and then head over to the contact form
            - I’d love to hear from you!
          </p>
        </Col>
      </div>
    </Col>
  );
};

export default RightSide;
