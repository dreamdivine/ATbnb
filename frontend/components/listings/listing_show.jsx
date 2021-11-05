import React from "react";
import { Link } from "react-router-dom";
import NavListingShow from "../navbar_city/navlisting_show";
import CreateReservationForm from "../reservations/create_reservation_container";
import ReviewFormContainer from "../../reviews/review_form_container";


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
                <div className="username_show">Anonymous</div>
                <div>
                  <h2>{review.body}</h2>
                </div>
                <div className="deleteReviews">
                  {this.props.currentUserId !== review.author_id ? (
                    ""
                  ) : (
                    <button
                      className="delete-review"
                      onClick={() =>
                        this.props
                          .deleteReview(review.id)
                          .then(this.refreshPage)
                      }
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
        <NavListingShow />
        <div className="show-page-middle">
          <div className="show-title">{listing.title}</div>
          <div className="second-line-start-review-superhost">
            <div className="star-review-length">
              <i className="fas fa-star" id="star"></i>
              <div className="average-rating">
                {listing.average_rating}
              </div>
              <div className="review-length">
                {listing.reviews === undefined
                  ? "0 reviews"
                  : "(" +
                    Object.values(listing.reviews).length +
                    " reviews)"}
              </div>
            </div>
            <div className="dot">.</div>
            <div className="medal-superhost">
              <div>
                <i className="fas fa-medal" id="medal"></i>
              </div>
              <div className="superhost">Superhost</div>
            </div>
            <div className="dot">.</div>
            <div className="city-california">
              {listing.city + ", California, United States"}
            </div>
          </div>
          <div className="image-show-listing">
            <img src={listing.photoUrl} className="image-show" />
          </div>
        </div>

        <div className="bottom-listing-show">
          <div className="listing-info">
            <div className="userinfo-listing-info">
              <div className="userinfo-house">
              </div>
              <div className="listing-city-guests-bed">
                {listing.guests} guests .{" "}
                {listing.bedroom} bedroom .{" "}
                {listing.bedroom * 2} beds .{" "}
                {listing.bathroom} bath
              </div>
            </div>
            <div className="listing-show-information">
              <div className="entire-home-icon">
                <div>
                  <i className="fas fa-home" id="house-icon"></i>
                </div>
                <div className="top-bottom">
                  <p className="top">Entire home</p>
                  <p className="bottom">You'll have the house to yourself.</p>
                </div>
              </div>
              <div className="enhanced-clean-icon">
                <div>
                  <img src="/images/stars.png" className="icon-img"></img>
                </div>
                <div className="top-bottom">
                  <p className="top">Enhanced Clean</p>
                  <p className="bottom">
                    This Host committed to Airbnb's 5-step enhanced cleaning
                    process.
                  </p>
                </div>
              </div>
              <div className="location-map-icon">
                <div>
                  <i className="fas fa-map-marker-alt" id="mapIcon"></i>
                </div>
                <div className="top-bottom">
                  <p className="top">Great location</p>
                  <p className="bottom">
                    100% of recent guests gave the location a 5-star rating.
                  </p>
                </div>
              </div>
              <div className="checkIn-key-icon">
                <div>
                  <i className="fas fa-key" id="keyIcon"></i>
                </div>
                <div className="top-bottom">
                  <p className="top">Great check-in experience</p>
                  <p className="bottom">You'll have the house to yourself.</p>
                </div>
              </div>
            </div>
            <div className="listing-show-essay">
              <p>
                The beautiful cozy house is just a few minutes away from the
                mall and grocery stores. The house is prefectly situated near
                the downtown so there is plenty to explore around for the
                visitors. It is equipped with modern furnishing, TV, and
                wireless internet. Washer and dryer for guest use, iron with
                ironing board, first aide kit, and fully stocked kitchen. The
                kitchen is equipped with microwave, coffee machine, fridge. oven
                and toaster. The house is pet friendly but we would really
                appreciate if the guest would clean up after the pet/pets.
                Perfect retreat for whole family!
              </p>
            </div>
            <div className="listing-offer">
              <div>What this place offers</div>
              <div className="listing-icon-description">
                <div className="icon-offer">
                  <img src="/images/utensils.png" className="icon-img"></img>
                  <div className="icon-detail">Kitchen</div>
                </div>
                <div className="icon-offer">
                  <i className="fas fa-car" id="car"></i>
                  <div className="icon-detail">Free parking on premises</div>
                </div>
                <div className="icon-offer">
                  <img src="/images/washer.png" className="icon-img"></img>
                  <div className="icon-detail">Washer</div>
                </div>
                <div className="icon-offer">
                  <img src="/images/balcony.png" className="icon-img"></img>
                  <div className="icon-detail">Patio or balcony</div>
                </div>
                <div className="icon-offer">
                  <i className="fas fa-suitcase-rolling" id="luggage"></i>
                  <div className="luggage-detail">Luggage dropoff allowed</div>
                </div>
                <div className="icon-offer">
                  <i className="fas fa-wifi"></i>
                  <div className="wifi-detail">Wifi</div>
                </div>
                <div className="icon-offer">
                  <i className="fas fa-tv"></i>
                  <div className="icon-detail">TV</div>
                </div>
                <div className="icon-offer">
                  <img
                    src="/images/tumble-dryer.png"
                    className="icon-img"
                  ></img>
                  <div className="icon-detail">Dryer</div>
                </div>
                <div className="icon-offer">
                  <i className="fas fa-paw" id="pet"></i>
                  <div className="icon-detail">Pet allowed</div>
                </div>
                <div className="icon-offer">
                  <img src="/images/cctv-camera.png" className="icon-img"></img>
                  <div className="icon-detail">
                    Security cameras on property
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="create-reservation-show-page">
            <CreateReservationForm listingId={listing.id} />
          </div>
        </div>
        {this.props.currentUser
          ? currentUser.id === listing.owner_Id
            ? this.editDelete()
            : ""
          : ""}
        <ReviewFormContainer listingId={listing.id} />
        <div className="line-show"></div>
        <div className="star-review-reviews-sec">
          <i className="fas fa-star" id="star"></i>
          <div className="average-rating-reviews">
            {this.props.listing.average_rating}
          </div>
          <div className="dot-reviews">.</div>
          <div className="review-length-reviews">
            {listing.reviews === undefined
              ? "0 reviews"
              : Object.values(listing.reviews).length +
                " reviews"}
          </div>
        </div>
        <div className="reviews-show">{this.renderReviews()}</div>
      </div>
    );
  }
}

export default ListingShow;
