export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach((listing) => (listingsObj[listing.id] = listing));
  }

  createMarkerFromBench(listing) {
    const position = new google.maps.LatLng(listing.latitude, listing.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      icon:
    });

    marker.addListener("click", () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }
}
