
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from "./util/listing_api_util";
import * as ListingAction from "./actions/listing_actions";
import listingsReducer from "./reducers/listings_reducer"


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
  

  // window.fetchListings = APIUtil.fetchListings;
  // window.fetchListing = APIUtil.fetchListing;
  // window.updateListing = APIUtil.updateListing;
  // window.createListing = APIUtil.createListing;
  // window.deleteListing = APIUtil.deleteListing;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  

  window.createListing = ListingAction.createListing;
  window.fetchListing = ListingAction.fetchListing;
  window.fetchListings = ListingAction.fetchListings;
  window.updateListing = ListingAction.updateListing;
  window.deleteListing = ListingAction.deleteListing;

  ReactDOM.render(<Root store={store} />, root);

}
);

