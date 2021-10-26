
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as ReservationAPIUtil from "./util/reservation_api_util";
import * as APIUtil from "./util/listing_api_util";



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  

  window.fetchReservations = ReservationAPIUtil.fetchReservations;
  window.fetchReservation = ReservationAPIUtil.fetchReservation;
  window.updateReservation = ReservationAPIUtil.updateReservation;
  window.createReservation = ReservationAPIUtil.createReservation;
  window.deleteReservation = ReservationAPIUtil.deleteReservation;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  

  // window.createListing = ListingAction.createListing;
  // window.fetchListing = APIUtil.fetchListing;
  // window.fetchListings = APIUtil.fetchListings;
  // window.updateListing = ListingAction.updateListing;
  // window.deleteListing = ListingAction.deleteListing;

  ReactDOM.render(<Root store={store} />, root);

}
);

