import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const ResumePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return <p>This is my Really cool Resume downLoad page!</p>;
};

export default ResumePage;
