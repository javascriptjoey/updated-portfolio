import React, { useState, useEffect } from "react";
import { StyledLink } from "./NavbarStyled";
import "./Navbar.styles.css";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">Joey Essak</h3>

        <ul
          className={
            isMobile ? "nav-links-mobile" : " nav-links-mobile-close nav-links"
          }
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
        <div className="mobile-menu-icon">
          <Hamburger size={20} onToggle={(toggled) => setIsMobile(!isMobile)} />
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
