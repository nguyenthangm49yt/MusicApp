import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View ,LogBox } from 'react-native';
import AppContext from './src/AppContext';

LogBox.ignoreLogs(['Remote debugger']);

const Stack = createStackNavigator();

export default function App() {
  const ref = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
        
        <AppContext/>
   </View>
  );
}

