import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const ContactPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return <p>Hello cant come to the phone im coding</p>;
};

export default ContactPage;
