import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
          <Link to="/">
            <NavbarBrand>Mickey English</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about">
                  <NavLink>About</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <Link activeClassName="test" to="/work">
                  <NavLink href="/work">Work</NavLink>
                </Link>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default CustomNavbar;
