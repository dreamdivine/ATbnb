import { connect } from "react-redux";

import { createReview, deleteReview, updateReview} from "../actions/listing_actions";
import ReviewForm from "./review_form";

const mSTP = (state, ownProps) => {
    return {
      reviews: {
        author_id: state.session.id,
        listing_id: ownProps.listingId,
        body: "",
        rating: 5,
      },
      reviewFormType: "Create Review",
      currentUser: state.session.id,
      authorname: state.entities.users[state.session.id].username
    };
}

const mDTP = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  openModal: (e) => dispatch(openModal(e)),
  login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(ReviewForm);
