import React, { createContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from 'react-native';

export const Context = createContext();

export const Provider = ({ children }) => {

  const specialtiesData = [
    { id: '1', name: 'الاسنان', img: require('./../../assets/tooth.png') },
    { id: '2', name: 'العيون', img: require('./../../assets/visible.png') },
    { id: '3', name: 'القلب', img: require('./../../assets/heart.png') },
    { id: '4', name: 'الاذن والحنجرة', img: require('./../../assets/deaf.png') },
    { id: '5', name: 'الجلدية', img: require('./../../assets/smallpox.png') },
  ];

  const RecommendedDoctorsData = [
    {
      id: '1',
      name: 'د. حسن سلام',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب القلب',
      description: 'طبيب قلب ذو خبرة مع التركيز على صحة القلب.',
    },
    {
      id: '2',
      name: 'د. حسن رائد',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب العيون',
      description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
    },
    {
      id: '3',
      name: 'د. علي محمد',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب حنجرة ',
      description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
    },
    {
      id: '4',
      name: 'د. محمد فراس',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب اسنان ',
      description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
    },
    {
      id: '5',
      name: 'د. حسن سلام',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب القلب',
      description: 'طبيب قلب ذو خبرة مع التركيز على صحة القلب.',
    },
    {
      id: '6',
      name: 'د. حسن رائد',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب العيون',
      description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
    },
    {
      id: '7',
      name: 'د. علي محمد',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب حنجرة ',
      description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
    },
    {
      id: '8',
      name: 'د. محمد فراس',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب اسنان ',
      description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
    },
    {
      id: '9',
      name: 'د. حسن رائد',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب العيون',
      description: 'طبيب العيون ذو خبرة مع التركيز على صحة العين.',
    },
    {
      id: '10',
      name: 'د. علي محمد',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب حنجرة ',
      description: 'طبيب حنجرة واذان ذو خبرة مع التركيز على صحة السمع.',
    },
    {
      id: '11',
      name: 'د. محمد فراس',
      imageSource: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
      specialty: 'طبيب اسنان ',
      description: 'طبيب  اسنان ذو خبرة مع التركيز على صحة الاسنان.',
    },
  ];

  const doctorsData = [
    {
      id: '1',
      name: 'د. علي محمد حسين',
      specialty: 'اخصائي قلب',
      location: 'كربلاء حي الحسين',
      image: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'), // تحديث مع مسار الصورة الخاصة بك
    },
    {
      id: '2',
      name: 'د. محمد عبد السلام',
      specialty: 'اخصائي جلدية',
      location: 'كربلاء الاسكان',
      image: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
    },
  ]

  const appointmentsData = [
    { id: 1, time: '2023-09-28 10:00 AM', appointmentType: 'د.محمد حسن اختصاص أذن وحنجرة' },
    { id: 2, time: '2023-09-29 11:00 AM', appointmentType: 'د.علي محمد اختصاص باطنية' },
  ];

  const profileData = {
    name: 'احمد فريق',
    email: 'ahmed@example.com',
    imageSource: require('../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
    infoData: [
      { label: 'العمر', value: '30' },
      { label: 'العنوان', value: 'كربلاء' },
      { label: 'رقم الهاتف', value: '07715503646' },
    ],
  };

  const doctor = {
    name: 'د. علي حسن',
    image: require('./../../assets/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg'),
    address: 'حي الحسين, شارع المشجر',
    location: {
        latitude: 32.606111,
        longitude: 44.059430,
    },
    specialization: 'طبيب عام',
    bio: 'دكتور خبير في علاج الأمراض المزمنة والعناية بصحة العائلة.',
    phone: '1234567890',
};

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

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


  const openMapsApp = () => {
    const { latitude, longitude } = doctor.location;
    const url = `https://maps.apple.com/?daddr=${latitude},${longitude}&dirflg=d`;
    Linking.openURL(url);
};

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prev) => !prev);
};

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
        specialtiesData,
        doctorsData,
        RecommendedDoctorsData,
        appointmentsData,
        profileData,
        notificationsEnabled,
        setNotificationsEnabled,
        handleNotificationsToggle,
        openMapsApp,
        doctor

      }}>
      {children}
    </Context.Provider>
  );
};