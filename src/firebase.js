
import firebase  from "firebase";
import firebaseApp from "firebase";

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyArB69Xo-ncFdbE0v4ZRl_4CIXcdKtnutE",
    authDomain: "messenger-1340f.firebaseapp.com",
    databaseURL: "https://messenger-1340f.firebaseio.com",
    projectId: "messenger-1340f",
    storageBucket: "messenger-1340f.appspot.com",
    messagingSenderId: "864269550588",
    appId: "1:864269550588:web:791789468789c1a3ff6879",
    measurementId: "G-GDC227L4LT"
})

const db = firebaseApp.firestore();

export default db; 