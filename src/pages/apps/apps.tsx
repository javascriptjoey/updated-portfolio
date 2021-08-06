import React, { useEffect } from 'react';
import IPage from '../../interfaces/page';
import logging from '../../config/logging';

const AppsPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1>iPhone Applications</h1>
      <p> Native iOS applications go on this page</p>
    </div>
  );
};

export default AppsPage;
