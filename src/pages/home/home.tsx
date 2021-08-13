import React, { Children, useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import { gsap } from "gsap";
import "./home.css";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  const fadeInHeader1 = React.createRef<HTMLDivElement>();
  const fadeInHeroImage = React.createRef<HTMLImageElement>();
  const fadeInText1 = React.createRef<HTMLDivElement>();
  const fadeInText2 = React.createRef<HTMLDivElement>();
  useEffect(() => {
    gsap.from(fadeInHeader1.current, {
      delay: 0.3,
      opacity: 0,
      duration: 1.5,
    });

    gsap.from(fadeInHeroImage.current, {
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
      delay: 1,
      opacity: 0,
      duration: 1,
    });
    logging.info(`Loading ${props.name}`);
  }, [
    props.name,
    { fadeInHeader1 },
    { fadeInHeroImage },
    { fadeInText1 },
    { fadeInText2 },
  ]);

  return (
    <div className="wrapper">
      <div>
        <h1 ref={fadeInHeader1} className="title ">
          Home
        </h1>

        <p ref={fadeInText1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
      </div>
      <div className="postionImage"></div>
    </div>
  );
};

export default HomePage;
