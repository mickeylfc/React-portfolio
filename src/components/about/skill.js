import React from "react";
import { Row, Col, Progress } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const Skill = props => {
  return (
    <Zoom>
      <Row>
        <Col md="4">
          <strong>
            <p>{props.name}</p>
          </strong>
        </Col>
        <Col md="8">
          <Progress color="info" value={props.value} />
        </Col>
      </Row>
    </Zoom>
  );
};

export default Skill;
