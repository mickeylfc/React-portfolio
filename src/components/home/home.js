import React from "react";
import "../../css/home.css";
import Header from "./header";
import AboutSection from "./aboutSection";
import CustomNavbar from "../navbar";
import ServicesSection from "./servicesSection";
import Footer from "./footer";
import ProjectsSection from "./projectsSection";

class Home extends React.Component {
  componentDidMount() {
    document.body.style.background = `linear-gradient(
      135deg,
      #172a74 0,
      #21a9af 71%,
      #173e96 100%
    )`;
    document.body.style.backgroundAttachment = "fixed";
  }

  render() {
    return (
      <div className="home-wrapper">
        <CustomNavbar color="white" />
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
