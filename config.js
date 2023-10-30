import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB6QvjNTplKwSBiSD9jPVCSnTIrT1x3tpc",
    authDomain: "library-app-b1ec0.firebaseapp.com",
    projectId: "library-app-b1ec0",
    storageBucket: "library-app-b1ec0.appspot.com",
    messagingSenderId: "659077822663",
    appId: "1:659077822663:web:7211a603840ff178a0e6e2"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
