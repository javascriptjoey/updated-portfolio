import React, { useState } from 'react';
import { StyledLink } from './NavbarStyled';
import './Navbar.styles.css';
const Navbar = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">Joey Essak</h3>
        <ul
          className={isMobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setIsMobile(false)}
        >
          <StyledLink className="home" to="/">
            <li>Home</li>
          </StyledLink>
          <StyledLink className="about" to="/about">
            <li>About</li>
          </StyledLink>
          <StyledLink className="apps" to="/apps">
            <li>Apps</li>
          </StyledLink>
          <StyledLink className="portfolio" to="/portfolio">
            <li>Portfolio</li>
          </StyledLink>
          <StyledLink className="blog" to="/blog">
            <li>Blog</li>
          </StyledLink>
          <StyledLink className="resume" to="/resume">
            <li>Resume</li>
          </StyledLink>
          <StyledLink className="contact" to="/contact">
            <li>Contact</li>
          </StyledLink>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
};

export { Navbar };
