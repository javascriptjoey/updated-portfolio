import React from "react";
import "./Footer.styles.css";

const Footer = (): JSX.Element => {
  return (
    <div className="foot">
      <span className="footerItem">
        <i className="fab fa-swift"></i>
      </span>

      <span className="footerItem">
        <i className="fab fa-react"></i>
      </span>

      <span className="footerItem">
        <i className="fab fa-js"></i>
      </span>

      <span className="footerItem">
        <i className="fab fa-python"></i>
      </span>

      <span className="footerItem">
        <i className="fab fa-git-square"></i>
      </span>

      <span className="footerItem">
        <i className="fas fa-code-branch"></i>
      </span>

      <span className="footerItem">
        <i className="fab fa-github-square"></i>
      </span>

      <span className="footerItem">
        <i className="fab fa-aws"></i>
      </span>
      <span className="footerItem">
        <i className="fas fa-database"></i>
      </span>
    </div>
  );
};

export { Footer };
