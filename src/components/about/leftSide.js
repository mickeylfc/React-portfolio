import React from "react";
import CustomNavbar from "../navbar";
import Skill from "./skill";
import { Container, Row, Col, Progress } from "reactstrap";

const LeftSide = () => {
  const skills = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Col
      style={{ background: "#E66767", padding: "20px", height: "100%" }}
      md="6"
    >
      <Row>
        <Col md="2">
          <i style={{ color: "white" }} class="fas fa-user-graduate fa-4x" />
        </Col>
        <Col style={{ alignSelf: "center" }} md="10">
          <h3 style={{ color: "white", fontWeight: "600" }}>Education</h3>
        </Col>
      </Row>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4">
            <p>2008 - 2010</p>
          </Col>
          <Col md="8">
            <p>Carlisle College</p>
          </Col>
        </Row>
      </div>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4" />
          <Col md="8">
            <p>
              in many aspects of web development including the development of
              websites for small businesses, PSD to HTML jobs, on-page SEO and
              page speed optimisation. I’m constantly aiming to
            </p>
          </Col>
        </Row>
      </div>

      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4">
            <p>2014 - 2018</p>
          </Col>
          <Col md="8">
            <p>University of East London (UEL)</p>
          </Col>
        </Row>
      </div>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4" />
          <Col md="8">
            <p>
              in many aspects of web development including the development of
              websites for small businesses, PSD to HTML jobs, on-page SEO and
              page speed optimisation. I’m constantly aiming to
            </p>
          </Col>
        </Row>
      </div>
      <hr style={{ backgroundColor: "white" }} />

      <div className="education">
        <Row>
          <Col md="2">
            <i style={{ color: "white" }} class="fas fas fa-laptop fa-4x" />
          </Col>
          <Col style={{ alignSelf: "center" }} md="10">
            <h3 style={{ color: "white", fontWeight: "600" }}>Skills</h3>
          </Col>
        </Row>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "5%",
          paddingTop: "5%",
          opacity: "0.9",
          padding: "20px"
        }}
        className="skiils-box"
      >
        <Skill name="HTML" value="70" />
        <Skill name="CSS / SASS" value="70" />
        <Skill name="JavaScript" value="55" />
        <Skill name="React" value="55" />
        <Skill name="Ruby on Rails" value="65" />
        <Skill name="PHP" value="40" />
        <Skill name="Swift" value="40" />
        <Skill name="SQL" value="60" />
        <Skill name="GIT" value="65" />
        <Skill name="Photoshop" value="60" />
        <Skill name="Adobe XD" value="60" />
      </div>
    </Col>
  );
};

export default LeftSide;
