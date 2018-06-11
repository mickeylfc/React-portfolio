import React from "react";
import CustomNavbar from "../navbar";
import Footer from "../home/footer";
import "../../css/about.css";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";
import { Container, Row, Col } from "reactstrap";

class About extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#808E9B"; // Set the style
  }
  render() {
    return (
      <div>
        <CustomNavbar />
        <Container>
          <Row>
            <Col>
              <h1 className="about-header-text">About Me</h1>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row style={{ marginTop: "5%" }}>
            <RightSide />
            <LeftSide />
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default About;
