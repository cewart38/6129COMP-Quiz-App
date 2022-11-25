
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDT4r_7ED9ux8brX5vYHKiHlKJXwMrolhM",
    authDomain: "authtest151122.firebaseapp.com",
    projectId: "authtest151122",
    storageBucket: "authtest151122.appspot.com",
    messagingSenderId: "850455922331",
    appId: "1:850455922331:web:5c200d15822c0a7279a83e",
    measurementId: "G-PM2SKPDSXZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebase};