import React from "react";
import ProjectBox from "./projectBox";

const ProjectsSection = () => {
  return (
    <div
      style={{
        paddingBottom: "5%"
      }}
    >
      <div className="container p-0">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
