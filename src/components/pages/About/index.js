import React from 'react';
import Layout from '../../layout';
import Map from './Location';
import AboutDetails from './AboutDetails';

const AboutIndex = () => {
  return (
    <Layout>
      <div className="about-page-wrapper">
        <div className="about-details">
          <AboutDetails />
        </div>
        <div className="about-map">
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default AboutIndex;
