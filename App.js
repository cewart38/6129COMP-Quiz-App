import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect, StackNavigator} from 'react';
import { firebase } from './FirebaseConfig';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Registration from './src/Registration';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Quiz from "./src/Quiz";
import Test from "./src/Test";
import Header from './components/Header';
import AdminDashboard from "./src/AdminDashboard";
// import AddObject from "./src/AddObject";
import ViewStudentScores from "./src/ViewStudentScores";
import ViewScores from "./src/ViewScores";

const Stack = createStackNavigator();


  function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  
  useEffect(() => {
    // check if user is logged in or not and show relative screens based on whether a user is signed in
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

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
        <Stack.Screen name="quiz" 
        component={Quiz}
        options= {{
          headerTitle: () => <Header name = "Quiz" />
        }}
        /> 
        {/* <Stack.Screen name="addobject" 
        component={AddObject}
        options= {{
          headerTitle: () => <Header name = "Add Object" />
        }}
         />  */}
        <Stack.Screen name="viewstudentscores" 
        component={ViewStudentScores}
        options= {{
          headerTitle: () => <Header name = "View Student Scores" />
        }}
        /> 
    <Stack.Screen name="viewScores"
    component={ViewScores}
    options= {{
      headerTitle: () => <Header name = "viewScores" />
    }}
        />
    </Stack.Navigator>
    
  ) 


  

}







export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

