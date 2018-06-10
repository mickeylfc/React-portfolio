import React from "react";
import "../../css/home.css";
import Nav from "../navbar";
import Header from "./header";
import AboutSection from "./aboutSection";
import CustomNavbar from "../navbar";
import ServicesSection from "./servicesSection";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="home-wrapper">
      <CustomNavbar />

      <Header />
      <AboutSection />
      <div className="custom-hr" />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Home;
