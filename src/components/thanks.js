import React from "react";
import CustomNavbar from "./navbar";
import Footer from "./home/footer";
import { Container, Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Typist from "react-typist";

class Thanks extends React.Component {
  render() {
    return (
      <div>
        <CustomNavbar color="white" />
        <Container>
          <Jumbotron>
            <div className="thanks-wrapper">
              <Typist>
                <h1>Thank you, for your message.</h1>
                <h2>I will be in touch soon :)</h2>
              </Typist>
              <div className="thanks-btn">
                <Link to="/">
                  <Button id="thanks-back-btn">Back</Button>
                </Link>
              </div>
            </div>
          </Jumbotron>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Thanks;
