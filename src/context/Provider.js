import React, {createContext, useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export const Provider = ({children}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleAppointmentBooking = () => {
    if (selectedDate && selectedTime) {
        // Implement the booking logic here
        console.log('Appointment booked on', selectedDate, 'at', selectedTime);
    } else {
        console.log('Please select a date and time before booking.');
    }
};



  return (
    <Context.Provider
      value={{
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        handleAppointmentBooking

      }}>
      {children}
    </Context.Provider>
  );
};