import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box One</Text>
      <Text style={styles.boxTwo}>Box Two</Text>
      <Text style={styles.boxThree}>Box Three</Text>
      <Text style={styles.boxFour}>Box four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10,
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 10,
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10,
    }
});