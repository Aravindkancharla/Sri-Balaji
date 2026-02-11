import React, { useState, useEffect } from 'react';
import './Projects.css';
import GrandeurImage from "./assets/Grandeur.jpg";
import Header from "./Header";

const Projects = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'plots', 'constructions'
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample projects data - Admin will manage this
  const projects = [
    
    {
      id: 1,
      title: "Balaji Elite Plots",
      type: "plots",
      location: "Koyachalaka, Khammam",
      size: "200-600 sq yards",
      price: "Starting from ₹20 Lakhs",
      status: "Available",
      features: ["DTCP Approved", "Clear Titles", "Water Supply", "Electricity"],
      description: "Strategically located plots near bypass with high appreciation potential.",
      
    },
    
    {
      id: 2,
      title: "GRANDURE Villas",
      type: "constructions",
      location: "Khammam",
      size: "3 & 4BHK - 1800 to 2500 sq ft",
      price: "₹75 Lakhs onwards",
      status: "Under Construction",
      features: ["Gated Community", "Clubhouse","Theam Parks" ,"Swimming Pool", "Landscaping"],
      description: "Luxurious villas with modern architecture and world-class amenities.",
      image: GrandeurImage

    },
    
  ];

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    return project.type === activeTab;
  });

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects-page">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-content">
          <h1 className="projects-hero-title">Our Projects</h1>
          <p className="projects-hero-subtitle">Discover Your Dream Property</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="projects-filter">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              <span className="tab-icon">🏘️</span>
              <span className="tab-text">All Projects</span>
              <span className="tab-count">{projects.length}</span>
            </button>
            <button 
              className={`filter-tab ${activeTab === 'plots' ? 'active' : ''}`}
              onClick={() => setActiveTab('plots')}
            >
              <span className="tab-icon">📍</span>
              <span className="tab-text">Open Plots</span>
              <span className="tab-count">{projects.filter(p => p.type === 'plots').length}</span>
            </button>
            <button 
              className={`filter-tab ${activeTab === 'constructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('constructions')}
            >
              <span className="tab-icon">🏢</span>
              <span className="tab-text">Gated Communities</span>
              <span className="tab-count">{projects.filter(p => p.type === 'constructions').length}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
  <img
    src={project.image}
    alt={project.title}
    className="project-real-image"
  />
                  <div className="project-status">{project.status}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-location">
                    <span className="location-icon">📍</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="project-details">
                    <div className="detail-item">
                      <span className="detail-label">Size:</span>
                      <span className="detail-value">{project.size}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Price:</span>
                      <span className="detail-value price">{project.price}</span>
                    </div>
                  </div>
                  <div className="project-features">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                  <button 
                    className="view-details-btn"
                    onClick={() => openProjectModal(project)}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <span className="no-projects-icon">🏗️</span>
              <h3>No Projects Found</h3>
              <p>Check back soon for new projects in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>✕</button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-location">
                <span className="location-icon">📍</span>
                <span>{selectedProject.location}</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-image">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="modal-real-image"
  />
</div>

              

              <div className="modal-info">
                <div className="info-section">
                  <h3 className="info-title">Project Details</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Size</span>
                      <span className="info-value">{selectedProject.size}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Price</span>
                      <span className="info-value">{selectedProject.price}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Status</span>
                      <span className="info-value">{selectedProject.status}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Type</span>
                      <span className="info-value">
                        {selectedProject.type === 'plots' ? 'Open Plots' : 'Gated Community'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3 className="info-title">Description</h3>
                  <p className="info-description">{selectedProject.description}</p>
                </div>

                <div className="info-section">
                  <h3 className="info-title">Key Features</h3>
                  <div className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="feature-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a href="/contact" className="action-btn primary">Request Site Visit</a>
                  <a href="tel:+911234567890" className="action-btn secondary">📞 Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Didn't Find What You're Looking For?</h2>
            <p className="cta-text">
              Contact us to learn about upcoming projects or get personalized recommendations
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Contact Us</a>
              <a href="tel:+911234567890" className="cta-button secondary">📞 +91 1234567890</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;