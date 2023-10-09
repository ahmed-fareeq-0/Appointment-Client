import React, { createContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');


  const [usernameSignIn, setUsernameSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');

  const handleAppointmentBooking = () => {
    if (selectedDate && selectedTime) {
      // Implement the booking logic here
      console.log('Appointment booked on', selectedDate, 'at', selectedTime);
    } else {
      console.log('Please select a date and time before booking.');
    }
  };

  const handleSignUp = () => {
    console.log('Username:', username);
    console.log('email:', email);
    console.log('phone:', phone);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);
  };

  const handleSignIn = () => {
    console.log('Username:', usernameSignIn);
    console.log('Password:', passwordSignIn);
    setUsernameSignIn("")
    setPasswordSignIn("")
  };

  return (
    <Context.Provider
      value={{
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        handleAppointmentBooking,
        username,
        email,
        phone,
        password,
        confirmPassword,
        setUsername,
        setEmail,
        setPhone,
        setPassword,
        setconfirmPassword,
        handleSignUp,
        usernameSignIn,
        setUsernameSignIn,
        passwordSignIn,
        setPasswordSignIn,
        handleSignIn

      }}>
      {children}
    </Context.Provider>
  );
};