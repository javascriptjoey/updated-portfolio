import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";

const AppsPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="content">
      <h1 className="title">iPhone Applications</h1>
      <p> Native iOS applications go on this page</p>
    </div>
  );
};

export default AppsPage;
