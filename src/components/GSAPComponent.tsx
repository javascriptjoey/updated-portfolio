import React, { useEffect } from 'react';
import './GSAPComponent.css';
import { gsap } from 'gsap';

const GSAPComponent = (): JSX.Element => {
  const header = React.createRef<HTMLDivElement>();

  useEffect(() => {
    gsap.to(header.current, { color: '#8c0', duration: 2 });
  }, [{ header }]);

  return (
    <div>
      <h1 ref={header}> Testing this out</h1>
    </div>
  );
};

export default GSAPComponent;
