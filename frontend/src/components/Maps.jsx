import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from "../actions";
import { Redirect } from 'react-router';
import LocationPicker from 'react-location-picker';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Maps extends Component {


  static defaultProps = {
    center: {
      lat: 21.1702,
      lng: 72.8311
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly  <input name="firstname" type="text" required="required" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
      <div style={{ height: '80vh', width: '80%' }}>
      
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'google api key' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={21.1702}
            lng={72.8311}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;