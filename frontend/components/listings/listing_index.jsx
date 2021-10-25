import React from "react";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "../listing_map/listing_map";
import LeftDetails from "../listings/left_details_cities";

class ListingIndex extends React.Component {
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
        <div>
          <LeftDetails className="left-details"/>
          <ul>
            {listings.map((listing, i) => (
              <ListingIndexItem
                listing={listing}
                // deleteListing={deleteListing}
                key={i}
              />
            ))}
          </ul>
        </div>
        <div className="map-listing">
          <ListingMap listings={this.props.listings} />
        </div>
      </div>
    );
  }
}

export default ListingIndex;
