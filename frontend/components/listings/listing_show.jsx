import React from "react";
import { Link } from "react-router-dom";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.editDelete = this.editDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  compononetDidUpdate() {
    if (this.props.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .deleteListing(this.props.listing.id)
      .then(() => this.props.history.push(`/listings`));
  }

  editDelete() {
    return (
      <div className="edit-delete">
        <button
          className="edit"
          onClick={() =>
            this.props.history.push(`/listings/${this.props.listing.id}/edit`)
          }
        >
          Edit Listing
        </button>
        <button className="delete" onClick={this.handleSubmit}>
          Delete Listing
        </button>
      </div>
    );
  }

  render() {
    if (!this.props.listing) return null;
    const { listing, currentUser, listingId } = this.props;

    return (
      <div className="show-page">
        <h1>{this.props.listing.title}</h1>
        <p>{this.props.listing.bedroom}</p>
        <p>{this.props.listing.bathroom}</p>
        <p>{this.props.listing.guests}</p>
        <p>{this.props.listing.price}</p>
        <p>{this.props.listing.location}</p>
        <p>{this.props.listing.city}</p>
        <p>{this.props.listing.description}</p>
        <p>{this.props.listing.latitude}</p>
        <p>{this.props.listing.longitude}</p>
        <img src={this.props.listing.photoUrl} />
        {this.props.currentUser
          ? currentUser.id === listing.owner_Id
            ? this.editDelete()
            : ""
          : ""}
      </div>
    );
  }
}

export default ListingShow;
