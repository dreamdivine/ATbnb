import React from "react";
import ListingMap from "../listing_map/listing_map";
import LeftDetails from "../listings/left_details_cities";
import ListingIndexItem from "./listing_index_item";

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
          <div className="listing-all">
            <ul className="inside-ul">
              {listings.map((listing, i) => (
                <ListingIndexItem
                  listing={listing}
                  deleteListing={deleteListing}
                  key={i}
                />
              ))}
            </ul>
          </div>
    );
  }
}

export default ListingIndex;
