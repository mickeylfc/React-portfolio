import React from "react";
import CustomNavbar from "../navbar";
import Footer from "../home/footer";
import { Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div>
      <CustomNavbar />
      <Container>
        <Jumbotron>
          <h1>Thank you!!</h1>
          <h2>I will be in touch soon</h2>
          <Link to="../home/home.js">
            <Button>Back</Button>
          </Link>
        </Jumbotron>
      </Container>
      <Footer />
    </div>
  );
};

export default Thanks;
