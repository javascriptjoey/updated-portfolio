import React, { useEffect } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { gsap } from 'gsap';

const HomePage: React.FunctionComponent<IPage> = (props) => {
  const colorChangePrimary = React.createRef<HTMLDivElement>();
  const colorChangeSecondary = React.createRef<HTMLDivElement>();

  useEffect(() => {
    gsap.to(colorChangePrimary.current, { color: '#ff1744 ', duration: 2 });
    gsap.to(colorChangeSecondary.current, { color: '#e57373', duration: 2 });
    logging.info(`Loading ${props.name}`);
  }, [props.name, { colorChangePrimary }, { colorChangeSecondary }]);

  return (
    <div>
      <h1 ref={colorChangePrimary}>Home</h1>
      <p ref={colorChangeSecondary}>Welcome</p>
    </div>
  );
};

export default HomePage;
