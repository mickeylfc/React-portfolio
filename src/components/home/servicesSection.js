import React from "react";
import programming from "../../images/programming.svg";
import responsive from "../../images/responsive.svg";
import improvement from "../../images/settings.svg";
import ServiceBox from "./serviceBox";
import { Container, Row, Col } from "reactstrap";

const ServicesSection = () => {
  const cardImages2 = [
    {
      image: programming,
      id: 1,
      heading: "Web Development",
      text: "This is going to be the web developemt text"
    },
    {
      image: responsive,
      id: 1,
      heading: "Responsive Design",
      text: "This is going to be the web responsive text"
    },
    {
      image: improvement,
      id: 1,
      heading: "Website Improvement",
      text: "This is going to be the website improvement text"
    }
  ];

  return (
    <div className="services-wrapper">
      <Container>
        <h2 className="services-heading">SERVICES</h2>
        <Col md="12">
          <h2 className="services-sub-heading">What I can offer you</h2>
        </Col>

        <Row style={{ paddingTop: "5%", paddingBottom: "10%" }}>
          {cardImages2.map((image, index) => {
            return (
              <Col key={index} md="4">
                <ServiceBox image={image} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
