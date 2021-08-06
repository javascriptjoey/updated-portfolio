import React, { useEffect, useState } from 'react';
import IPage from '../../interfaces/page';
import logging from '../../config/logging';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import '../about/about.css';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  const colorChange_01 = React.createRef<HTMLDivElement>();
  const colorChange_02 = React.createRef<HTMLDivElement>();
  const colorChange_03 = React.createRef<HTMLDivElement>();

  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    gsap.to(colorChange_01.current, { color: '#ff1744', duration: 2 });
    gsap.to(colorChange_02.current, { color: '#e57373', duration: 2 });
    gsap.to(colorChange_03.current, { color: '#e57373', duration: 2 });

    logging.info(`Loading ${props.name}`);
    const number = props.match.params.number;

    if (number) {
      setMessage(`The Number is ${number}`);
    } else {
      setMessage(`No number provided!`);
    }
  }, [props, { colorChange_01 }, { colorChange_02 }, { colorChange_03 }]);

  return (
    <div>
      <h1 ref={colorChange_01}>About Me</h1>
      <p ref={colorChange_02}>This page is all about me and my background</p>
      <h2 ref={colorChange_03}>{message}</h2>
      <Link className="colorChange" to="/">
        Go to the home page!
      </Link>
    </div>
  );
};

export default withRouter(AboutPage);
