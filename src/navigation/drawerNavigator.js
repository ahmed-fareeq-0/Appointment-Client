import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import SettingsScreen from '../screens/settingsScreen';
import DoctorDetailsScreen from '../screens/doctorDetailsScreen';
import AppointmentBookingScreen from '../screens/appointmentBookingScreen';
import TabNavigator from './TabNavigator';


import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#007BFF',
                drawerInactiveTintColor: '#000',
                drawerLabelStyle: {
                    fontSize: 16,
                },
                drawerPosition: "left",
                drawerType: "slide"
            }}
            initialRouteName='الصفحة الرئيسية'
        >
            <Drawer.Screen name="الصفحة الرئيسية" component={TabNavigator}
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'home' : 'home'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                }} />
            <Drawer.Screen name="doctorDetails" component={DoctorDetailsScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'user' : 'user'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen name="الاعدادات" component={SettingsScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'setting' : 'setting'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen name="appointmentBooking" component={AppointmentBookingScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'calendar' : 'calendar'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator