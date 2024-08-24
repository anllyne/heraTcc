import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB4xNuqtch67Rgu3i00lO2ee6SLXANCwlc",
    authDomain: "hera-tcc.firebaseapp.com",
    projectId: "hera-tcc",
    storageBucket: "hera-tcc.appspot.com",
    messagingSenderId: "227935988480",
    appId: "1:227935988480:web:4fe7ec3228b695a4dde1e5",
    measurementId: "G-6RKSCEHCBS"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
