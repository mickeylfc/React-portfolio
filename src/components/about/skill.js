import React from "react";
import { Row, Col, Progress } from "reactstrap";

const Skill = props => {
  return (
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
  );
};

export default Skill;
