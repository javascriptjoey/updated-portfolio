import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';

const BlogPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return <p>BLoG works</p>;
};

export default BlogPage;
