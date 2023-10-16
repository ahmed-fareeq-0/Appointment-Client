import { useState } from 'react';

const useAppointments = () => {
    const [selectedDate, setSelectedDate] = useState(null);
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

    return {
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        handleAppointmentBooking,
        handleDateSelect
    };
};

export default useAppointments;
