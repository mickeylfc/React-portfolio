import React from "react";
import CustomNavbar from "../navbar";
import Footer from "../home/footer";
import "../../css/about.css";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";
import Header from "../header";
import { Container, Row } from "reactstrap";
import BodyBackgroundColor from "react-body-backgroundcolor";

class About extends React.Component {
  state = {
    navBorder: "",
    bg: "#808E9B"
  };

  componentDidMount() {
    this.setState({ navBorder: "nav-border-bottom" });
  }


  render() {



    return (
      <BodyBackgroundColor backgroundColor={this.state.bg}>
        <div>
          <CustomNavbar color="white" aboutNavBorder={this.state.navBorder} />
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
      </BodyBackgroundColor>
    );
  }
}

export default About;
