import React from "react";
import LakeTahoeListingMap from "./laketahoe_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexLakeTahoe from "./laketahoe_index_item";

class LakeTahoeIndex extends React.Component {
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
                .filter((listing) => listing.city === "Lake Tahoe")
                .map((listing, i) => (
                  <ListingIndexLakeTahoe
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <LakeTahoeListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default LakeTahoeIndex;
