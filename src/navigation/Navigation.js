import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnBoardingScreen from './../screens/onBoardingScreen';
import HomeScreen from '../screens/homeScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import TermsOfServiceScreen from '../screens/termsOfServiceScreen';
import AppointmentsScreen from '../screens/appointmentsScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SettingsScreen from '../screens/settingsScreen';
import { colors } from '../constants/theme';
import HeaderComponent from '../components/headerComponent';
import DoctorsScreen from '../screens/doctorsScreen';
import SearchComponent from '../components/searchComponent';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeName = "الرئيسية";
const appointmentName = "الحجوزات";
const settingsName = "الاعدادات";
const doctorsName = "الأطباء"

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onBoarding">
      <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="termsOfService" component={TermsOfServiceScreen} />
    </Stack.Navigator>
  );
};

// const tabIcons = {
//   home: { focused: 'home', unfocused: 'home-outline' },
//   details: { focused: 'time', unfocused: 'time-outline' },
//   settings: { focused: 'settings', unfocused: 'settings-sharp' },
// };

// const getTabBarIcon = (routeName, focused, color, size) => {
//   console.log(routeName, focused, color, size);
//   const { focused: focusedIcon, unfocused: unfocusedIcon } = tabIcons;
//   const iconName = focused ? focusedIcon : unfocusedIcon;
//   return <Ionicons name={iconName} size={size} color={color} />;
// };

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const rn = route.name

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';

          } else if (rn === appointmentName) {
            iconName = focused ? 'calendar' : 'calendar-outline';

          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
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
          // backgroundColor: '#f0f0f0', 
          // borderTopColor: 'transparent', 
          // elevation: 10 
        },


      })}

    >
      <Tab.Screen name={settingsName} component={SettingsScreen} options={{ header: () => <HeaderComponent /> }} />
      <Tab.Screen name={appointmentName} component={AppointmentsScreen} options={{ header: () => <HeaderComponent /> }} />
      <Tab.Screen name={doctorsName} component={DoctorsScreen} options={{ header: () => <SearchComponent /> }} />
      <Tab.Screen name={homeName} component={HomeScreen} options={{ header: () => <HeaderComponent /> }} />


    </Tab.Navigator>
  );
};

const Condition = true;
const Navigation = () => {
  return (
    <NavigationContainer>
      {
        Condition ? <BottomTabs /> : <AppStack />
      }
    </NavigationContainer>
  );
};

export default Navigation;
