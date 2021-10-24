import React from "react";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "../listing_map/listing_map";

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
        <div className="listing-list">
          <div>
            <p>300+ stays in map area</p>
            <p>
              More than 290,000 guests have stayed in this city. On average they
              rated their stays 4.8 out of 5 stars.
            </p>
          </div>
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
