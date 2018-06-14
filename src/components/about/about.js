import React from "react";
import CustomNavbar from "../navbar";
import Footer from "../home/footer";
import "../../css/about.css";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";
import Header from "../header";
import { Container, Row } from "reactstrap";

class About extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#808E9B"; // Set the style
  }
  render() {
    return (
      <div>
        <CustomNavbar color="white" />
        <Header heading="About" color="white" />
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
