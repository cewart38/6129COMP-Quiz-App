import {
    collection,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    where,
  } from "firebase/firestore";
  import { getApp } from "firebase/app";
  
  export async function getSavedGames(uid) {
    const app = getApp();
    const db = getFirestore(app);
  
    const q = query(
      collection(db, "quizAttempt"),
      where("userId", "==", uid)
    );
    return await getDocs(q);
  }

  