import React from "react";
import { Col } from "reactstrap";
import Avatar from "../../images/avatar.png";
import Profile from "../../images/me.jpeg";

const RightSide = () => {
  return (
    <Col
      style={{
        padding: "20px",
        backgroundColor: "white"
      }}
      md="6"
      id="left"
    >
      <div className="avatar-wrapper">
        <img className="avatar" src={Profile} alt={Avatar} />
      </div>

      <div className="name-heading">
        <h2 id="name">Michael English</h2>
        {/* <h4 id="developer">Developer</h4> */}
        <div className="d-flex justify-content-center">
         
        </div>
      </div>
      <div className="about-text-wrapper">
        <Col>
          <strong>Background</strong>
          <br />
          <br />
          <p>
            I was born and raised in a small city in the north of England called
            Carlisle. After finishing high school, I worked a full-time job as
            an apprentice electrician. during this time, I gained some essential
            life skills. I learned how to work in teams, independently, work to
            tight deadlines and communication skills. After completing the
            apprenticeship and becoming a fully qualified electrician, I
            realised this career choice was not for me.
          </p>
        </Col>
        <Col>
          <p>
            I have always enjoyed working with technology whether it's checking
            the latest tech blogs or buying the must-have gadget. I knew I would
            enjoy working in the technology industry. Moving forward, I got
            accepted at a few universities in London to study Computer Science.
            From this point, my life changed. I moved to London successfully
            completing a BSc(Hons) Computer Science degree gaining a first-class
            degree. During my studies, I was always trying to improve my web
            development skills. For instance, working on my HTML, CSS and
            JavaScript. Using these new techniques, I have been able to create
            some websites and web apps for friends, family and clients. You can
            check them out in the projects section.
          </p>
        </Col>
        <Col>
          <strong>Web Development</strong>
          <br />
          <br />
          <p>
            I'm always finding myself checking the latest trends in the web
            development industry, such as learning new languages and frameworks
            such as Ruby on Rails which I highly enjoy. Additionally, I have
            been trying to improve my JavaScript by learning the ES6 and ES7
            syntax. Also, I have challenged myself to learn some of the popular
            front end frameworks such as React.js and Vue.js. which I love!
          </p>
        </Col>
        <Col>
          <p>
            If you would like to get in touch to find out more information about
            me or if you would like to work together on a project. Please head
            over to the contact form and send me an email. I'd love hear from
            you!
          </p>
        </Col>
        <Col>
          <strong>Hobbies</strong>
          <br />
          <br />
          <p>
            In my spare time when I am away from a computer screen, I like to
            keep fit by going running and playing football. I also love watching
            movies!
          </p>
        </Col>
      </div>
    </Col>
  );
};

export default RightSide;
