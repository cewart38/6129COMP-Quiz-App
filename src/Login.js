import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../FirebaseConfig'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image  } from 'react-native'
import Registration from './Registration'
import { AiTwoToneMail } from "react-icons/ai";
import TypeWriter from 'react-native-typewriter';


const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    loginUser = async(email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
            <View style={styles.container}>

            <View style={styles.stretch1}>  
               <Image style={styles.stretch2} source={require('../assets/LoginImages/QuizAppLogo.png')} />
            </View> 

            <TypeWriter style={styles.typewriter} typing={1}>6129COMP</TypeWriter>
            <TypeWriter style={styles.typewriter} typing={1}>Mobile Quiz Application</TypeWriter>

{/*            <View style={{marginTop:20}}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    icon="mail"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />                
            </View>
*/}

            <View style={styles.SectionStyle}>
            <Image
                source={require('../assets/LoginImages/IconEmail.png')} 
                style={styles.ImageStyle}
            />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={false}
             />             
            </View>

            <View style={styles.SectionStyle}>
            <Image
                source={require('../assets/LoginImages/IconPassword.png')} 
                style={styles.ImageStyle}
            />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
             />             
            </View>            

            <TouchableOpacity
                onPress={() => loginUser(email, password)}
                style = {styles.button}
            >
                <Text style={{fontWeight:'bold', fontSize:22}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('registration')}
                style = {{marginTop:20}}
            >
                <Text style={{fontWeight:'bold', fontSize:16}}>Click Here To Register</Text>
            </TouchableOpacity>
        </View>
    )    

}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: 'yellow'
    },

    stretch1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    stretch2: {
        width: 320,
        height: 200,
        margin: 10,
        resizeMode: '',
    },

    typewriter: {
        fontSize: 20,
        fontFamily: 'Courier',
    },

    textInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 400,
        fontSize: 20,
        //borderBottomWidth: 1,
       // borderBottomColor: '#000',
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: "#1df26b",
    },

    button: {
        marginTop: 20,
        height: 70,
        width: 250,
        //backgroundColor: '#026EFD',
        backgroundColor: '#268001',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50, 
    },

    appText: {
        fontWeight: 'bold',
        fontSize: 26,
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#000',
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

})