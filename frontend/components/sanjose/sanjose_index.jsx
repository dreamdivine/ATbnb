import React from "react";
import SanjoseListingMap from "./sanjose_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexSJ from "./sanjose_index_item";

class SanJoseIndex extends React.Component {
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
                .filter((listing) => listing.city === "San Jose")
                .map((listing, i) => (
                  <ListingIndexSJ
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <SanjoseListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default SanJoseIndex;
