import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid white" }}>
      <div className="container">
        <div className="d-flex flex-row ">
          <div
            style={{ textAlign: "center" }}
            className=" jusify-content-start footer-text d-flex "
          >
            Designed By Mickey English
          </div>
          <div className="d-flex ml-auto">
            <div className=" d-flex justify-content-end footer-item">
              <i id="mail" class="fas fa-envelope  fa-2x" />
            </div>

            <div className=" d-flex justify-content-end footer-item">
              <i id="linkedin" class="fab fa-linkedin fa-2x" />
            </div>
            <div className=" d-flex justify-content-end footer-item">
              <i id="github" class="fab fa-github-square fa-2x" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="d-flex flex-row">
//     <div className="p-2 order-3 ml-auto my-flex-item">1</div>
//     <div className="p-2 order-1 mr-auto my-flex-item">2</div>
//     <div className="p-2 order-2 mr-auto my-flex-item">3</div>
// </div>
