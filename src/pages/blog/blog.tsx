import React, { useEffect } from "react";
import IPage from "../../Interfaces/page";
import logging from "../../Config/logging";
import "./blog.css";
const BlogPage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);

  return (
    <div className="blogwrapper">
      <div>
        <h1 className="title ">Blog Life</h1>
        <p>Day today ep1</p>
        <p>
          Check out this awesome blog dont forget to subscribe Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Suscipit nulla, odit deleniti
          quidem laborum velit iusto numquam sapiente aspernatur alias
          perspiciatis recusandae quibusdam quia. Magni quaerat quod
          perspiciatis eius consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
      </div>
      <div>
        <h1 className="title ">From Zero to Hero</h1>
        <p>The Journey Begins</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          nulla, odit deleniti quidem laborum velit iusto numquam sapiente
          aspernatur alias perspiciatis recusandae quibusdam quia. Magni quaerat
          quod perspiciatis eius consectetur.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
