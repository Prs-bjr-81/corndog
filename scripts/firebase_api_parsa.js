//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration


var firebaseConfig = {
  apiKey: "AIzaSyCMgzOWwpyVq511UCuLkjV9TRfurXdQ1pc",
  authDomain: "garlic-5d0c6.firebaseapp.com",
  projectId: "garlic-5d0c6",
  storageBucket: "garlic-5d0c6.appspot.com",
  messagingSenderId: "312445669448",
  appId: "1:312445669448:web:09e3691555f8558f63887d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to database
const db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();