import * as APIUtil from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
// export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
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
    dispatch(receiveListings(listings))
  ));

export const fetchListing = (listingId) => (dispatch) =>{
  return APIUtil.fetchListing(listingId).then((listing) => {

    return dispatch(receiveListing(listing))
  })};

export const createListing = (listing) => (dispatch) =>(
  APIUtil.createListing(listing).then((listing) => dispatch(receiveListing(listing))));

export const updateListing = (listingFormData, listing) => (dispatch) =>{
  // console.log("call with listingFormData")
  // console.log(listingFormData)
  // console.log(listing)
  return APIUtil.updateListing(listingFormData, listing)
  .then((listing) => {
    // console.log("return listing")
    // console.log(listing)
    return dispatch(receiveListing(listing))
  })}

export const deleteListing = (listingId) => (dispatch) =>(
  APIUtil.deleteListing(listingId).then(() => dispatch(removeListing(listingId))));
