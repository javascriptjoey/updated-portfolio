import React, { useEffect, useState } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { gsap } from "gsap";
import "./about.css";

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  return (
    <div className="content">
      <h1 className="title">About Me</h1>
      <p>This page is all about me and my background</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        fugit, dolorem delectus consectetur error repellendus nostrum quibusdam
        similique quis, vero excepturi inventore! Sint totam itaque perferendis
        accusamus consequuntur, ea praesentium?
      </p>
      <Link className="title" to="/">
        Go to the home page!
      </Link>
    </div>
  );
};

export default withRouter(AboutPage);
