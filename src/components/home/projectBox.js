import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectBox = props => {
  return (
    <div id={props.boxName}>
      <div className="box-wrapper">
        <h3 className="box-heading-grid">{props.heading}</h3>

        <a className="button-view" href={props.url} target="_blank">
          <Button className="view-button ">Launch</Button>
        </a>
        <Link to="/work" className="button-more">
          <Button className="more-button">More Info</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectBox;
