import React from "react";
import CustomNavbar from "../navbar";
import Footer from "../home/footer";
import "../../css/work.css";
import Boxes from "./boxes";
import Techworld from "../../images/techSmall.png";
import Child from "../../images/childSmall.png";
import Uni from "../../images/uniSmall.png";
import Portfolio from "../../images/portfolioSmall.png";
import Graphic from "../../images/graphicSmall.png";
import Internship from "../../images/itservicesSmall.png";
import ProjectModal from "./ProjectModal";
import ProjectTabs from "./projectTabs";
import BodyBackgroundColor from "react-body-backgroundcolor";


import { Container, Row, TabContent, TabPane } from "reactstrap";
import Header from "../header";

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      navBorder: "",
      activeTab: "0",
      modal: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      techworld: Techworld,
      child: Child,
      uni: Uni,
      portfolio: Portfolio,
      graphic: Graphic,
      internship: Internship,
      bg: "#F7F1E3"
    };
  }

  toggleModal1 = index => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleModal2 = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  };

  toggleModal3 = () => {
    this.setState({
      modal3: !this.state.modal3
    });
  };

  toggleModal4 = () => {
    this.setState({
      modal4: !this.state.modal4
    });
  };

  toggleModal5 = () => {
    this.setState({
      modal5: !this.state.modal5
    });
  };

  toggleModal6 = () => {
    this.setState({
      modal6: !this.state.modal6
    });
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  componentDidMount() {
    this.setState({ navBorder: "nav-border-bottom" });
    
  }


  render() {
    return (
      <BodyBackgroundColor backgroundColor={this.state.bg}>
      <div>
        <CustomNavbar color="black" workNavBorder={this.state.navBorder} />
        <Header heading="Projects" color="black" />
        <br />
        <br />
        <br />
        <br />

        <ProjectTabs activeTab={this.state.activeTab} toggle={this.toggle} />

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="0">
            <Container>
              <Row>
                <ProjectModal
                  isOpen={this.state.modal}
                  toggleModal={this.toggleModal1}
                  body={
                    "Techworld lifestyle started as a hobby technology account on Instagram. After a few months, my followers started growing rapidly. I then realised this could have potential. A lot of my Instagram followers were asking me if I have a website they can check out or a YouTube channel. After giving it some thought, I decided I would create a Techworld Lifestyle blog. My first thought was to create it using Wordpress since its quick and simple to set up a blog. I then decided I would challenge myself to create it from scratch using Ruby on Rails. This took a lot of time since I had to learn Rails while I was developing it (Which is my preferred way of learning) At the point of creating this site in the summer of 2017, I knew the basics of Rails, but not enough to meet the requirements for the blog. However, in the end, I was able to create a fully functional blog which vastly improved my Ruby on Rails knowledge."
                  }
                  title={"Techworld Lifestyle, a personal Technology Blog"}
                  feature1={
                    "Secure authentication for an author to post blog posts."
                  }
                  feature2="Admin panel where the author can write the blog posts using a
                  WYSWIYG HTML editor (TinyMCE)"
                  feature3=" The ability to hide and show posts.
                  "
                  feature4="Create tags for each blog post
                  "
                  projectName="Techworld Lifestyle"
                  projectDate="June 2017"
                  ProjectTech="HTML, SASS, Ruby on Rails, Heroku, AWS"
                  url="http://www.techworldlifestyle.com"
                  github=""
                  modalImage="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1046925db0fb1f15417d71ad1676880&auto=format&fit=crop&w=1950&q=80"
                  alt="TechworldLifestyle"
                />

                <Boxes
                  toggleModal={this.toggleModal1}
                  nameLineOne="TECHNOLOGY"
                  nameLineTwo="BLOG"
                  image={this.state.techworld}
                  number={1}
                />

                <ProjectModal
                  isOpen={this.state.modal2}
                  toggleModal={this.toggleModal2}
                  body={
                    "I was asked to create a website for one of my family members who runs a childminding business. The client had some requirements I had to follow which was to allow them to update a child vacancies section on the home page, as well as a feature where the user could add new pictures to a gallery. I designed the project using Photoshop and Adobe XD.  My main goal was to make the appearance look child-friendly which I believe I accomplished. Besides tutorials, this was one of the first Ruby and Rails web applications I created."
                  }
                  title={"A website for a childminding business"}
                  feature1="CRUD (Create, Read, Update, Delete)"
                  projectName="Louise's Childminding"
                  projectDate="December 2016"
                  projectTech="HTML, CSS, Ruby on Rails"
                  url="http://www.louiseenglishchildminding.co.uk/"
                  modalImage="https://images.unsplash.com/photo-1526455365195-86c9d2fd3ef5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=360b1ef63613cff85f354daeb68716d5&auto=format&fit=crop&w=1950&q=80"
                  alt="Louise English Childminding"
                />
                <Boxes
                  toggleModal={this.toggleModal2}
                  nameLineOne="CHILDMINDING"
                  nameLineTwo="BUSINESS"
                  image={this.state.child}
                  number={2}
                />
                <ProjectModal
                  isOpen={this.state.modal3}
                  toggleModal={this.toggleModal3}
                  body={
                    "The aim of this project was to create a student engagement and social activities web application. This was my Computer Science undergraduate final project and is my largest project to date. The standout feature of this application is a real-time chat feature where the end user can create channels (similar to Slack) then start chatting with other students without refreshing the page. As well as group chats, the user could also private message users. For the backend, I used Ruby on Rails's Action Cable to implement the real-time chat feature, and for the design and layout, I used CSS-GRID (future of CSS!) which I had not used until this project. I spent many months on this project, in the end, I am extremely happy with the final result. My project got named one of the best final year projects in my year group."
                  }
                  title={"My University final project"}
                  feature1="Authentication with a confirmation email required for students with @uel.ac.uk addresses only"
                  feature2="User avatars"
                  feature3="Events Feature where the user can post events around campus. Also, the user has the ability to comment and like an event with a heart."
                  feature4="Real-time chat feature for public and private chats and a feature to create channels 
                  "
                  projectName="MyUel, A student engagement and social activities web application"
                  projectDate="January - April 2018"
                  projectTech="HTML, CSS, CSS-GRID, JavaScript, Bootsrap, Ruby on Rails, Heroku"
                  url="https://myuel-final-project-v3.herokuapp.com"
                  login="To login as a guest, use the following"
                  username="Username = u1438760@uel.ac.uk"
                  password="Password = password"
                  github="https://github.com/mickeylfc/final_project_v2"
                  modalImage="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3aef6d10744dd7cbc836b631f46c1e5e&auto=format&fit=crop&w=1950&q=80"
                  aly="University Final Project"
                />
                <Boxes
                  isOpen={this.state.modal3}
                  toggleModal={this.toggleModal3}
                  nameLineOne="UNIVERSITY FINAL"
                  nameLineTwo="YEAR PROJECT"
                  image={this.state.uni}
                />
                <ProjectModal
                  isOpen={this.state.modal4}
                  toggleModal={this.toggleModal4}
                  body={
                    "You guessed it, this is the current website you are viewing ;) I added this on here because I built the entire application using React.js. I have been learning React for the past few weeks and I wanted to create a SPA (Single page application) for my portfolio. I absolutely love it and I can't imagine using the standard HTML again now that I know the basics of React. The ability to reuse components and only render state changes is fantastic!"
                  }
                  title={"Personal Portfolio"}
                  feature1="React"
                  feature2="JSON"
                  feature3="Webpack"
                  feauture4="Contact form text message alerts with Twillio"
                  projectName="Personal Portfolio"
                  projectDate="June 2018"
                  projectTech="JavaScript, React, Webpack, NPM, PostgreSQL, React ContextAPI"
                  github="https://github.com/mickeylfc/React-portfolio/tree/master"
                  modalImage="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Portfolio"

                />
                <Boxes
                  toggleModal={this.toggleModal4}
                  nameLineOne="PORTFOLIO"
                  nameLineTwo=""
                  image={this.state.portfolio}
                />
                <ProjectModal
                  isOpen={this.state.modal5}
                  toggleModal={this.toggleModal5}
                  body={
                    "A friend of mine graduated from university with a graphic design degree and asked if I could design and create a portfolio for him. I took on the task and developed the website using PHP."
                  }
                  title={"Clients Graphic Design Portfolio"}
                  projectName="Graphic design portfolio"
                  projectDate="October 2015"
                  projectTech="HTML, CSS, PHP"
                  url="https://jamiehaworth.herokuapp.com/"
                  modalImage="https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Clients Graphic Design Portfolio"
                />

                <Boxes
                  toggleModal={this.toggleModal5}
                  nameLineOne="CLIENTS GRAPHIC "
                  nameLineTwo=" DESIGN PORTFOLIO"
                  image={this.state.graphic}
                />
                <ProjectModal
                  isOpen={this.state.modal6}
                  toggleModal={this.toggleModal6}
                  body={
                    "I worked as an intern at UEL IT Services for three months where I worked with a team of three developers including myself, and a project manager. We were asked to develop a platform to help the IT services staff access information about all the different service the UEL IT services manage. We developed the application in PHP with a MySQL database. This project taught me how to work better in teams and gave me an understanding of a working environment as a developer. Also, the position, hugely improved my management skills by organizing and prioritising workloads to meet deadlines and to work better under pressure."
                  }
                  title={"Internship Team Project"}
                  feature1="CRUD"
                  feature2="Secure Login"
                  feature3="Admin Panel and User Permissions"
                  feature4="Relational databases"
                  projectName="UEL IT Services Internship Project"
                  projectDate="April-June 2017"
                  projectTech="HTML, CSS, JavaScript, PHP, MySQL,"
                  url="https://uel-it-services.herokuapp.com/"
                  login="To login as a guest, use the following"
                  username="Username = guest"
                  password="Password = password"
                  github=""
                  modalImage="https://images.unsplash.com/photo-1521798639664-03c920e53085?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9c9878777ab9fb4a8346fd51f7858dc&auto=format&fit=crop&w=1950&q=80"
                  alt="Internship Team Project"
                />
                <Boxes
                  toggleModal={this.toggleModal6}
                  nameLineOne="INTERNSHIP"
                  nameLineTwo="TEAM PROJECT"
                  image={this.state.internship}
                />
              </Row>
            </Container>
          </TabPane>

          <TabPane tabId="1">
            <Container>
              <Row>
                <Boxes
                  nameLineOne="TECHNOLOGY"
                  nameLineTwo="BLOG"
                  image={Techworld}
                  toggleModal={this.toggleModal1}
                />
                <Boxes
                  nameLineOne="CHILDMINDING"
                  nameLineTwo="BUSINESS"
                  image={Child}
                  toggleModal={this.toggleModal2}
                />
                <Boxes
                  nameLineOne="UNIVERSITY FINAL"
                  nameLineTwo="YEAR PROJECT"
                  image={Uni}
                  toggleModal={this.toggleModal3}
                />
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container>
              <Row>
                <Boxes
                  nameLineOne="PORTFOLIO"
                  nameLineTwo=""
                  image={Portfolio}
                  toggleModal={this.toggleModal4}
                />
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="3">
            <Container>
              <Row>
                <Boxes
                  toggleModal={this.toggleModal5}
                  nameLineOne="CLIENTS GRAPHIC "
                  nameLineTwo=" DESIGN PORTFOLIO"
                  image={Graphic}
                />
                <Boxes
                  nameLineOne="INTERNSHIP"
                  nameLineTwo="TEAM PROJECT"
                  image={Internship}
                  toggleModal={this.toggleModal6}
                />
              </Row>
            </Container>
          </TabPane>
        </TabContent>

        <br />
        <br />
        <br />
        <br />
        <Footer color="black" />
      </div>
      </BodyBackgroundColor>
    );
  }
}

export default Work;
