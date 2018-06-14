import React from "react";
import { Col } from "reactstrap";

const Boxes = props => {
  return (
    <Col className="col-no-padding" md="4">
      <div
        onClick={e => props.toggleModal(e, props.number)}
        style={{ backgroundImage: `url(${props.image})` }}
        className="project-box d-flex justify-content-center align-items-center"
      >
        <h2 className="project-box-text">{props.nameLineOne}</h2>
        <h2 className="project-box-text">{props.nameLineTwo}</h2>
      </div>
    </Col>
  );
};

export default Boxes;
