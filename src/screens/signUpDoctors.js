import React from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterDoctorsTemplate from '../templates/RegisterDoctorsTemplate';

const RegisterScreen = () => {

    return (
        <View style={styles.container}>
            <RegisterDoctorsTemplate />
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
