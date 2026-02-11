import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Header from "./Header";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-carousel">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${
                index === currentImageIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Building Dreams Into Reality</h1>
          <p className="hero-subtitle">
            Premium Open Plots & Gated Community Constructions
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "/projects")}
            >
              <span>Explore Projects</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="carousel-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => goToImage(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Discover premium open plots and gated communities
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-card-image green">📍</div>
              <div className="project-card-content">
                <h3>Open Plots</h3>
                <p>
                  Premium residential plots with clear titles and excellent
                  infrastructure.
                </p>
                <div
                  className="project-card-link"
                  onClick={() => (window.location.href = "/projects")}
                >
                  View Projects →
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-image orange">🏢</div>
              <div className="project-card-content">
                <h3>Gated Communities</h3>
                <p>
                  Luxurious gated community constructions with world-class
                  amenities.
                </p>
                <div
                  className="project-card-link"
                  onClick={() => (window.location.href = "/projects")}
                >
                  View Projects →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="Balaji logo.png" alt="Balaji logo" />
                <span>Sir Balaji Estates</span>
              </div>
              <p>
                Building dreams into reality with premium real estate solutions.
              </p>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <p>📧 bharadwajtanniru2027@gmail.com </p>
              <p>📞 +91 8179389899</p>
              <p>📍 Khammam, Telangana</p>
            </div>

            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Prime Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
