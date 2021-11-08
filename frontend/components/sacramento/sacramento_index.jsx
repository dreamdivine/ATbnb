import React from "react";
import SacramentoListingMap from "./sacramento_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexSacramento from "../sacramento/sacramento_index_item";

class SacramentoIndex extends React.Component {
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
                .filter((listing) => listing.city === "Sacramento")
                .map((listing, i) => (
                  <ListingIndexSacramento
                    listing={listing}
                    deleteListing={deleteListing}
                    key={i}
                  />
                ))}
            </ul>
          </div>
          <div className="map-listing">
            <SacramentoListingMap listings={this.props.listings} />
          </div>
        </div>
      </div>
    );
  }
}

export default SacramentoIndex;
