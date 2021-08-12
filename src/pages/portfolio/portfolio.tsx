import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";

const PortfolioPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="content">
      <h1>Portfolio</h1>
      <p>Websites and Projects will be listed on this page</p>
    </div>
  );
};

export default PortfolioPage;
