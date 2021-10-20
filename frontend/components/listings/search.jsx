import React from "react";
import FilterForm from "./filter_form";
import ListingMap from "../listing_map/listing_map";
import ListingIndex from "./listing_index";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    return (
      <div>
        <div>
          <ListingMap listings={this.props.listings} />
        </div>
        <div>
          <ListingIndex
            Listings={this.props.listings}
            fetchListings={this.props.fetchListings}
          />
        </div>
      </div>
    );
  }
}

export default Search;
