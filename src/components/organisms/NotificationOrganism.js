import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import NotificationListMolecule from '../molecules/NotificationListMolecule';
import TextAtom from '../atoms/textAtom';

const NotificationScreenOrganism = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const dummyNotifications = [
            { id: 1, message: 'تذكير بالموعد الساعة 6:30 ظهراً' },
            { id: 2, message: 'تذكير بالموعد الساعة 2:30 ظهراً' },
        ];

        setNotifications(dummyNotifications);
    }, []);

    return (
        <View style={styles.container}>
            <TextAtom style={styles.header}>الاشعارات</TextAtom>
            <NotificationListMolecule notifications={notifications} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fbfbfb',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007BFF',
    },
});

export default NotificationScreenOrganism;
