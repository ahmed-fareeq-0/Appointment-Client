import { View, StyleSheet } from 'react-native';
import React from 'react';
import AppointmentsTemplate from '../templates/AppointmentsTemplate';

const AppointmentsScreen = () => {
    return (
        <View style={styles.container} >
            <AppointmentsTemplate />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        padding: 20,
    },
})

export default AppointmentsScreen


