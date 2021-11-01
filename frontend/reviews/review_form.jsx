import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("i am state in the review", this.state);
    this.state = this.props.reviews;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToListingShow = this.navigateToListingShow.bind(this);
  }

  navigateToListingShow() {
    console.log("listing inside the review", this.props.match.params.listingId);
    const url = `/listings/${this.props.match.params.listingId}`;
    this.props.history.push(url);
  }

  handleSubmit(e) {
    e.preventDefault();
    const listingId = parseInt(this.props.match.params.listingId);
    const review = Object.assign({}, this.state, {
      listing_id: listingId,
    });
    this.props.createReview(review);
    this.navigateToListingShow();
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br />
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br />
          <label>Comment</label>
          <br />
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br />
          <input type="submit" />
        </form>
        <button onClick={this.navigateToListingShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
