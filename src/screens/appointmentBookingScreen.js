import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'react-native-calendars';


const AppointmentBookingScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [patientName, setPatientName] = useState('');
    const [showCalendar, setShowCalendar] = useState(true);


    const handleAppointment = () => {

        console.log('تم حجز موعد:');
        console.log('patient name:', patientName);
        console.log('Selected Date:', selectedDate);
        setPatientName('');
    };

    const onDateSelect = (date) => {
        setSelectedDate(date.dateString);
        // setShowCalendar(false)
    };

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: sizes.base * 3 }}>

            </View>
            <View style={styles.wrapper}>

                <Text style={styles.title}>حجز موعد</Text>
                {showCalendar && <View>
                    <Calendar
                        onDayPress={onDateSelect}
                        style={styles.calendarContainer}
                        markedDates={{ [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
                    />
                </View>}

                {/* <Input
                    placeholder='اسم المريض'
                    value={patientName}
                    onChangeText={setPatientName}
                    rightIcon={<FontAwesome name="phone" size={24} color="black" />}
                    numberOfLines={2}
                    textAlign='right'
                />
                <Input
                    placeholder='اختر وقت الموعد'
                    value={selectedTime}
                    onChangeText={setSelectedTime}
                    rightIcon={<MaterialIcons name="email" size={24} color="black" />}
                    numberOfLines={2}
                    textAlign='right'
                /> */}


                <TouchableOpacity onPress={() => setShowCalendar(true)}>
                    <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                        <Text style={styles.btnText}>
                            اختر الوقت
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => setShowCalendar(true)}>
                    <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                        <Text style={styles.btnText}>
                            اختر التاريخ
                        </Text>
                    </LinearGradient>
                </TouchableOpacity> */}

                <TouchableOpacity onPress={handleAppointment}>
                    <LinearGradient colors={[colors.blue, colors.pink]} start={[0.1, 0.1]} end={[1, 1]} style={styles.btn}>
                        <Text style={styles.btnText}>
                            حجز
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red'
        // justifyContent:'center'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 16,
    },
    btn: {
        // paddingHorizontal: sizes.padding * 4,
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
    title: {
        color: colors.blue2,
        fontWeight: 'bold',
        fontSize: sizes.h1,
        textAlign: 'center',
        marginBottom: 56
        // backgroundColor: 'red'
    },
    calendarContainer: {
        marginBottom: 40,
        // marginVertical:10,
        padding: 15,
        // backgroundColor: 'red',
        borderRadius: 15
    }
});

export default AppointmentBookingScreen;
