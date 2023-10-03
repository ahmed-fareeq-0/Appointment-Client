import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/signUp';
import SignIn from '../screens/signIn';
import OnBoardingScreen from './../screens/onBoardingScreen';
import TermsOfServiceScreen from '../screens/termsOfServiceScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import DoctorDetailsScreen from '../screens/doctorDetailsScreen';
import TabNavigator from './TabNavigator';
import { StatusBar } from 'react-native';
import AppointmentBookingScreen from '../screens/appointmentBookingScreen';
import DrawerNavigator from './drawerNavigator';
import SignUpDoctors from '../screens/signUpDoctors'




const Stack = createNativeStackNavigator();

const AppStack = () => {
  const condition = false;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onBoarding">
      {condition ? (
        <>
          <Stack.Screen name="root" component={DrawerNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="signIn" component={SignIn} />
          <Stack.Screen name="signUp" component={SignUp} />
          <Stack.Screen name="signUpDoctors" component={SignUpDoctors} />
          <Stack.Screen name="termsOfService" component={TermsOfServiceScreen} />
        </>
      )
      }
    </Stack.Navigator>
  );
};


const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fbfbfb" />
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigation;
