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
      <div>
        <ListingMap listings={this.props.listings} />
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
    );
  }
}

export default ListingIndex;
