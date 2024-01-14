import React from 'react';
import ParticlesBg from 'particles-bg';
import { withWidth } from '@material-ui/core';

const TopSection = (props) => {
  let num = ['xs', 'sm', 'md'].includes(props.width) ? 22 : 55;

  return (
    <div className="top-section-wrapper">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={num} />
      <div className="top-center">
        <h1 className="top-title">Robotics Research Lab</h1>
        <h3 className="top-subtitle">Exploring the wonders of technology.</h3>
      </div>
    </div>
  );
};

export default withWidth()(TopSection);
