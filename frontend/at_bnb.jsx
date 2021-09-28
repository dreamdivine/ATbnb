
// import React from "react";
// import ReactDOM from "react-dom";
// import Root from "./components/root";
// import configureStore from "./store/store";

// document.addEventListener("DOMContentLoaded", () => {
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser },
//       },
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }
//   const root = document.getElementById("root");
//   ReactDOM.render(<Root store={store} />, root);
// });


import React from "react";
import ReactDOM from "react-dom";
import { login, logout, signup } from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // window.login = login;
  // window.logout = logout;
  // // window.signup = signup

  // window.store = store;
  // window.dispatch = store.dispatch;
  // window.getState = store.dispatch;
  

  ReactDOM.render(<Root store={store} />, root);
});