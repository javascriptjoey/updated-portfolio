import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import { gsap } from "gsap";
import "./home.css";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  const colorChangePrimary = React.createRef<HTMLDivElement>();
  const colorChangeSecondary = React.createRef<HTMLDivElement>();

  useEffect(() => {
    gsap.to(colorChangePrimary.current, { color: "#ff1744 ", duration: 2 });
    gsap.to(colorChangeSecondary.current, { color: "#e57373", duration: 2 });
    logging.info(`Loading ${props.name}`);
  }, [props.name, { colorChangePrimary }, { colorChangeSecondary }]);

  return (
    <div className="content">
      <h1 className="title">Home</h1>
      <p>Welcome</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla,
        odit deleniti quidem laborum velit iusto numquam sapiente aspernatur
        alias perspiciatis recusandae quibusdam quia. Magni quaerat quod
        perspiciatis eius consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla,
        odit deleniti quidem laborum velit iusto numquam sapiente aspernatur
        alias perspiciatis recusandae quibusdam quia. Magni quaerat quod
        perspiciatis eius consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla,
        odit deleniti quidem laborum velit iusto numquam sapiente aspernatur
        alias perspiciatis recusandae quibusdam quia. Magni quaerat quod
        perspiciatis eius consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla,
        odit deleniti quidem laborum velit iusto numquam sapiente aspernatur
        alias perspiciatis recusandae quibusdam quia. Magni quaerat quod
        perspiciatis eius consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla,
        odit deleniti quidem laborum velit iusto numquam sapiente aspernatur
        alias perspiciatis recusandae quibusdam quia. Magni quaerat quod
        perspiciatis eius consectetur.
      </p>
    </div>
  );
};

export default HomePage;
