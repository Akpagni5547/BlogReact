import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyA5ryTk1dUkNa32AbG4anFVRqODhg8sUsU",
    authDomain: "blogreact-7ab82.firebaseapp.com",
    projectId: "blogreact-7ab82",
    storageBucket: "blogreact-7ab82.appspot.com",
    messagingSenderId: "876393331387",
    appId: "1:876393331387:web:ab14b6e7fe73ac9075c79e"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;