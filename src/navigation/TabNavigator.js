import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import AppointmentsScreen from '../screens/appointmentsScreen';
import DoctorsScreen from '../screens/doctorsScreen';
import { colors } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const homeName = "الرئيسية";
const appointmentName = "الحجوزات";
const profileName = "الملف الشخصي";
const doctorsName = "الأطباء"

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    const rn = route.name

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === appointmentName) {
                        iconName = focused ? 'calendar' : 'calendar-outline';

                    } else if (rn === profileName) {
                        iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    } else if (rn === doctorsName) {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: true,
                tabBarActiveTintColor: colors.blue2,
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 12 },
                tabBarStyle: {
                    padding: 10,
                    height: 70,
                },
            })}
        >
            <Tab.Screen name={profileName} component={SettingsScreen} options={{ headerShown: false }} />
            <Tab.Screen name={appointmentName} component={AppointmentsScreen} options={{ headerShown: false }} />
            <Tab.Screen name={doctorsName} component={DoctorsScreen} options={{ headerShown: false }} />
            <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};


export default TabNavigator;