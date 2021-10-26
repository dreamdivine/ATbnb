import * as APIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
// export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS"
export const REMOVE_LISTING = "REMOVE_LISTING";

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing
});


export const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId,
});

export const receiveListingErrors = (errors) => {
  return{ type: RECEIVE_LISTING_ERRORS,
  errors,
}};

// export const receiveReview = ({ review, average_rating, author }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author,
// });

// export const createReview = (review) => (dispatch) =>
//   APIUtil.createReview(review).then((review) =>
//     dispatch(receiveReview(review))
//   );

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

  