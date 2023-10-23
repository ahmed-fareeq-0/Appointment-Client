import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonAtom from '../atoms/buttonAtom';
import CalendarMolecule from '../molecules/CalendarMolecule';
import AvailableTimes from '../../screens/availableTimes';
import { sizes, colors } from '../../constants/theme';

const AppointmentBookingOrganism = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  const handleAppointmentBooking = () => {
    if (selectedDate && selectedTime) {
      console.log('Appointment booked on', selectedDate, 'at', selectedTime);
    } else {
      console.log('Please select a date and time before booking.');
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };




  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>حجز موعد</Text>
        <CalendarMolecule handleDateSelect={handleDateSelect} selectedDate={selectedDate} />

        <ButtonAtom button="اختر الوقت" onPress={() => setModalVisible(true)} />
        <ButtonAtom button="حجز" onPress={handleAppointmentBooking} />
      </View>
      <AvailableTimes selectedTime={selectedTime} setSelectedTime={setSelectedTime} visible={modalVisible} onRequestClose={() => setModalVisible(false)} />
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
