import React from "react";
import Header from "../components/HomePageHeader";
import HeroSection from "../components/HomePageHeroSection";
import Footer from "../components/HomePageFooter";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
