import React from "react";
import { withRouter } from "react-router";
import MarkerManager from "../../util/marker_manager";
import { Link } from "react-router-dom";

class SFListingMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 10,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.listings.filter(listing => listing.city === "San Francisco"));
    this.initMap = this.initMap.bind(this);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.listings.filter(listing => listing.city === "San Francisco"));
    this.initMap(this.map);
  }

  initMap(map) {
    this.props.listings.filter(listing => listing.city === "San Francisco").forEach((listing) => {
      const contentString = `<div id="inside-info">
      <div>
       <img src=${listing.photoUrl} id="map-images">
      </div>
      <div id="marker-title">${listing.title}</div>
      <div id="marker-price">$${listing.price}/night</div>
      </div>`;
      const marker = new google.maps.Marker({
        position: { lat: listing.latitude, lng: listing.longitude },
        map,
        icon: {
          url: "./images/oval.svg",
          scaledSize: new google.maps.Size(60, 60),
        },
        label: { text: "$" + `${listing.price}`, className: "mapMarker" },
      });
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      google.maps.event.addListener(marker, "click", function () {
        if (!marker.open) {
          infowindow.open(map, marker);
          marker.open = true;
        } else {
          infowindow.close();
          marker.open = false;
        }
        google.maps.event.addListener(map, "click", function () {
          infowindow.close();
          marker.open = false;
        });
        setTimeout(function () {
          infowindow.close();
        }, 5000);
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

export default withRouter(SFListingMap);
