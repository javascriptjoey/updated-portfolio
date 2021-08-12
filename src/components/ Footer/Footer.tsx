import React from "react";
import "./Footer.styles.css";

const Footer = (): JSX.Element => {
  return (
    <div className="foot">
      <i className="fa fa-github" aria-hidden="true"></i>
      <i className="fab fa-linkedin"></i>
      <i className="fab fa-react"></i>
      <i className="fab fa-js"></i>
      <i className="fab fa-swift"></i>
      <i className="fab fa-git-square"></i>
      <i className="fab fa-python"></i>
      <i className="fas fa-database"></i>
    </div>
  );
};

export { Footer };
