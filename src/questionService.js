import { useEffect, useState } from 'react';
import { firebase } from '../FirebaseConfig';
import { collection, getDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

// export async function getQuestions() {
//   const app = getApp();
//   const db = getFirestore(app);

//   const q = query(
//     collection(db, "questions"),
//   );
//   return await getDocs(q);
// }





export function getObjects () {
    const myArray = [];
    firebase.firestore().collection('objectList').get().then(getDocuments => {
        getDocuments.forEach(doc => { 
          const check = doc.data();
            console.log(check);
            myArray.push(check);
    })});
    return myArray;
}


// const transformToArray =  (objects) => Object.keys(objects).map((key) => ({
//     id: key,
//     ...objects[key]
// }));

const objects = getObjects();
console.log(objects);

//const objects = transformToArray(snapshot.val());
//const cachedObjects = objects;

export const takeRandomObjectFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  export const rightAnswer = takeRandomObjectFromArray(objects);

  export const createAnswersArray = (array, rightAnswer) => {
    // Logic to avoid repeated words
    let answer_2 = takeRandomObjectFromArray(array);
    while (answer_2 === rightAnswer) {
      answer_2 = takeRandomObjectFromArray(array);
    }
    let answer_3 = takeRandomObjectFromArray(array);
    while (answer_3 === answer_2 || answer_3 === rightAnswer) {
      answer_3 = takeRandomObjectFromArray(array);
    }
    let answer_4 = takeRandomObjectFromArray(array);
    while (
      answer_4 === answer_3 ||
      answer_4 === answer_2 ||
      answer_4 === rightAnswer
    ) {
      answer_4 = takeRandomObjectFromArray(array);
    }
  
    // Finally creating answerArray
    const answersArray = [
      { answer: rightAnswer },
      { answer: answer_2 },
      { answer: answer_3 },
      { answer: answer_4 }
    ];
  
    return answersArray;
  };

  export const arrayCreator = rightAnswer => {
    const optionsArray = createAnswersArray(objects, rightAnswer);
    return optionsArray;
  }

  export const shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  
  export const finalAnswersArrayGenerator = () => {

    const answersArray = arrayCreator();
    // Shuffling this generated array
    shuffleArray(answersArray);
    // Than setting it to state
    return answersArray;
  };

const finalOptionsArray = finalAnswersArrayGenerator();

export default data = [
    {
        image: rightAnswer[0].img_dir,
        options: finalOptionsArray,
        correct_option: rightAnswer[0].name
    }
]
