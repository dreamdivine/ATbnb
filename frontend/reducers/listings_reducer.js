
import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from "../actions/listing_actions";

const listingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return { ...oldState, ...action.listings };
    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing;
      return nextState;
    case REMOVE_LISTING:
      delete nextState[action.listingId];
      return nextState;

    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = Object.assign({}, oldState);
      // newState[review.listing_id].reviewIds.push(review.id);
      newState[review.listing_id].average_rating = average_rating;
      return newState;

    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;

    default:
      return oldState;
  }
};

export default listingsReducer;
