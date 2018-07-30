import React from "react";
import { Container } from "reactstrap";
import ProjectBox from "./projectBox";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <div
      style={{
        paddingBottom: "5%"
      }}
    >
      <Container className="p-0">
        <div id="wrapper">
          <div id="header-box">
            <h2 id="recent-projects-heading">Recent Projects</h2>
          </div>

          <ProjectBox
            boxName="box1"
            heading="University Final Project"
            url="https://myuel-final-project-v3.herokuapp.com/"
          />

          <ProjectBox
            url="http://www.louiseenglishchildminding.co.uk"
            boxName="box2"
            heading="Childminding Business"
          />
          <ProjectBox
            boxName="box3"
            heading="Technology Blog"
            url="http://www.techworldlifestyle.com"
          />
          <div id="view-more">
            <Link to="/work">
              <h2 id="view-more-text">View more </h2>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsSection;
