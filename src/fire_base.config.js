import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.FIREBASE_KEY}`,
  authDomain: "leader-board-d69ee.firebaseapp.com",
  projectId: "leader-board-d69ee",
  storageBucket: "leader-board-d69ee.appspot.com",
  messagingSenderId: "67944596909",
  appId: `${process.env.REACT_APP_ID}`,
  measurementId: "G-9DBWEQQ69Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db };
