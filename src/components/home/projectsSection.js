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
            heading="COVID-19 Dashboard"
            url="https://coronavirus-covid19-stats.herokuapp.com/"
          />

          <ProjectBox
            url="https://techworlduk.herokuapp.com/"
            boxName="box2"
            heading="Technology Blog"
          />
          <ProjectBox
            boxName="box3"
            heading="Final Year University Project"
            url="https://myuel-final-project-v3.herokuapp.com/users/sign_in"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
