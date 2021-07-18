import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyC1VZXS4rCnFo0gb4QMxpkxRPwzk0H4Z_E",
    authDomain: "playgroundcis.firebaseapp.com",
    databaseURL: "https://playgroundcis-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "playgroundcis"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();
  export const fs = firebase.firestore();