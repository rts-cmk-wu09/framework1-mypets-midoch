import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src="/src/assets/pet.jpg" alt="Pet" className="hero-image" />
        <div className="hero-text">
          <h2 className="hero-title">Discover Your New Friend</h2>
          <p className="hero-description">
            Browse our collection of pets and find your perfect match today!
          </p>
          <Link to="/list-page" className="hero-button">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
