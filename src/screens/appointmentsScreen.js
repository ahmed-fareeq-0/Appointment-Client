import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';

const AppointmentsScreen = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchedAppointments = getAppointments();
        setAppointments(fetchedAppointments);
    }, []);

    const getAppointments = () => {
        return [
            { id: 1, time: '2023-09-28 10:00 AM' },
            { id: 2, time: '2023-09-29 11:00 AM' },
        ];
    };

    const renderAppointmentItem = ({ item }) => (
        <View style={styles.appointmentItem}>
            <Ionicons name="calendar" size={24} color={colors.blue2} style={styles.icon} />
            <View style={styles.appointmentDetails}>
                <Text style={styles.appointmentId}>Appointment ID: {item.id}</Text>
                <Text style={styles.appointmentTime}>Time: {item.time}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>الاشعارات</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderAppointmentItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007BFF',
    },
    appointmentItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    icon: {
        marginRight: 15,
    },
    appointmentDetails: {
        flex: 1,
    },
    appointmentId: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    appointmentTime: {
        fontSize: 16,
        color: '#555',
    },
});

export default AppointmentsScreen;
