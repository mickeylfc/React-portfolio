import React from "react";
import { Col, Input } from "reactstrap";
const FormInput = props => {
  return (
    <div className="form-group ">
      <div className="d-flex input-container">
        <Col className="input-icon" style={{ padding: "0px" }} md="1">
          <i style={{ color: "#3ad3cf" }} className={props.icon} />
        </Col>

        <Col style={{ padding: "0px" }} md="11">
          <Input
            className="form-control input jusify-content-center"
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            reply={props.reply}
          />
        </Col>
      </div>
    </div>
  );
};

export default FormInput;
