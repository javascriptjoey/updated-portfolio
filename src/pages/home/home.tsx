import React, { Children, useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import { gsap } from "gsap";
import "./home.css";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  const fadeInHeader1 = React.createRef<HTMLDivElement>();
  const fadeInHeader2 = React.createRef<HTMLImageElement>();
  const fadeInText1 = React.createRef<HTMLDivElement>();
  const fadeInText2 = React.createRef<HTMLDivElement>();
  useEffect(() => {
    gsap.from(fadeInHeader1.current, {
      delay: 0.3,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(fadeInHeader2.current, {
      delay: 0.3,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(fadeInText1.current, {
      delay: 1,
      opacity: 0,
      duration: 1,
    });

    gsap.from(fadeInText2.current, {
      delay: 2,
      opacity: 0,
      duration: 1,
    });
    logging.info(`Loading ${props.name}`);
  }, [
    props.name,
    { fadeInHeader1 },
    { fadeInHeader2 },
    { fadeInText1 },
    { fadeInText2 },
  ]);

  return (
    <div className="wrapper">
      <div className="align">
        <h1 ref={fadeInHeader1} className="title ">
          Design
        </h1>

        <h2 ref={fadeInText1}>Develop & Deploy</h2>
        <p ref={fadeInText2}>
          Software Engineer iOS & Web Developer based in Los Angeles, CA
        </p>
      </div>
      <div className="postionImage"></div>
    </div>
  );
};

export default HomePage;
