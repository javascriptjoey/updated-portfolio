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
    <div className="wrapper">
      <div>
        <h1 className="title">Home</h1>
        <p>Column 1</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
      </div>
      <div>
        <h1 className="title">Welcome</h1>
        <p>Column 2</p>
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

export default HomePage;
