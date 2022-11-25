import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Keyboard, Button, Image, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from 'react'
import {firebase} from '../FirebaseConfig'

import AddObject from './AddObject'
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

/*
    useEffect(() => {
        firebase.firestore().collection('admin')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists) {
                setName(snapshot.data())
            } else {
                console.log('User does not exist')
            }
        })
    }, [])
*/    


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



    return (

    
            
        

        <SafeAreaView style={styles.container}>
{/*            <Text typing={1} style={styles.text}>
                Welcome, {name.firstName} {name.lastName}
    </Text> */}
            <Text>Welcome {name.firstName}{name.lastName} to the admin dashboard </Text>
            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                <Text style={{fontSize:22, fontWeight:'bold'}}>Sign Out</Text>
            </TouchableOpacity>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder = 'Add name of Object'
                    placeholderTextColor='#aaaaa'
                    onChangeText= {(heading) => setAddData(heading)}
                    value={addData}
                    multiline={true}
                    underlineColorAndroid='transparent'
                    autoCorrect={true}
                    autoCapitalize='none'
                />
                
                <TouchableOpacity style={styles.button} onPress={addField}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerTwo}>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('addobject')}
                >
                    <Image source={require("../assets/DashboardImages/AGrade.png")}
                    style={styles.buttonImageIconStyle} />
                        <View style={styles.buttonIconSeparatorStyle} />
                        <Text style={styles.buttonTextStyle}>
                        Add Object
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
                        View User Scores
                        </Text>
                </TouchableOpacity>
            </View>    

            
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


})