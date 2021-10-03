import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // we can use this without dotenv
    apiKey: "AIzaSyBEUBOny7krWWZX50yfHPphSdfpnsSdY1c",
    authDomain: "whatsapp-7d376.firebaseapp.com",
    projectId: "whatsapp-7d376",
    storageBucket: "whatsapp-7d376.appspot.com",
    messagingSenderId: "757616835837",
    appId: "1:757616835837:web:4a3421a7d45a4f311e9294",
    measurementId: "G-68FP7D9XXF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;