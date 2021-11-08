import React from "react";
import OaklandListingMap from "./oakland_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexOakland from "./oakland_index_item";

class OaklandIndex extends React.Component {
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
                .filter((listing) => listing.city === "Oakland")
                .map((listing, i) => (
                  <ListingIndexOakland
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <OaklandListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default OaklandIndex;
