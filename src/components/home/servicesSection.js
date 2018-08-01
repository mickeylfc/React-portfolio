import React from "react";
import ServiceBox from "./serviceBox";
import { Container, Row, Col } from "reactstrap";
import { Consumer } from "../../contextapi/context";

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <Container>
        <Col md="12">
          <h2 className="services-sub-heading">Services I can offer you</h2>
        </Col>

        <Consumer>
          {value => {
            return (
              <Row style={{ paddingTop: "5%", paddingBottom: "10%" }}>
                {value.images.map((image, index) => {
                  return (
                    <Col className="service-box" key={index} md="4">
                      <ServiceBox image={image} />
                    </Col>
                  );
                })}
              </Row>
            );
          }}
        </Consumer>
      </Container>
    </div>
  );
};

export default ServicesSection;
