import React from "react";
import { Link } from "react-router";

import ReviewListItemContainer from "./review_list_item_container";

const ReviewList = (reviews) =>
  reviews.map((review) => (
    <ReviewListItemContainer review={review} key={review.id} />
  ));
export default ReviewList;