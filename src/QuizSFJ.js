import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {firebase} from '../FirebaseConfig'



const QuizSFJ = () => {

    question: string;
    answers: string[answer];
    userAnswer: any;

    const [loading, setLoading] = useState(false);  
    const [questions, setQuestions] = useState([]); 
    const [number, setNumber] = useState(0);    
    const [userAnswers, setUserAnswers] = useState([]);    



const fetchQuizQuestions = async () => {
    firebase.collection("objectList").get().then((querySnapshot) => {
        querySnapshot.forEach(element => {
            var data = element.data();
            setInfo(arr => [...arr, data]);
            //console.log(data);
            });
     })
    }



}




/* export const fetchQuizQuestions = async ( name, img_dir ) => {
    (() => {
        await firebase.firestore().collection('objectList')
    })
    await firebase.firestore().collection('objectList')

} */


export default QuizSFJ

const styles = StyleSheet.create({})