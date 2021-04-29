import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBiTYcLwNly-FwacGxY7h_dNFFA0QLjeoY",
    authDomain: "auth-project07.firebaseapp.com",
    projectId: "auth-project07",
    storageBucket: "auth-project07.appspot.com",
    messagingSenderId: "51204532871",
    appId: "1:51204532871:web:bf06980729d56269a6e622"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;