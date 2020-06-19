import React from "react";
import Typist from "react-typist";
import macMaterial from "../../images/mac-window-material.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container p-0">
      <div className="header-wrapper">
        <h2 className="intro-heading">Who am I ?</h2>

        <p style={{ lineHeight: "1.7em" }} className="intro-text">
          I’m a recent Computer Science graduate based in London, looking for
          some fun projects to work on. I have a strong passion for web
          development mainly with Ruby on Rails for the back-end and React for
          the front-end. I recently gained a first-class degree and I am now
          actively looking for junior developer opportunities.{" "}
        </p>
        <Link className="portfolio-btn" to="/work">
          <button className="btn btn-portfolio">Portfolio<i class="ri-arrow-right-line"></i></button>
        </Link>
        <div
          style={{
            backgroundImage: `url(${macMaterial})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "435px"
          }}
          className="mac"
        />
        <Typist className="typist-header-text">
          {" "}
          <h3 style={{ fontWeight: "600" }}>
            Hello, my name is <span id="header-name">Michael English</span> and
            I am a junior front-end developer{" "}
          </h3>{" "}
        </Typist>
      </div>
    </div>
  );
};

export default Header;
