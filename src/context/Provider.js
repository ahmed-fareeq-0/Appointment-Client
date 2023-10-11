import React, { createContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

export const Provider = ({ children }) => {

  const specialtiesData = [
    { id: '1', name: 'الاسنان', img: require('./../../assets/tooth.png') },
    { id: '2', name: 'العيون', img: require('./../../assets/visible.png') },
    { id: '3', name: 'القلب', img: require('./../../assets/heart.png') },
    { id: '4', name: 'الاذن والحنجرة', img: require('./../../assets/deaf.png') },
    { id: '5', name: 'الجلدية', img: require('./../../assets/smallpox.png') },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
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

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('email:', email);
    console.log('phone:', phone);
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);
  };

  const handleLogin = () => {
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
        specialty,
        setSpecialty,
        password,
        confirmPassword,
        setUsername,
        setEmail,
        setPhone,
        setPassword,
        setconfirmPassword,
        handleRegister,
        usernameSignIn,
        setUsernameSignIn,
        passwordSignIn,
        setPasswordSignIn,
        handleLogin,
        specialtiesData

      }}>
      {children}
    </Context.Provider>
  );
};