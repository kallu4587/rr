import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const ContactMap = () => {
  return (
    <Map
      google={this.props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176 }}
    />
  )
}

const mapStyles = {
  width: '100%',
  height: '100%',
};


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDuznd0pMGDIEggeQQ-JB2i42Vw6CK7tY4'
})(ContactMap);

