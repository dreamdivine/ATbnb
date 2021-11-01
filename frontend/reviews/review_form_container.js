import { connect } from "react-redux";

import { createReview, deleteReview, updateReview } from "../actions/listing_actions";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => {
    console.log("i am here", state)
    console.log("user", state.session.id)
    console.log("listing", ownProps.listingId);
    return {
      reviews: {
        author_id: state.session.id,
        listing_id: ownProps.listingId,
        body: "",
        rating: ""
      },
      reviewFormType: "Create Review",
      currentUser: state.session.id
    };
}

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  openModal: (e) => dispatch(openModal(e)),
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(ReviewForm);
