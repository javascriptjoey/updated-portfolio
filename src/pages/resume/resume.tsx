import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";

const ResumePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1>Resume</h1>
      <p>Down load resume option will be here</p>
    </div>
  );
};

export default ResumePage;
