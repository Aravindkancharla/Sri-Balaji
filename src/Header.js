import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isAdminLoginPage = location.pathname === "/admin-login";
  const isAdminDashboardPage = location.pathname === "/admin-dashboard";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const mobileLinkClass = ({ isActive }) =>
    isActive ? "mobile-nav-link active" : "mobile-nav-link";

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo (always visible) */}
          <div className="logo" onClick={() => navigate("/")}>
            <span className="logo-icon">
              <img src="/Balaji logo.png" alt="Balaji logo" />
            </span>
            <span className="logo-text">Sri Balaji Groups</span>
          </div>

          {/* Website navigation links */}
          {!isAdminLoginPage && !isAdminDashboardPage && (
            <div className="nav-links">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/about" className={linkClass}>About Us</NavLink>
              <NavLink to="/faqs" className={linkClass}>FAQs</NavLink>
              <NavLink to="/projects" className={linkClass}>Projects</NavLink>
              <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
            </div>
          )}

          {/* Right-side button */}
          <div className="nav-buttons">
            {/* Website → Admin Login */}
            {!isAdminLoginPage && !isAdminDashboardPage && (
              <button
                className="btn-login"
                onClick={() => navigate("/admin-login")}
              >
                Admin Login
              </button>
            )}

            {/* Admin Login → Return to Website */}
            {isAdminLoginPage && (
              <button
                className="btn-login"
                onClick={() => navigate("/")}
              >
                Return to Website
              </button>
            )}
          </div>

          {/* Mobile menu button (website only) */}
          {!isAdminLoginPage && !isAdminDashboardPage && (
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown (website only) */}
      {mobileMenuOpen && !isAdminLoginPage && !isAdminDashboardPage && (
        <div className="mobile-menu">
          <NavLink to="/" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/faqs" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>FAQs</NavLink>
          <NavLink to="/projects" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" className={mobileLinkClass} onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>

          <button
            className="mobile-admin-login"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate("/admin-login");
            }}
          >
            Admin Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
