import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40 }}>App</Text>
      <Entypo name="home" size={50} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})