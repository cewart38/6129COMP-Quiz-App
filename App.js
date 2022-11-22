import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from 'react';
import { firebase } from './FirebaseConfig';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Registration from './src/Registration';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Header from './components/Header';
import AdminDashboard from "./src/AdminDashboard";
import AddObject from "./src/AddObject";
import ViewStudentScores from "./src/ViewStudentScores";


const Stack = createStackNavigator();

  function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

/*
  firebase.auth().currentUser.getIdTokenResult()
  .then((idTokenResult) => {
    if(!!idTokenResult.claims.admin) {
      // show admin panel
    } else {
      // show regular ui panel
    }
  })
*/  

  const checkIfUserOrAdmin = firebase.firestore().collection('users2')

/*
  const handleSignIn = () => {
    if (user) {
      checkIfUserOrAdmin.where("role", "==", (user?.role === "student"))
      navigation.navigate('dashboard')
    } else {
      navigation.navigate('AdminDashboard')
    }
    
  }
*/  
  

  if (!user) {
    
    return (

        <Stack.Navigator>
        <Stack.Screen name="login" 
        component={Login}
        options= {{
          headerTitle: () => <Header name = "Login" />
        }}
        /> 
        <Stack.Screen name="registration" 
        component={Registration}
        options= {{
          headerTitle: () => <Header name = "Registration" />
        }}
        />                     
      </Stack.Navigator>
      
/*
<Stack.Navigator>
<Stack.Screen name="admindashboard" 
component={AdminDashboard}
options= {{
  headerTitle: () => <Header name = "Admin Dashboard" />
}}
/> 
<Stack.Screen name="addobject" 
component={AddObject}
options= {{
  headerTitle: () => <Header name = "Add Object" />
}}
/> 
</Stack.Navigator>
*/
    );
  }


  return (

    <Stack.Navigator>
        <Stack.Screen name="dashboard" 
        component={Dashboard}
        options= {{
          headerTitle: () => <Header name = "Dashboard" />
        }}
        /> 
      <Stack.Screen name="admindashboard" 
      component={AdminDashboard}
      options= {{
      headerTitle: () => <Header name = "Admin Dashboard" />
        }}
/>            
    </Stack.Navigator>
    

    //{handleSignIn}

  )




}



export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
