import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import Paragraph from 'grommet/components/Paragraph';

const ContactGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{ lat: 52.513115, lng: -2.115432 }}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onClick={() => props.onMarkerClick(marker)}
        >
          {marker.showInfo &&
            <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
              <div>{marker.infoContent}</div>
            </InfoWindow>}
        </Marker>
      ))}
    </GoogleMap>
  ))
);

export default class ContactMap extends React.Component {
  state = {
    center: {
      lat: 52.513115,
      lng: -2.115432
    },
    markers: [
      {
        position: {
          lat: 52.513115,
          lng: -2.115432
        },
        infoContent: (
          <Paragraph size='small'>
            Dommestic & Commercial Drain Services
            </Paragraph>
        ),
        showInfo: false
      }
    ]
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          };
        }
        return marker;
      })
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false
          };
        }
        return marker;
      })
    });
  }

  render() {
    return (
      <ContactGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=drawing&key=AIzaSyBAmQdbLOrbCnMMSMQPrtioXbTkdEDHHFg"
        loadingElement={
          <div style={{ height: "500px" }}>
            loading
          </div>
        }
        containerElement={
          <div
            style={{ height: "320px" }}
            className="grommetux-box grommetux-box--direction-column grommetux-box--justify-start grommetux-box--align-start grommetux-box--responsive grommetux-box--pad-horizontal-medium grommetux-box--wrap grommetux-background-color-index-light-1 grommetux-background-color-index--light"
          />
        }
        mapElement={<div style={{ height: "320px", width: "360px" }} />}
        center={this.state.center}
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
    );
  }
}
