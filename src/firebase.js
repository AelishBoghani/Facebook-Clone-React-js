import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAEm1w1VHz1muyswWARq1rq0uxMtkOp_s",
    authDomain: "fb-clone-5a9f5.firebaseapp.com",
    projectId: "fb-clone-5a9f5",
    storageBucket: "fb-clone-5a9f5.appspot.com",
    messagingSenderId: "899333670409",
    appId: "1:899333670409:web:f009e372881145ff961ad8",
    measurementId: "G-LJ518MDRDV"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
