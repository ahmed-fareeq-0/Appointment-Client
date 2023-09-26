import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DoctorsList from '../components/doctorsListComponent'
import SearchComponent from '../components/searchComponent'
import MainHeader from '../components/mainHeader'

const DoctorsScreen = () => {
  return (
    <View style={styles.container} >
      <MainHeader />
      <DoctorsList />
    </View>
  )
}

export default DoctorsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',

  },
})