import { StyleSheet, Text, View } from 'react-native'
import React from 'react'       

// this is for the stack navigation
// pass in the props component for the name of the stack we are currently on

const Header = (props) => {
  return (
    <View style={{marginLeft:15}}>
      <Text style={{fontWeight:'bold', fontSize:28}}>{props.name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({


})