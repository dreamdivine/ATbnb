import React from "react";
import ListingMap from "../listing_map/listing_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexSantaBarbara from "./santabarbara_index_item";

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
                .filter((listing) => listing.city === "Santa Barbara")
                .map((listing, i) => (
                  <ListingIndexSantaBarbara
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <ListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default OaklandIndex;
