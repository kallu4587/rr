import React from 'react';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Location = (props) => {
  return (
    <div className="map-wrapper">
      <iframe
        title="Location"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&maptype=satellite&zoom=16&q=Government+College+Of+Engineering+And+Research,+Avasari+Khurd`}
        allowFullScreen
        className="map-embed"
      ></iframe>
    </div>
  );
};

export default Location;
