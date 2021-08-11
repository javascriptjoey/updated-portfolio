import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";

const ContactPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1>Contact Me</h1>
      <p>Like what you see ? contact me! </p>
    </div>
  );
};

export default ContactPage;
