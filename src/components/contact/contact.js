import React from "react";
import "../../css/contact.css";
import CustomNavbar from "../navbar";
import FormInput from "./input";
import Footer from "../home/footer";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input
} from "reactstrap";

class Contact extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#00CEC9"; // Set the style
  }

  render() {
    const userIcon = "far fa-user fa-2x";
    const emailIcon = "fas fa-at fa-2x";
    const messageIcon = "far fa-envelope fa-2x";

    return (
      <div>
        <CustomNavbar />
        <div className="about-wrapper">
          <Container>
            <Row>
              <Col>
                <h1 className="about-header-text">Get in touch</h1>
              </Col>
            </Row>

            <div className="box">
              <Row className="justify-content-center">
                <Col md="8">
                  <h3 className="header-text">
                    Get in touch and say hello. Whether you have a work enquiry
                    or simply want to find out more, let’s talk.
                  </h3>
                </Col>
                <div
                  className="form-box col-md-12
                "
                >
                  <Form style={{ padding: "0px" }} className="form">
                    <FormInput icon={userIcon} placeholder="Full name. . . ." />
                    <FormInput
                      icon={emailIcon}
                      placeholder="Email address. . . ."
                    />

                    <div className="form-group ">
                      <div className="d-flex textarea-container">
                        <Col
                          className="input-icon"
                          style={{
                            padding: "0px",
                            alignSelf: "start"
                          }}
                          md="1"
                        >
                          <i style={{ color: "#3ad3cf" }} class={messageIcon} />
                        </Col>
                        <Col style={{ padding: "0px" }} md="11">
                          <textarea
                            rows="10"
                            className="form-control"
                            style={{ width: "100%" }}
                            placeholder="Write your message here . . ."
                          />
                        </Col>
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="button-div col-md-12 ">
                  <Button id="send-message">Send Message</Button>
                </div>
              </Row>
            </div>
          </Container>
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Contact;
