import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet,Image, BackHandler} from 'react-native';
 
import { ContextInside } from './ContextInside';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppStatus} from '../../AppStatus';


export function index() {
   
  return (
    <SafeAreaProvider>
         
    
          <ContextInside/>
          
         
        
    </SafeAreaProvider>
 
  );
}

