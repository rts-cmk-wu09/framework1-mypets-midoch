import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1 className="homepage-title">Welcome to Pet Finder</h1>
        <p>Find your perfect pet companion!</p>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <img src="/src/assets/pet.jpg" alt="Pet" className="hero-image" />
          <div className="hero-text">
            <h2 className="hero-title">Discover Your New Friend</h2>
            <p className="hero-description">
              Browse our collection of pets and find your perfect match today!
            </p>
            <Link to="/list" className="hero-button">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        <p>© 2023 Pet Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
