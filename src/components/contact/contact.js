import React from "react";
import "../../css/contact.css";
import CustomNavbar from "../navbar";
import Header from "../header";
import FormInput from "./input";
import Footer from "../home/footer";
import { Container, Row, Col, Button, Form } from "reactstrap";

class Contact extends React.Component {
  state = {
    navBorder: ""
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#00CEC9"; // Set the style
    this.setState({ navBorder: "1px solid white" });
  }

  render() {
    const userIcon = "far fa-user fa-2x";
    const emailIcon = "fas fa-at fa-2x";
    const messageIcon = "far fa-envelope fa-2x";

    return (
      <div>
        <CustomNavbar color="white" borderDark={this.state.navBorder} />
        <div className="about-wrapper">
          <Container>
            <Header color="white" heading="Contact Me" />

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
                  <form
                    method="POST"
                    data-netlify="true"
                    style={{ padding: "0px" }}
                    className="form"
                    name="contact"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <FormInput
                      type="text"
                      icon={userIcon}
                      placeholder="Full name. . . ."
                      name="name"
                    />
                    <FormInput
                      icon={emailIcon}
                      placeholder="Email address. . . ."
                      type="email"
                      name="email"
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
                          <i
                            style={{ color: "#3ad3cf" }}
                            className={messageIcon}
                          />
                        </Col>
                        <Col style={{ padding: "0px" }} md="11">
                          <textarea
                            rows="10"
                            className="form-control"
                            style={{ width: "100%" }}
                            placeholder="Write your message here . . ."
                            name="message"
                          />
                        </Col>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="button-div col-md-12 ">
                  <button type="submit" id="send-message">
                    Send Message
                  </button>
                </div>

                <input
                  type="hidden"
                  name="_next"
                  value="https://site.io/thanks.html"
                />
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
