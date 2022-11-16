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
