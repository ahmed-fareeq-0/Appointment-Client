import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import AvailableTimes from './availableTimes'
import { Calendar } from 'react-native-calendars';
import { Context } from '../context/Provider';
import { colors, sizes } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';


const AppointmentScr = () => {
    const { selectedDate, setSelectedDate, handleAppointmentBooking } = useContext(Context);
    const [modalVisible, setModalVisible] = useState(false);

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>حجز موعد</Text>
                <Calendar
                    onDayPress={(day) => handleDateSelect(day.dateString)}
                    style={styles.calendarContainer}
                    markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#007BFF' } } : {}}
                />

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                        <Text style={styles.btnText}>
                            اختر الوقت
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleAppointmentBooking}>
                    <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                        <Text style={styles.btnText}>
                            حجز
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <AvailableTimes visible={modalVisible} onRequestClose={() => setModalVisible(false)} />
        </View>
    )
}

export default AppointmentScr

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    title: {
        color: colors.blue2,
        fontWeight: 'bold',
        fontSize: sizes.h1,
        textAlign: 'center',
        marginBottom: 56,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    calendarContainer: {
        marginBottom: 40,
        borderRadius: 15
    },
    btn: {
        height: sizes.base * 3,
        borderRadius: sizes.radius,
        marginVertical: sizes.padding / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 18,
        color: colors.white
    },
})