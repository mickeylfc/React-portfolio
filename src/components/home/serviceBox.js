import React from "react";
import { Card } from "reactstrap";

const ServiceBox = props => {
  return (
    <Card>
      <img
        width="200px"
        height="150px"
        className="img-fluid card-image"
        src={props.image.image}
        alt={props.image.image}
      />
      <h2 className="card-heading">{props.image.heading}</h2>
    </Card>
  );
};

export default ServiceBox;
