/* AUTHENTICATION INTERFACE (HELPERS) FILE */
import firebase from './config.js';
import * as firebaseui from 'firebaseui';

// // Sign Up
// export const joinWithEmail = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// // Sign in with Email
// export const authWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);

// // Sign in with Google
// export const authWithEmail = (email, password) => auth.signInWithEmailAndPassword(email, password);

// // Sign Out
// export const doSignOut = () => auth.signOut();

// =========================

var uiConfig = {
  signInSuccessUrl: '/dashboard',
  signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // tosUrl: '<your-tos-url>'
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());

export { ui, uiConfig };