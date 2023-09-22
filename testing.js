import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './../screens/onBoardingScreen';
import HomeScreen from '../screens/homeScreen';
import welcomeScreen from '../screens/welcomeScreen';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import TermsOfServiceScreen from '../screens/termsOfServiceScreen';
import BottomTabsComponent from '../components/bottomTabsComponent';


const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Intro" >
                    <>
                        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
                        <Stack.Screen name="welcome" component={welcomeScreen} />
                        <Stack.Screen name="signIn" component={SignIn} />
                        <Stack.Screen name="signUp" component={SignUp} />
                        <Stack.Screen name="termsOfService" component={TermsOfServiceScreen} />

                    </>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigation