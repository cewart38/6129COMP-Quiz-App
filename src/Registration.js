import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, {useState} from 'react'
import {firebase} from '../FirebaseConfig'

const Registration = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  registerUser = async (email, password, firstName, lastName) => {
    
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'https://authtest151122.firebaseapp.com'
      })
      .then(() => {
        alert('Check your emails, verification email sent!')
      }).catch((error) => {
        alert(error.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set ({
          email,
          firstName,
          lastName,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    }).catch((error => {
      alert(error.message)
    }))
  }

  return (
    <KeyboardAvoidingView style={styles.container}> 

        <View style={styles.stretch1}>  
          <Image style={styles.stretch2} source={require('../assets/LoginImages/QuizAppLogo.png')} />
        </View> 

        <Text style={{fontWeight:'bold', fontSize:23, paddingTop: 5, paddingBottom: 10}}>
            Enter Your Information To Register
        </Text>    
        <Text style={{fontWeight:'', fontSize:16, paddingTop: 0, paddingBottom: 0}}>
            *All Input Fields Require Data*
        </Text> 
            {/*<KeyboardAvoidingView>*/}
            <View style={styles.SectionStyle}>
            <Image
                source={require('../assets/RegistrationImages/IconName.png')} 
                style={styles.ImageStyle}
            />
            <TextInput
                style={{ flex: 1 }}
                placeholder="First Name"
                onChangeText={(firstName) => setFirstName(firstName)}
                autoCapitalize=""
                autoCorrect={true}
                secureTextEntry={false}
             />             
            </View>            
            <View style={styles.SectionStyle}>
            <Image
                source={require('../assets/RegistrationImages/IconName.png')} 
                style={styles.ImageStyle}
            />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Last Name"
                onChangeText={(lastName) => setLastName(lastName)}
                autoCapitalize=""
                autoCorrect={true}
                secureTextEntry={false}
             />             
            </View>                  
            <View style={styles.SectionStyle}>
            <Image
                source={require('../assets/RegistrationImages/IconEmail.png')} 
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
                source={require('../assets/RegistrationImages/IconPassword.png')} 
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
            {/*</KeyboardAvoidingView>*/}                                        
        <TouchableOpacity
            onPress={() => registerUser(email, password, firstName, lastName)}
            style={styles.button}
        >
            <Text style={{fontWeight:'bold', fontSize:22, color:'black'}}>Register</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>

    
 )  


}

export default Registration

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
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
    backgroundColor: '#268001',
},

appbar1: {
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



})