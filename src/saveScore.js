import {
    addDoc,
    collection,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
  import { getApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import {firebase} from '../FirebaseConfig'



  export async function saveGame(game) {
    const app = getApp();
    const db = getFirestore(app);
    const auth = getAuth(app);
    const user = auth.currentUser;
    const uid = user.uid;
    const email = user.email;
  
    game.userId = uid;
    game.email = email;

  
    await addDoc(collection(db, "quizAttempt"), game);
  }
  