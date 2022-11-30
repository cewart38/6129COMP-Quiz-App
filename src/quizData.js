import { firebase } from '../FirebaseConfig'

// export const getQuestions = async() => {
//     const myArray = [];
//     const querySnapshot = await firebase.firestore().collection('questions').get();
//     querySnapshot.forEach(doc => {
//         const check = doc.data();
//         myArray.push(check);
//     });
//     console.log('MyArray', myArray)
//     return myArray;
// };


export const getQuestions = async() => {
const response = await firebase.firestore().collection("questions").get();
return response;
}