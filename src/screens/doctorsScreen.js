import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MainHeader from '../components/mainHeader';
import DoctorsListComponent from '../components/doctorsListComponent';

const DoctorsScreen = () => {
  return (
    <View style={styles.container} >
      <MainHeader />
      <DoctorsListComponent />
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