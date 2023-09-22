import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/homeScreen';

//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function BottomTabsComponent() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Screen1" component={HomeScreen} />
        </Tab.Navigator>
      );
}

export default BottomTabsComponent;