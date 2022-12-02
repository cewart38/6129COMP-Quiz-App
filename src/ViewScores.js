import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
  } from "firebase/firestore";
import { firebase } from '../FirebaseConfig';
import { QuerySnapshot } from 'firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getSavedGames } from './getScores';


const ViewScores = () => {
  
  const [games, setGames] = useState([]);
  //const [user, loading, error] = useAuthState(auth);
  const app = getApp();
  const auth = getAuth(app);
  const uid = auth.currentUser.uid;

  useEffect(() => {
      let gamesFromDb = [];
      getSavedGames(uid).then((res) => {
        res.forEach((doc) => {
          gamesFromDb.push(doc.data());
        });
        setGames(gamesFromDb);
      });
    }
  , [])


  return (
    <View style={styles.container}>
    <FlatList
      data={games}
      renderItem={({ item }) => (
        <View style={{ height: 100, flex: 1, alignItems: "stretch", justifyContent: 'center', }}>
          <View style={styles.innerContainer}>
          <Text style={styles.scoreText}>Score: {item.score}/20</Text>
          <Text style={styles.dateText}>{item.date}</Text>
          </View>
        </View>
      )}
 
    />
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    //marginTop: 100,
    backgroundColor: 'yellow',
},

  innerContainer: {
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#268001',
    paddingTop: 10,
  },

  scoreText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

  dateText: {
    paddingTop: 2,
    color: 'white'
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

export default ViewScores