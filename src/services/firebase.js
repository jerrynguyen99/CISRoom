import firebase from "firebase";

const config = {
    apiKey: "AIzaSyC1VZXS4rCnFo0gb4QMxpkxRPwzk0H4Z_E",
    authDomain: "playgroundcis.firebaseapp.com",
    databaseURL: "https://playgroundcis-default-rtdb.asia-southeast1.firebasedatabase.app/"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();
  