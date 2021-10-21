export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = this.handleClick;
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach((listing) => listingsObj[listing.id] = listing);

    listings
    .filter(listing => !this.markers[listing.id])
    .forEach(newListing => this.createMarkerFromListing(newListing, this.handleClick))
  }

  createMarkerFromListing(listing) {
    const position = new google.maps.LatLng(listing.latitude, listing.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
    });

    marker.addListener("click", () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
    };

    removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId];
  }
}
