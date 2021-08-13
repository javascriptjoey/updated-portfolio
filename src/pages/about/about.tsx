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
    <div className="aboutwrapper">
      <div>
        <h1 className="title">About</h1>
        <p>Paragraph 1</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
        <h1 className="title">Info about me</h1>
        <p>Paragraph 2</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed quam,
          eligendi dicta voluptate, dignissimos ipsa asperiores, impedit
          doloribus illo tenetur exercitationem? Odio pariatur unde voluptatem
          repellendus? Tenetur, totam facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed quam,
          eligendi dicta voluptate, dignissimos ipsa asperiores, impedit
          doloribus illo tenetur exercitationem? Odio pariatur unde voluptatem
          repellendus? Tenetur, totam facilis.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed quam,
          eligendi dicta voluptate, dignissimos ipsa asperiores, impedit
          doloribus illo tenetur exercitationem? Odio pariatur unde voluptatem
          repellendus? Tenetur, totam facilis.
        </p>
      </div>
    </div>
  );
};

export default withRouter(AboutPage);
