import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCzR3LtOAcSMmUU3Mb0-WtH8lo44bsFXDc",
  authDomain: "react-shop-a4d87.firebaseapp.com",
  databaseURL: "https://react-shop-a4d87.firebaseio.com",
  projectId: "react-shop-a4d87",
  storageBucket: "react-shop-a4d87.appspot.com",
  messagingSenderId: "920060005612",
  appId: "1:920060005612:web:6dc87ca110f77709d329c9",
  measurementId: "G-35VRBBR4BM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
