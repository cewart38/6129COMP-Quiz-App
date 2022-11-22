import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, SnapshotViewIOS, Image } from 'react-native'
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


            <Text style={styles.Welcome}> Welcome To Your Dashboard </Text>
            <Text style={styles.welcomeName}> {name.firstName} {name.lastName} </Text>

            <Image style={styles.stretch2} source={require('../assets/DashboardImages/WavingTurtle.gif')} />

            <View style={styles.containerTwo}>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}>
                    <Image source={require("../assets/DashboardImages/ExamPaper.png")}
                    style={styles.buttonImageIconStyle} />
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Text style={styles.buttonTextStyle}>
                        Take A Quiz
                        </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerTwo}>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}>
                    <Image source={require("../assets/DashboardImages/AGrade.png")}
                    style={styles.buttonImageIconStyle} />
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Text style={styles.buttonTextStyle}>
                        View Scores
                        </Text>
                </TouchableOpacity>
            </View>                            

            <TouchableOpacity style={styles.logOutButton} onPress={() => firebase.auth().signOut()}>
                <Text style={{fontSize:22, fontWeight:'bold', color: '#fff'}}>Sign Out</Text>
            </TouchableOpacity>

            

        </SafeAreaView>

        


    )
}




export default Dashboard

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