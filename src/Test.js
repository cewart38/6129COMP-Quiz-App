import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated } from 'react-native'
import { COLORS, SIZES } from './constants';
import { getQuestions } from './quizData';
import { firebase } from '../FirebaseConfig'
import data from './quizData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Quiz = () => {

    const [allQuestions, setAllQuestions] = useState({})
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    // const getAllQuestions = async () => {
    //     const questions = await getQuestions();
    //     setAllQuestions([questions]);
    //   }
    // useEffect(() => {
    //     getAllQuestions();
    //   }, []); 

    //   console.log('All Questions MOF', allQuestions)


    const getAllQuestions = async () => {
    const questions = await getQuestions();

    // Transform and shuffle options
    let tempQuestions = [];
    await questions.docs.forEach(async res => {
      let question = res.data();
      await tempQuestions.push(question);
      console.log('tempQuestions', tempQuestions);
    });

    setAllQuestions([tempQuestions]);
  };

  useEffect(() => {
    getAllQuestions();
  }, []);


  console.log('allQuestions', allQuestions);

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (

            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.black, fontSize: 18, opacity: 0.6}}>/ {allQuestions.length}</Text>
                </View>

                {/* Image */}
                <Image style={styles.logo} source={allQuestions[currentQuestionIndex]?.image} />
            </View>
        )
    }

    return  allQuestions.map ((questions) => {
    return (
       <SafeAreaView style={{
           flex: 1
       }}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={{
               flex: 1,
               paddingVertical: 40,
               paddingHorizontal: 16,
               backgroundColor: COLORS.background,
               position:'relative'
           }}>

               {/* Question */}
               <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{color: COLORS.black, fontSize: 20, opacity: 0.6, marginRight: 2}}>{currentQuestionIndex+1}</Text>
                    <Text style={{color: COLORS.black, fontSize: 18, opacity: 0.6}}>/ {questions.length}</Text>
                </View>

                {/* Image */}
                <Image style={styles.logo} source={questions[currentQuestionIndex]?.image} />
            </View>
               </View></SafeAreaView>

    )})}


    const styles= StyleSheet.create({
        logo: {
            width: 100,
            height: 100,
        }
    
    })

export default Quiz