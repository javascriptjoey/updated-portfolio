import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const AppsPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <p>This is the Apps page! Oh shit joey you learn fastr then you think</p>
  );
};

export default AppsPage;
