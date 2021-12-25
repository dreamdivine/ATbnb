import * as APIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS"
export const REMOVE_LISTING = "REMOVE_LISTING";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = (listing, reviews, authors) => ({
  type: RECEIVE_LISTING,
  listing,
  reviews,
  authors
});

export const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId,
});

export const receiveListingErrors = (errors) => {
  return{ type: RECEIVE_LISTING_ERRORS,
  errors,
}};


export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});


export const fetchListings = () => (dispatch) =>(
  APIUtil.fetchListings().then((listings) =>
    dispatch(receiveListings(listings))));

export const fetchListing = (listingId) => (dispatch) =>(
  APIUtil.fetchListing(listingId).then((listing) => 
  dispatch(receiveListing(listing))));

export const createListing = (listing) => (dispatch) =>
  APIUtil.createListing(listing).then(
    (listing) => dispatch(receiveListing(listing)),
    (errors) => dispatch(receiveListingErrors(errors.responseJSON))
  );

export const updateListing = (listingFormData, listing) => (dispatch) =>
  APIUtil.updateListing(listingFormData, listing).then(
    (listing) => dispatch(receiveListing(listing)),
    (errors) => dispatch(receiveListingErrors(errors.responseJSON))
  );

export const deleteListing = (listingId) => (dispatch) =>
  (APIUtil.deleteListing(listingId)
  .then(() => dispatch(removeListing(listingId))));

  export const createReview = (review) => (dispatch) =>
    APIUtil.createReview(review).then((review) =>
      dispatch(receiveReview(review))
    );

  export const updateReview = (reviewFormData, review) => (dispatch) =>
    APIUtil.updateReview(reviewFormData, review).then((review) =>
      dispatch(receiveReview(review))
    );

  export const deleteReview = (reviewId) => (dispatch) =>
    APIUtil.deleteReview(reviewId).then(() => dispatch(removeReview(reviewId)));

  