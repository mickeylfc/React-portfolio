import React from "react";
import "../../css/home.css";
import Header from "./header";
import AboutSection from "./aboutSection";
import CustomNavbar from "../navbar";
import ServicesSection from "./servicesSection";
import Footer from "./footer";
import ProjectsSection from "./projectsSection";


class Home extends React.Component {

  state = {
    bg: document.body.style.background = `white`
    
  }

  componentDidMount() {
    document.body.style.background = this.state.bg;
    document.body.style.backgroundAttachment = "fixed";
  }

  componentWillUnmount() {
    document.body.style.background = "";
  }

  render() {
    return (
      <div className="home-wrapper">
        <CustomNavbar color="black" />
        <Header />
        <AboutSection />

        <ProjectsSection />
        <ServicesSection />
        <Footer backgroundColor="#eef2f4" color="#536171" />
      </div>
    );
  }
}

export default Home;
