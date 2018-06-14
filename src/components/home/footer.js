import React from "react";

const Footer = props => {
  return (
    <footer style={{ borderTop: "1px solid white" }}>
      <div className="container">
        <div className="d-flex flex-row ">
          <div
            style={{ textAlign: "center", color: props.color }}
            className=" jusify-content-start footer-text d-flex "
          >
            Designed By Mickey English
          </div>
          <div className="d-flex ml-auto">
            <div className=" d-flex justify-content-end footer-item">
              <i
                style={{ color: props.color }}
                id="mail"
                className="fas fa-envelope  fa-2x"
              />
            </div>

            <div className=" d-flex justify-content-end footer-item">
              <i
                style={{ color: props.color }}
                id="linkedin"
                className="fab fa-linkedin fa-2x"
              />
            </div>
            <div className=" d-flex justify-content-end footer-item">
              <i
                style={{ color: props.color }}
                id="github"
                className="fab fa-github-square fa-2x"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
