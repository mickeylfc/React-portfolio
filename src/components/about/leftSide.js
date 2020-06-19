import React from "react";
import Skill from "./skill";
import { Row, Col } from "reactstrap";

const LeftSide = () => {
  return (
    <Col
      style={{ background: "#E66767", padding: "20px", height: "100%", }}
      md="6"
      id="left"
    >
      <Row>
        <Col md="2">
          <i
            style={{ color: "white" }}
            className="fas fa-user-graduate fa-4x"
          />
        </Col>
        <Col style={{ alignSelf: "center" }} md="10">
          <h3 style={{ color: "white", fontWeight: "600" }}>Education</h3>
        </Col>
      </Row>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4">
            <p>2008 - 2012</p>
          </Col>
          <Col md="8">
            <strong>
              <p>Carlisle College</p>
            </strong>
          </Col>
        </Row>
      </div>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4" />
          <Col md="8">
            <p>
              I attended Carlisle College as part of a four year Electrical JTL
              apprenticeship achieving an NVQ Level-3 Electro technical Services
              (Electrical Installations) (Building and Structures)
            </p>
          </Col>
        </Row>
      </div>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4">
            <p>2017</p>
          </Col>
          <Col md="8">
            <strong>
              <p>Internship at UEL IT services</p>
            </strong>
          </Col>
        </Row>
      </div>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4" />
          <Col md="8">
            <p>
              I successfully completed a three months internship at the
              University of East London. I worked in a team of three developing
              a web application to help staff manage UEL managed systems and
              products.
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
            <strong>
              <p>University of East London (UEL)</p>
            </strong>
          </Col>
        </Row>
      </div>
      <div className="education">
        <Row style={{ color: "white" }}>
          <Col md="4" />
          <Col md="8">
            <p>
              Achieved a First-class degree at the University of East London
              studying BSc (Hons) in Computer Sciences.
            </p>
            <p>
              Throughout my degree, I learned the fundamentals and advanced
              topics in Computer Science. I learned the basics of software
              development and web development, Artificial intelligence, Cyber
              Security, Advanced network programming using Java, Distributed
              Systems, Database Modelling and Mobile Application development.
            </p>
          </Col>
        </Row>
      </div>

      <hr style={{ backgroundColor: "white" }} />

      <div className="education">
        <Row>
          <Col md="2">
            <i style={{ color: "white" }} className="fas fas fa-laptop fa-4x" />
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
