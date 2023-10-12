import React from "react";
import { View, StyleSheet } from "react-native";
import IconAtom from "../atoms/iconAtom";
import AppointmentDetailsMolecule from "../molecules/AppointmentDetailsMolecule";
import { colors } from "../constants/theme";

const AppointmentItemOrganisms = ({ appointmentType, time }) => {
    return (
        <View style={styles.appointmentItem}>
            <IconAtom name="calendar" size={24} color={colors.blue2} />
            <AppointmentDetailsMolecule appointmentType={appointmentType} time={time} />
        </View>
    )
};

const styles = StyleSheet.create({
    appointmentItem: {
        flexDirection: 'row',
        // alignItems: 'center',
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
})

export default AppointmentItemOrganisms
