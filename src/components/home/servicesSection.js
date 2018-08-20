import React from "react";
import ServiceBox from "./serviceBox";
import { Row, Col } from "reactstrap";
import { Consumer } from "../../contextapi/context";

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <div className="container p-0">
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
      </div>
    </div>
  );
};

export default ServicesSection;
