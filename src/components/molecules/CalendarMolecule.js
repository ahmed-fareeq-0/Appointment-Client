import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';

const CalendarMolecule = ({ handleDateSelect, selectedDate }) => {
    return (
        <Calendar
            onDayPress={(day) => handleDateSelect(day.dateString)}
            style={styles.calendarContainer}
            markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#007BFF' } } : {}}
        />
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        marginBottom: 40,
        borderRadius: 15,
    },
});

export default CalendarMolecule;
