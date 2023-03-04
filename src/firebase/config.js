import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDb7TjhI46seWGFliwbrZ-5dlKtvJIvB4o",
    authDomain: "mideadores-4298a.firebaseapp.com",
    databaseURL: "https://mideadores-4298a-default-rtdb.firebaseio.com",
    projectId: "mideadores-4298a",
    storageBucket: "mideadores-4298a.appspot.com",
    messagingSenderId: "527995253244",
    appId: "1:527995253244:web:b3ee00c3c98399ff7c0279",
    measurementId: "G-3Y265NFSNH"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export default app;