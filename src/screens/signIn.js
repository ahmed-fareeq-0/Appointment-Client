import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginTemplate from '../templates/loginTemplate';

const LoginScreen = () => {

  return (
    <View style={styles.container}>
      <LoginTemplate />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default LoginScreen
