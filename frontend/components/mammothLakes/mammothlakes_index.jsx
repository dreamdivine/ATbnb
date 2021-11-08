import React from "react";
import MammothLakesListingMap from "./mammothlakes_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexMammothLakes from "./mammothlakes_index_item";

class MammothLakesIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const { listings, deleteListing } = this.props;
    if (!listings) return null;
    return (
      <div className="listing-plus-map">
        <div className="map-listings-middle">
          <div className="left-details">
            <LeftDetails />
            <ul>
              {listings
                .filter((listing) => listing.city === "Mammoth Lakes")
                .map((listing, i) => (
                  <ListingIndexMammothLakes
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <MammothLakesListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default MammothLakesIndex;
