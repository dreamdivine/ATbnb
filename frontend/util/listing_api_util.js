export const fetchListings = () =>(
  $.ajax({
    method: "GET",
    url: "api/listings",
  }));

export const fetchListing = (listingId) =>(
  $.ajax({
    method: "GET",
    url: `api/listings/${listingId}`,
  }));

// export const createReview = (review) =>
//   $.ajax({
//     method: "POST",
//     url: "api/reviews",
//     data: { review },
//   });

export const createListing = (listing) =>{
  // console.log(listing)
//   let payload = {bathroom: "12",
// bedroom: "3",
// description: "asdfsd",
// guests: "3",
// latitude: "1234",
// location: "adsjf;lsdfj",
// longitude: "121",
// owner_Id: 1,
// picture_url: "jf;asdfjlsdfkj",
// price: "1234",
// title: "sadfds"}

  return (
  $.ajax({
    method: "POST",
    url: "/api/listings",
    data: {listing},
    // contentType: false,
    // processData: false
  })
  // .then((response) => console.log(response.message),
  // (response) => console.log(response.responseJSON)
  )};

export const updateListing = (listing) =>(
  $.ajax({
    method: "PATCH",
    url: `/api/listings/${listing.id}`,
    data: {listing}
  }));

export const deleteListing = (listingId) =>(
  $.ajax({
    method: "DELETE",
    url: `api/listings/${listingId}`,
  }));