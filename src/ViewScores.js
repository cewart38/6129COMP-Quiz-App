import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getSavedGames } from './images/getScores'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { firebase } from '../FirebaseConfig';
import { QuerySnapshot } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ViewScores = () => {
  const [games, setGames] = useState([]);
  const todoRef = firebase.firestore().collection('quizAttempt')


  useEffect(async() => {
    todoRef.onSnapshot.doc(firebase.auth().currentUser.uid).get()(
      QuerySnapshot => {
        const games = []
        QuerySnapshot.forEach((doc) => {
          const { score, date } = doc.data()
          games.push({
            id: doc.id,
            score,
            date
          })
        })
        setGames(games)
      }
    )
  })

  return(
    <SafeAreaView  style={styles.container}>
  <FlatList
  style={{height:'100%'}}
  data={games}
  numColumns={1}
  renderItem={({game}) => (
    <Pressable
    style={StyleSheet.container}
    >

    <view style={StyleSheet.innerContainer}>
      <text style={StyleSheet.score}>{game.score}</text>
      <text style={StyleSheet.date}>{game.date}</text>

    </view>
        </Pressable>
  )}
  />
   </SafeAreaView>
  )}

export default ViewScores

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    //marginTop: 100,
    backgroundColor: 'yellow',
},

textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
},

score:{
  fontWeight: '300'
},

date:{
  fontWeight: '300'
},

button: {
    marginTop: 20,
    height: 70,
    width: 250,
    backgroundColor: '#026EFD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50, 
},

appbar1: {
    fontWeight: 'bold',
    fontSize: 26,
},

welcomeName: {
  paddingTop: 0,
  justifyContent: 'center',
  fontSize: 25,
},

Welcome: {
  paddingTop: 40,
  fontWeight: 'bold',
  fontFamily: (Platform.OS === 'ios') ? 'Chalkduster' : 'Arial',
  fontSize: 15,
},

stretch2: {
  height: 200,
  width: 200,

},

containerTwo: {
  //flex: 1,
  margin: 0,
  marginTop: 5,
  padding: 10,
},

buttonStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#0cc424',
  borderWidth: 0.5,
  borderColor: '#fff',
  height: 75,
  width: 370,
  borderRadius: 5,
  margin: 5,
},

buttonImageIconStyle: {
  padding: 30,
  margin: 5,
  height: 30,
  width: 30,
  resizeMode: 'stretch',
},

buttonTextStyle: {
  color: '#fff',
  marginBottom: 4,
  marginLeft: 15,
  fontSize: 35,
  fontFamily: (Platform.OS === 'ios') ? 'Futura' : 'Arial',
},

buttonIconSeparatorStyle: {
  backgroundColor: '#fff',
  width: 2,
  height: 60,
},

logOutButton: {
  marginTop: 45,
  height: 70,
  width: 250,
  //backgroundColor: '#026EFD',
  backgroundColor: '#268001',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50, 
},

})