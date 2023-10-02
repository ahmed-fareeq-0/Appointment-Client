import registerNNPushToken from 'native-notify';
import React from 'react'
import Navigation from './src/navigation/Navigation';
import { Provider } from './src/context/Provider';


// const App = () => {
//   registerNNPushToken(12907, 'hEm0wNQDHiJToBLKKiJIGe');
//   return (
//     <Provider>
//       <Navigation />
//     </Provider>
//   );
// }
// export default App


export default function App() {
  registerNNPushToken(12907, 'hEm0wNQDHiJToBLKKiJIGe');
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}