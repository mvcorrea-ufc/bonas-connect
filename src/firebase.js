import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmME1vpAM6AHCLO2_ppiHvT8_eSTNzUL4",
  authDomain: "bonas-connect.firebaseapp.com",
  projectId: "bonas-connect",
  storageBucket: "bonas-connect.appspot.com",
  messagingSenderId: "606915006248",
  appId: "1:606915006248:web:5a96ee4d2a31d8dc240a1d"
};

firebase.initializeApp(firebaseConfig);
export default firebase;