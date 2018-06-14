import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const ProjectTabs = props => {
  return (
    <div className="nav-tabs-wrapper">
      <Nav className="custom-nav-tabs" tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "0" })}
            onClick={() => {
              props.toggle("0");
            }}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "1" })}
            onClick={() => {
              props.toggle("1");
            }}
          >
            Ruby On Rails
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "2" })}
            onClick={() => {
              props.toggle("2");
            }}
          >
            React
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: props.activeTab === "3" })}
            onClick={() => {
              props.toggle("3");
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
