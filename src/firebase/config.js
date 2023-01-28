import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb7TjhI46seWGFliwbrZ-5dlKtvJIvB4o",
  authDomain: "mideadores-4298a.firebaseapp.com",
  databaseURL: "https://mideadores-4298a-default-rtdb.firebaseio.com",
  projectId: "mideadores-4298a",
  storageBucket: "mideadores-4298a.appspot.com",
  messagingSenderId: "527995253244",
  appId: "1:527995253244:web:b3ee00c3c98399ff7c0279",
  measurementId: "G-3Y265NFSNH"
};

// init firebase
firebase.initializaApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export {projectFirestore}
