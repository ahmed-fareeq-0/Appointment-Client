import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileTemplate from '../templates/ProfileTemplate';

const ProfileScreen = () => {

  return (
    <View style={styles.container}>
      <ProfileTemplate />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
})

export default ProfileScreen

