import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import "../../main.css";
const PortfolioPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="content portfoliowrapper">
      <h1 className="title">Portfolio</h1>
      <p>This is my portfolio</p>
      <p>Paragraph 1</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla,
        odit deleniti quidem laborum velit iusto numquam sapiente aspernatur
        alias perspiciatis recusandae quibusdam quia. Magni quaerat quod
        perspiciatis eius consectetur.
      </p>
      <h1 className="title">Websites & Projects</h1>
      <p>Here are some cool projects</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed quam,
        eligendi dicta voluptate, dignissimos ipsa asperiores, impedit doloribus
        illo tenetur exercitationem? Odio pariatur unde voluptatem repellendus?
        Tenetur, totam facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed quam,
        eligendi dicta voluptate, dignissimos ipsa asperiores, impedit doloribus
        illo tenetur exercitationem? Odio pariatur unde voluptatem repellendus?
        Tenetur, totam facilis.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed quam,
        eligendi dicta voluptate, dignissimos ipsa asperiores, impedit doloribus
        illo tenetur exercitationem? Odio pariatur unde voluptatem repellendus?
        Tenetur, totam facilis.
      </p>
    </div>
  );
};

export default PortfolioPage;
