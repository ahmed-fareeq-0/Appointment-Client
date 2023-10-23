import React, { useState } from "react";
import TextAtom from "../components/atoms/textAtom";
import { View, StyleSheet, FlatList } from "react-native";
import { colors } from "../constants/theme";
import AppointmentItemOrganisms from "../components/organisms/AppointmentItemOrganisms";
import { Context } from "../context/Provider";

const AppointmentsTemplate = () => {

    const appointmentsData = [
        { id: 1, time: '2023-09-28 10:00 AM', appointmentType: 'د.محمد حسن اختصاص أذن وحنجرة' },
        { id: 2, time: '2023-09-29 11:00 AM', appointmentType: 'د.علي محمد اختصاص باطنية' },
    ];
    return (
        <View style={styles.container}>
            <TextAtom style={styles.header}>الحجوزات</TextAtom>
            <FlatList
                data={appointmentsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <AppointmentItemOrganisms appointmentType={item.appointmentType} time={item.time} />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.blue2,
    },
})

export default AppointmentsTemplate
