import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet,Image, BackHandler} from 'react-native';
//import PlayWidget from '../components/PlayWidget/PlayWidget';
import { ContextInside } from './ContextInside';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppStatus} from '../../AppStatus';


export function index() {
  const [songId, setSongId] = React.useState(null);
  return (
    <SafeAreaProvider>
        <AppStatus.Provider value={{
          songId,
          setSongId: (id)  => setSongId(id),
        }}>
    
          <ContextInside/>
          
          {/* <PlayWidget/>  */}
        </AppStatus.Provider>
    </SafeAreaProvider>
 
  );
}

