import { HeaderMain } from './HeaderStyled';
import './Header.styles.css';
import { StyledLink } from '../Header/HeaderStyled';

const Header = (): JSX.Element => {
  return (
    <HeaderMain dark={false}>
      <div className="left">
        <StyledLink className="logo" to="/">
          Joey Essak
        </StyledLink>
      </div>
      <div className="right">
        <StyledLink className="home" to="/">
          Home
        </StyledLink>
        <StyledLink className="about" to="/about">
          About
        </StyledLink>
        <StyledLink className="apps" to="/apps">
          Mobile Apps
        </StyledLink>
        <StyledLink className="portfolio" to="/portfolio">
          Portfolio
        </StyledLink>
        <StyledLink className="contact" to="/contact">
          Contact
        </StyledLink>
        <StyledLink className="blog" to="/blog">
          Blog
        </StyledLink>
        <StyledLink className="resume" to="/resume">
          Resume
        </StyledLink>
      </div>
    </HeaderMain>
  );
};

export { Header };
