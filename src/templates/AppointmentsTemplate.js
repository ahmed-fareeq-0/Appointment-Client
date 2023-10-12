import React, { useContext } from "react";
import TextAtom from "../atoms/textAtom";
import { View, StyleSheet, FlatList } from "react-native";
import { colors } from "../constants/theme";
import AppointmentItemOrganisms from "../organisms/AppointmentItemOrganisms";
import { Context } from "../context/Provider";

const AppointmentsTemplate = () => {
    const { appointmentsData } = useContext(Context);
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
