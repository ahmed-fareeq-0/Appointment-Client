import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import TermsOfServiceScreen from '../screens/termsOfServiceScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import { StatusBar } from 'react-native';
import DrawerNavigator from './drawerNavigator';
import RegisterDoctorsScreen from './../screens/RegisterDoctorsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const condition = true;
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
          <Stack.Screen name="signIn" component={LoginScreen} />
          <Stack.Screen name="signUp" component={RegisterScreen} />
          <Stack.Screen name="signUpDoctors" component={RegisterDoctorsScreen} />
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
