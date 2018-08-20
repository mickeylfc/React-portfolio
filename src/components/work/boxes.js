import React from "react";
import { Col } from "reactstrap";
import Fade from "react-reveal/Fade";

const Boxes = props => {
  return (
    <Col className="col-no-padding" md="4">
      <Fade>
        <div
          onClick={e => props.toggleModal(e, props.number)}
          style={{ backgroundImage: `url(${props.image})` }}
          className="project-box d-flex justify-content-center align-items-center"
        >
          <h2 className="project-box-text">{props.nameLineOne}</h2>
          <h2 className="project-box-text">{props.nameLineTwo}</h2>
        </div>
      </Fade>
    </Col>
  );
};

export default Boxes;
