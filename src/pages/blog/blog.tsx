import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";

const BlogPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Welcome to my blog</p>
    </div>
  );
};

export default BlogPage;
