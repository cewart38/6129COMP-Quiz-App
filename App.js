import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect, StackNavigator} from 'react';
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

 // DashboardPage: {screen: Dashboard,},
 // AdminDashboard: {screen: AdminDashboard,},


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


//  const checkIfUserOrAdmin = firebase.firestore().collection('users2')

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
                <Stack.Screen name="addObject" 
        component={AddObject}
        options= {{
          headerTitle: () => <Header name = "Add Object" />
        }}
        />    
                <Stack.Screen name="scores" 
        component={ViewStudentScores}
        options= {{
          headerTitle: () => <Header name = "Scores" />
        }}
        />                                                   
    </Stack.Navigator>



/*<Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
  <Stack.Screen name="Register" component={Registration} options={{headerShown: false}}/>
  <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
  <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{headerShown: false}}/>
</Stack.Navigator>
*/

  ) 
  



}



export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
