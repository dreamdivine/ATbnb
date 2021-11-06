import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reviews;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  refreshPage() {
    window.location.reload(false);
  }


  handleSubmit(e) {
    e.preventDefault();
    const listingId = parseInt(this.props.match.params.listingId);
    const review = Object.assign({}, this.state, {
      listing_id: listingId,
    });
    if (this.props.currentUser) {
      this.props.createReview(review).then(this.refreshPage);
    } else {
      this.props.openModal("login");
    }
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
            required
            type="number"
            min="1"
            max="5"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br />
          <label>Comment</label>
          <br />
          <textarea
            required
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
