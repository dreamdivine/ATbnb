import React from "react";
import { Link } from "react-router-dom";

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }
  render() {
    if(!this.props.listing) return null;
    console.log(this.props.listing)
    return (
      <div>
        <h1>{this.props.listing.title}</h1>
        <p>{this.props.listing.bedroom}</p>
        <p>{this.props.listing.bathroom}</p>
        <p>{this.props.listing.guests}</p>
        <p>{this.props.listing.price}</p>
        <p>{this.props.listing.location}</p>
        <p>{this.props.listing.description}</p>
        <p>{this.props.listing.latitude}</p>
        <p>{this.props.listing.longitude}</p>
        {/* <img src={this.props.listing.photoUrl}/> */}
        <Link to="/"></Link>
      </div>
    );
  }
}

export default ListingShow;
