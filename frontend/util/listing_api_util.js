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

export const createListing = (listingForm) =>{
  
  return (
      $.ajax({
        url: 'api/listings',
        method: 'POST',
        data: listingForm,
        contentType: false,
        processData: false
  }))};

export const updateListing = (listingForm, listing) =>(
  $.ajax({
    method: "PATCH",
    url: `/api/listings/${listing.id}`,
    data: listingForm,
    contentType: false,
    processData: false
  }));

export const deleteListing = (listingId) =>(
  $.ajax({
    method: "DELETE",
    url: `api/listings/${listingId}`,
  }));