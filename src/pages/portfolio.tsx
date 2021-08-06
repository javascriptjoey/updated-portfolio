import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const PortfolioPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1>Portfolio</h1>
      <p>Websites and Projects will be listed on this page</p>
    </div>
  );
};

export default PortfolioPage;
