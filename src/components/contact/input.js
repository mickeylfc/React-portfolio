import React from "react";
import { Col, Input } from "reactstrap";
import classnames from "classnames";

const FormInput = props => {
  const { name, value, type, reply, placeholder, error, onChange } = props;
  return (
    <div className="form-group ">
      <div className="d-flex input-container">
        <Col className="input-icon" style={{ padding: "0px" }} md="1">
          <i style={{ color: "#3ad3cf" }} className={props.icon} />
        </Col>

        <Col style={{ padding: "0px" }} md="11">
          <Input
            // classnames takes in 2 arguments
            className={classnames("form-control input jusify-content-cente ", {
              "is-invalid": error
            })}
            placeholder={placeholder}
            name={name}
            type={type}
            reply={reply}
            value={value}
            onChange={onChange}
          />
          {error && <div style={{color: "red"}} className="invalid-feeback">{error}</div>}
        </Col>
      </div>
    </div>
  );
};

export default FormInput;
