import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, SnapshotViewIOS } from 'react-native'
import React, {useState, useEffect} from 'react'
import {firebase} from '../FirebaseConfig'
//import TypeWriter from 'react-native-typewriter';

const Dashboard = () => {

    const [name, setName] = useState('')

    useEffect(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists) {
                setName(snapshot.data())
            } else {
                console.log('User does not exist')
            }
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
{/*            <Text typing={1} style={styles.text}>
                Welcome, {name.firstName} {name.lastName}
    </Text> */}
            <Text>Welcome {name.firstName} {name.lastName} </Text>
            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                <Text style={{fontSize:22, fontWeight:'bold'}}>Sign Out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}




export default Dashboard

const styles = StyleSheet.create({

        container: {
          flex: 1,
          alignItems: 'center',
          marginTop: 100,
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
      
})