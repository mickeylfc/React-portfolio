import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Container
} from "reactstrap";

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <Navbar style={{ background: "transparent" }} light expand="md">
          <NavLink tag={Link} to="/">
            <div
              style={{
                color: this.props.color
              }}
              className="navbar-brand"
            >
              Mickey English
            </div>
          </NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className={this.props.aboutNavBorder}
                  active
                  tag={Link}
                  to="/about"
                  style={{
                    color: this.props.color,
                    borderBottom: this.props.border
                  }}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={this.props.contactNavBorder}
                  active
                  tag={Link}
                  to="/contact"
                  style={{
                    color: this.props.color,
                    borderBottom: this.props.borderDark
                  }}
                >
                  Contact
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <NavLink
                  className={this.props.workNavBorder}
                  active
                  tag={Link}
                  to="/work"
                  style={{ color: this.props.color }}
                >
                  Work
                </NavLink>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default CustomNavbar;
