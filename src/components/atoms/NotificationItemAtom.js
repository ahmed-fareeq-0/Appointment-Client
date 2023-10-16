import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextAtom from './textAtom'

const NotificationItemAtom = ({ message }) => {
    return (
        <View style={styles.notificationItem}>
            <TextAtom style={styles.notificationText}>{message}</TextAtom>
        </View>
    );
};

const styles = StyleSheet.create({
    notificationItem: {
        padding: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        backgroundColor: '#ffffff',
    },
    notificationText: {
        fontSize: 18,
        color: '#333',
    },
});

export default NotificationItemAtom;
