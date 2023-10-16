import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../../context/Provider';
import ButtonAtom from '../atoms/buttonAtom';
import CalendarMolecule from '../molecules/CalendarMolecule';
import AvailableTimes from '../../screens/availableTimes';
import { sizes, colors } from '../../constants/theme';

const AppointmentBookingOrganism = () => {
  const { selectedDate, handleAppointmentBooking, handleDateSelect, modalVisible, setModalVisible } = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>حجز موعد</Text>
        <CalendarMolecule handleDateSelect={handleDateSelect} selectedDate={selectedDate} />

        <ButtonAtom button="اختر الوقت" onPress={() => setModalVisible(true)} />
        <ButtonAtom button="حجز" onPress={handleAppointmentBooking} />
      </View>
      <AvailableTimes visible={modalVisible} onRequestClose={() => setModalVisible(false)} />
    </View>
  );
};

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
});

export default AppointmentBookingOrganism;
