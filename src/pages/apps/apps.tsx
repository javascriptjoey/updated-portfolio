import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import "./apps.css";
const AppsPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="appswrapper">
      <div></div>
      <div>
        <h1 className="title ">iPhone Applications</h1>

        <p>
          Check out these awesome iPhone applications Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Suscipit nulla, odit deleniti quidem
          laborum velit iusto numquam sapiente aspernatur alias perspiciatis
          recusandae quibusdam quia. Magni quaerat quod perspiciatis eius
          consectetur.
        </p>
      </div>
    </div>
  );
};

export default AppsPage;
