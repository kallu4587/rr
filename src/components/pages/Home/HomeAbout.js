import React from 'react';
import { Container } from '@material-ui/core';
import robot from '../../../svg/ai.svg';

const HomeAbout = () => {
  return (
    <div className="about-section-wrapper">
      <Container maxWidth="lg" className="about-section">
        <div className="about-image">
          <img src={robot} alt="Robot" className="robot-image" />
        </div>
        <div className="about-content-wrapper">
          <div className="about-content">
            {/* <h2 className="content-title">Who are we?</h2> */}
            <p className="content-desc">
              <strong>Robotics Research Lab </strong> is part of one of the reputed colleges in
              Savitribai Phule Pune University, i.e., <strong> Government College of
              Engineering and Research, Avasari, Pune.</strong> We participate in many
              technical competitions held across the India. Primarily, we
              participate in national level robotics competition{' '}
              <strong>Robocon.</strong>
            </p>
            <a className='youtube-channel-link CompetionButton' href='https://www.youtube.com/channel/UCl6xv4BVpB7v9UcN9HFWwjg/' target="_blank" rel='noreferrer'>Our Competition Videos</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
