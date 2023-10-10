import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterTemplate from '../templates/RegisterTemplate';

const RegisterScreen = () => {

  return (
    <View style={styles.container}>
      <RegisterTemplate />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
})

export default RegisterScreen
