import React from "react";
import { Link } from "react-router-dom";
import NavBarCity from "../navbar_city/navbar_city";
import CreateReservationForm from "../reservations/create_reservation_container";
import ReviewFormContainer from "../../reviews/review_form_container";
import { deleteReview } from "../../actions/listing_actions";


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
      .then(() => this.props.history.push(`/sanfrancisco`));
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

  refreshPage() {
    window.location.reload(false);
  }

  renderReviews() {
    return (
      <div>
        {this.props.listing.reviews === undefined
          ? ""
          : Object.values(this.props.listing.reviews).map((review, i) => (
              <div key={i}>
                <div>
                  <h2>{review.body}</h2>
                </div>
                <div>
                  <h2>{review.rating}</h2>
                </div>
                <div className="deleteReviews">
                  {this.props.currentUserId !== review.author_id ? 
                    ""
                   : (
                    <button
                      className="delete-review"
                      onClick={() =>this.props
                        .deleteReview(review.id)
                        .then(this.refreshPage)}
                    >
                      Delete Review
                    </button>
                  )}
                </div>
              </div>
            ))}
      </div>
    );
  }

  render() {
    if (!this.props.listing) return null;
    const { listing, currentUser, listingId } = this.props;

    return (
      <div className="show-page">
        <NavBarCity />
        <div className="show-page-middle">
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
          <img src={this.props.listing.photoUrl} className="image-show" />
          {this.props.currentUser
            ? currentUser.id === listing.owner_Id
              ? this.editDelete()
              : ""
            : ""}
        </div>
        <CreateReservationForm listingId={this.props.listing.id} />
        <ReviewFormContainer listingId={this.props.listing.id} />
        {this.renderReviews()}
      </div>
    );
  }
}

export default ListingShow;
