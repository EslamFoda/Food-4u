import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDSgSH9v84zt0MxbNJD9BWja6qzLmNArVg",
    authDomain: "food-4u.firebaseapp.com",
    projectId: "food-4u",
    storageBucket: "food-4u.appspot.com",
    messagingSenderId: "551354863426",
    appId: "1:551354863426:web:29e29f554d8680013382db"
  };


  // init firebase

  firebase.initializeApp(firebaseConfig)

  // init firebase service

  const projectFirestore = firebase.firestore();

  export {projectFirestore}