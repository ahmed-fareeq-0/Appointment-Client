import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes } from '../constants/theme';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from 'react-native-elements';


const AppointmentBookingScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [patientName, setPatientName] = useState('');

    const handleAppointment = () => {

        console.log('تم حجز موعد:');
        console.log('date:', selectedDate);
        console.log('time:', selectedTime);
        console.log('patient name:', patientName);

        setSelectedDate('');
        setSelectedTime('');
        setPatientName('');
    };

    return (
        <View style={styles.container}>
            <View style={{ marginVertical: sizes.base * 3 }}>
                <Text style={styles.title}>تسجيل حساب جديد</Text>
                <Text style={styles.descTitle}>مرحبا بك عرفنا بنفسك اكثر من خلال تسجيل معلوماتك الشخصية.</Text>
            </View>
            <View style={styles.wrapper}>
                <Input
                    placeholder='اختر تاريخ الموعد'
                    value={selectedDate}
                    onChangeText={setSelectedDate}
                    rightIcon={<MaterialIcons name="person" size={24} color="black" />}
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
                />
                <Input
                    placeholder='اسم المريض'
                    value={patientName}
                    onChangeText={setPatientName}
                    rightIcon={<FontAwesome name="phone" size={24} color="black" />}
                    numberOfLines={2}
                    textAlign='right'
                />

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
        justifyContent: 'center',
        padding: 16,
        // backgroundColor:'blue'
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
        marginBottom: sizes.spacing
    },
    textSignup: {
        color: colors.gray,
        fontSize: sizes.caption
    },
    signup: {
        marginVertical: sizes.padding / 3,
        alignSelf: 'center',
    },
    descTitle: {
        fontSize: sizes.small,
        // padding: sizes.spacing,
        paddingHorizontal: 20,
        textAlign: 'center',
        color: colors.gray3,
    }
});

export default AppointmentBookingScreen;
