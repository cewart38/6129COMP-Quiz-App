import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Keyboard, Button, Image, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from 'react'
import {firebase} from '../FirebaseConfig'

// import AddObject from './AddObject'
import ViewStudentScores from './ViewStudentScores'

const AdminDashboard = () => {

    const navigation = useNavigation()
    
    // const to handle name of signed in user
    const [name, setName] = useState('')

    // const to handle visibility of form
    const [showForm, setShowForm] = useState(false);

    const showTheForm = () => {
        setShowForm(!showForm);
    }


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
    


/*
    const todoRef = firebase.firestore().collection('addDataTest');
    const [addData, setAddData] = useState('');

    // Add a new field
    const addField = () => {
        // check if we have new field data
        if (addData && addData.length > 0) {
            // get the timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                name: addData
            };
            todoRef
                .add(data)
                .then(() => {
                    // release the new field state
                    setAddData('');
                    // release Keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    // show an alert in case of error
                    alert(error);
                })
        }
    }
*/    



    return (

    
            
        

        <SafeAreaView style={styles.container}>
{/*            <Text typing={1} style={styles.text}>
                Welcome, {name.firstName} {name.lastName}
    </Text> */}

            <Text style={styles.Welcome}> Welcome To The Admin Dashboard </Text>
            <Text style={styles.welcomeName}> {name.firstName} {name.lastName} </Text>

            <View style={styles.containerTwo}>
                {/* <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('addobject')}
                >
                    <Image source={require("../assets/AdminDashboardImages/PlusIcon.png")}
                    style={styles.buttonImageIconStyle} />
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Text style={styles.buttonTextStyle}>
                        Add Object
                        </Text>
                </TouchableOpacity> */}
            </View>    

            <View style={styles.containerTwo}>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('viewstudentscores')}
                >
                    <Image source={require("../assets/AdminDashboardImages/StudentIcon.png")}
                    style={styles.buttonImageIconStyle} />
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Text style={styles.buttonTextStyle}>
                        View User Scores
                        </Text>
                </TouchableOpacity>
            </View>    

            <TouchableOpacity style={styles.logOutButton} onPress={() => firebase.auth().signOut()}>
                <Text style={{fontSize:22, fontWeight:'bold', color: '#fff'}}>Sign Out</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
    

        


    )
}



export default AdminDashboard

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        //marginTop: 100,
        backgroundColor: 'yellow',
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
        marginTop: 150,
        height: 70,
        width: 250,
        //backgroundColor: '#026EFD',
        backgroundColor: '#268001',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50, 
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


})