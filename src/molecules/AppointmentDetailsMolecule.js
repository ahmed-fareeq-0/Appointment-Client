import React from "react";
import { View, StyleSheet } from "react-native";
import TextAtom from "../atoms/textAtom";

const AppointmentDetailsMolecule = ({ appointmentType, time }) => {
    return (
        <View style={styles.appointmentDetails}>
            <TextAtom style={styles.appointmentId} >{appointmentType}</TextAtom>
            <TextAtom style={styles.appointmentTime} >وقت الموعد:{time}</TextAtom>
        </View>
    )
};

const styles = StyleSheet.create({
    appointmentDetails: {
        marginLeft: 15
    },
    appointmentId: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    appointmentTime: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
})

export default AppointmentDetailsMolecule
