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

export const createReview = (reviewForm) =>
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: { reviewForm },
  });

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

  export const updateReview = (reviewForm, review) =>
    $.ajax({
      method: "PATCH",
      url: `api/reviews/${review.id}`,
      data: { reviewForm },
    });

export const deleteListing = (listingId) =>(
  $.ajax({
    method: "DELETE",
    url: `api/listings/${listingId}`,
  }));

  export const deleteReview = (reviewId) =>
    $.ajax({
      method: "DELETE",
      url: `api/reviews/${reviewId}`,
    });
  