import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { Context } from '../context/Provider';
import { colors, sizes } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const AvailableTimes = ({ visible, onRequestClose, selectedTime, setSelectedTime }) => {


    const availableTimes = [
        { id: '1', time: '9:00 AM' },
        { id: '2', time: '10:00 AM' },
        { id: '3', time: '11:00 AM' },
        { id: '4', time: '1:00 PM' },
        { id: '5', time: '2:00 PM' },
        { id: '6', time: '12:00 AM' },
        { id: '7', time: '4:00 PM' },
        { id: '8', time: '5:00 PM' },
        { id: '9', time: '6:00 AM' },
        { id: '10', time: '7:00 AM' },
        { id: '11', time: '8:00 AM' },
        { id: '12', time: '9:00 PM' },
        { id: '13', time: '4:00 PM' },
        { id: '14', time: '8:30 AM' },
        { id: '15', time: '6:40 PM' },
        { id: '16', time: '7:15 PM' },
    ];

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
        onRequestClose();
    };

    const renderTimeItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                style={[
                    styles.timeButton,
                    { backgroundColor: selectedTime === item.time ? '#007BFF' : 'white' },
                ]}
                onPress={() => handleTimeSelection(item.time)}
            >
                <Text style={[styles.timeButtonText, { color: selectedTime === item.time ? 'white' : 'black' }]}>
                    {item.time}
                </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <Modal visible={visible} onRequestClose={onRequestClose} animationType="slide">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>الأوقات المتاحة</Text>
                    <TouchableOpacity onPress={onRequestClose} style={styles.closeButton}>
                        <Ionicons name="close-sharp" size={28} color='red' />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={availableTimes}
                    renderItem={renderTimeItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedTime}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
    },
    header: {
        paddingHorizontal: 24,
        paddingVertical: 15,
        marginBottom: 5,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        color: colors.blue2,
        fontWeight: 'bold',
        fontSize: sizes.h1,
    },
    timeButton: {
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    timeButtonText: {
        fontSize: 18,
    },
});

export default AvailableTimes;
