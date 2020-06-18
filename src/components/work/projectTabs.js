import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const ProjectTabs = props => {
  return (
    <div className="nav-tabs-wrapper">
      <Nav className="custom-nav-tabs" tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "all" })}
            onClick={() => {
              props.toggle("all");
            }}
          >
            All Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "javascript" })}
            onClick={() => {
              props.toggle("javascript");
            }}
          >
            JavaScript
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "react" })}
            onClick={() => {
              props.toggle("react");
            }}
          >
            React
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "ruby" })}
            onClick={() => {
              props.toggle("ruby");
            }}
          >
            Ruby On Rails
          </NavLink>
        </NavItem>

       

        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "php" })}
            onClick={() => {
              props.toggle("php");
            }}
          >
            PHP
          </NavLink>
        </NavItem>

       
      </Nav>
    </div>
  );
};

export default ProjectTabs;
