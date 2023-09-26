import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainHeader from '../components/mainHeader'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <Text>Settings Screen</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
});