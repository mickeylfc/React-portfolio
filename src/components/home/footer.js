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
            <a href="mailto:mickeyeng92@gmail.com?Subject=Mickey English Portfolio">
              <div className=" d-flex justify-content-end footer-item">
                <i
                  style={{ color: props.color }}
                  id="mail"
                  className="fas fa-envelope  fa-2x"
                />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/michael-english-930586a5/">
              <div className=" d-flex justify-content-end footer-item">
                <i
                  style={{ color: props.color }}
                  id="linkedin"
                  className="fab fa-linkedin fa-2x"
                />
              </div>
            </a>
            <a href="https://github.com/mickeylfc">
              <div className=" d-flex justify-content-end footer-item">
                <i
                  style={{ color: props.color }}
                  id="github"
                  className="fab fa-github-square fa-2x"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
