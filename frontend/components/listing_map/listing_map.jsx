import React from 'react';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';


class ListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings);
    this.initMap = this.initMap.bind(this);
    this.InfoObj = [];
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings);
    this.initMap(this.map);
  }

  initMap(map) {
    this.props.listings.forEach((listing) => {
      const contentString = `<div id="inside-info">
      <div>
        <img src=${listing.photoUrl} id="map-images">
      </div>
      <div id="marker-title">${listing.title}</div>
      <div id="marker-price">$${listing.price}/night</div>
      </div>`
      const marker = new google.maps.Marker({
        position: { lat: listing.latitude, lng: listing.longitude },
        map,
        // title: `${listing.title}`,
        label: { text: "$" + `${listing.price}`, className: "mapMarker" },
      });
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    });
  }

  render() {
    return (
      <div id="map-container" ref={(map) => (this.mapNode = map)}>
        Map
      </div>
    );
  }
}

export default withRouter(ListingMap)
