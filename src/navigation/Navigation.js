import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import OnBoardingScreen from '../screens/onBoardingScreen';
import TermsOfServiceScreen from '../screens/termsOfServiceScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import { StatusBar } from 'react-native';
import DrawerNavigator from './drawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();



const AppStack = () => {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        setToken(userToken);
      } catch (error) {
        console.error('حدث خطأ أثناء استرداد البيانات من AsyncStorage:', error);
      }
    }
    getToken();
  }, [])

  if (token) {
    console.log('yes');
  } else {
    console.log('no');
  }

  const condition = false;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onBoarding">
      {token ? (
        <>
          <Stack.Screen name="root" component={DrawerNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="signIn" component={LoginScreen} />
          <Stack.Screen name="signUp" component={RegisterScreen} />
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
