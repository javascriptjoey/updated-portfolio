import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";

const ContactPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="content">
      <h1 className="title">Contact Me</h1>
      <p>Like what you see ? contact me! </p>
    </div>
  );
};

export default ContactPage;
