import React from "react";
import SFListingMap from "./sf_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexSanFrancisco from "../sanfrancisco/sanfrancisco_index_item";

class SanFranciscoIndex extends React.Component {
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
                .filter((listing) => listing.city === "San Francisco")
                .map((listing, i) => (
                  <ListingIndexSanFrancisco
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <SFListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default SanFranciscoIndex;
