import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation';
import { Provider } from './src/context/Provider';


const App = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}
export default App