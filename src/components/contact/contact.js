import React from "react";
import "../../css/contact.css";
import CustomNavbar from "../navbar";
import Header from "../header";
import FormInput from "./input";
import Footer from "../home/footer";
import { Container, Col, Button } from "reactstrap";
import BodyBackgroundColor from "react-body-backgroundcolor"


class Contact extends React.Component {
  state = {
    navBorder: "",
    name: "",
    email: "",
    message: "",
    errors: {},
    bg: "#00CEC9"
  };

  componentDidMount() {
    this.setState({ navBorder: "1px solid white" });
  }



  onChange = e => {
    // this will get the name of each input

    this.setState({
      [e.target.name]: e.target.value,
      nameEmail: e.target.value
    });
  };

  onSubmit = e => {
    const { name, email, message } = this.state;

    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      e.preventDefault();
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email address is required"
        }
      });
      e.preventDefault();
      return;
    }

    if (message === "") {
      this.setState({
        errors: {
          message: "Message is required"
        }
      });
      e.preventDefault();
      return;
    }

    // this.props.history.push("/contact/thanks");
  };

  render() {
    const { name, email, message, errors } = this.state;
    const userIcon = "far fa-user fa-2x";
    const emailIcon = "fas fa-at fa-2x";
    const messageIcon = "far fa-envelope fa-2x";

    return (
      <BodyBackgroundColor backgroundColor={this.state.bg}>
      <div>
        <CustomNavbar color="white" borderDark={this.state.navBorder} />
        <div className="about-wrapper">
          <Container className="p-0">
            <Header color="white" heading="Contact Me" />

            <form
              style={{ padding: "0px" }}
              name="contact"
              action="https://formcarry.com/s/r1z7TIfzX"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={this.onSubmit}
            >
              <div className="box">
                <Col md="12">
                  <h3 className="header-text">
                    Get in touch and say hello. Whether you have a work enquiry
                    or simply want to find out more, let’s talk.
                  </h3>
                </Col>

                <div
                  className="form-box col-md-12
            "
                >
                  <FormInput
                    type="text"
                    icon={userIcon}
                    placeholder="Full name. . . ."
                    name="name"
                    value={name}
                    error={errors.name}
                    onChange={this.onChange}
                  />
                  <FormInput
                    icon={emailIcon}
                    placeholder="Email address. . . ."
                    type="email"
                    name="email"
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                  />

                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission!"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="www.mickeyenglish.co.uk/contact/thanks"
                  />

                  <div className="d-flex textarea-container">
                    <Col
                      className="input-icon"
                      style={{
                        padding: "0px",
                        alignSelf: "start"
                      }}
                      md="1"
                    >
                      <i style={{ color: "#3ad3cf" }} className={messageIcon} />
                    </Col>
                    <Col style={{ padding: "0px" }} md="11">
                      <textarea
                        rows="10"
                        className="form-control"
                        style={{ width: "100%" }}
                        placeholder="Write your message here . . ."
                        name="message"
                        value={message}
                        onChange={this.onChange}
                      />
                      {this.state.errors.message && (
                        <div
                          style={{ color: "red" }}
                          className="invalid-feeback"
                        >
                          {this.state.errors.message}
                        </div>
                      )}
                    </Col>
                  </div>
                </div>

                <div className="button-div col-md-12 ">
                  <Button type="submit" id="send-message">
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </Container>
        </div>
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

export default Contact;
