import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAqOIKeazXoABj9tzXMNaNczLaS5BJ6U6g",
  authDomain: "leader-board-d69ee.firebaseapp.com",
  projectId: "leader-board-d69ee",
  storageBucket: "leader-board-d69ee.appspot.com",
  messagingSenderId: "67944596909",
  appId: "1:67944596909:web:842f4290d58369a2ba8d24",
  measurementId: "G-9DBWEQQ69Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db };
