import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import DoctorDetailsScreen from '../screens/doctorDetailsScreen';
import AppointmentBookingScreen from '../screens/appointmentBookingScreen';
import TabNavigator from './TabNavigator';


import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationsScreen from '../screens/notificationsScreen';
import { colors } from '../constants/theme';
import SettingsScreen from '../screens/settingsScreen';
import AboutScreen from '../screens/aboutScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: colors.blue2,
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
                        <AntDesign name={focused ? 'home' : 'home'} size={24} color={focused ? colors.blue2 : '#000'} />
                    ),
                }} />
            <Drawer.Screen name="doctorDetails" component={DoctorDetailsScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'user' : 'user'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                    drawerItemStyle: { display: 'none' }
                }}
            />
            <Drawer.Screen name="الاعدادات" component={SettingsScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'setting' : 'setting'} size={24} color={focused ? colors.blue2 : '#000'} />
                    ),
                }}
            />
            <Drawer.Screen name="appointmentBooking" component={AppointmentBookingScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'calendar' : 'calendar'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                    drawerItemStyle: { display: 'none' }
                }}
            />
            <Drawer.Screen name="notifications" component={NotificationsScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'notifications-outline' : 'notifications-outline'} size={24} color={focused ? '#007BFF' : '#000'} />
                    ),
                    drawerItemStyle: { display: 'none' }

                }}
            />
            <Drawer.Screen name="حول" component={AboutScreen}
                options={{
                    drawerIcon: ({ focused }) => (
                        <AntDesign name={focused ? 'exclamationcircleo' : 'exclamationcircleo'} size={24} color={focused ? colors.blue2 : '#000'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator