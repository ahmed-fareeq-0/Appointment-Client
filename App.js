import registerNNPushToken from 'native-notify';
import React from 'react'
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';
// import * as Sentry from '@sentry/react-native';


// Sentry.init({
//   dsn: 'https://99dbc115b91dea7778981471f33715e1@o4505998746124288.ingest.sentry.io/4505998877589504',
//   enableAutoSessionTracking: true,
//   integrations: [new Sentry.ReactNativeTracing()],
//   tracesSampleRate: 1.0,
// });


export default function App() {
  registerNNPushToken(12907, 'hEm0wNQDHiJToBLKKiJIGe');
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}