import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import  Home   from './Home/Home';
import { Music } from '../screens/Music/Music';
import Meditate  from '../screens/Meditate/Meditate';
import  Profile  from '../screens/Profile/Profile';
import {FindScreen } from '../screens/FindScreen/FindScreen';
 

const Tab = createBottomTabNavigator();

export function ContextInside() {
  return (

            <Tab.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                    activeTintColor: '#e91e63',
                    headerShown: false,
                  }}
                >
                  <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Meditate"
                    component={Meditate}
                    options={{
                      tabBarLabel: 'Meditate',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="egg-easter" color={color} size={size} />
                      ),
                    }}
                  />
                   {/* <Tab.Screen
                    name="Music"
                    component={Music}
                    options={{
                      tabBarLabel: 'Music',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="music-circle" color={'#7583CA'} size={size} />
                      ),
                    }}
                    /> */}
                  <Tab.Screen
                    name="FindScreen"
                    component={FindScreen}
                    options={{
                      tabBarLabel: 'Find',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="file-find-outline" color={color} size={size} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                      tabBarLabel: 'Profile',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                      ),
                    }}
                  />
            </Tab.Navigator>
           
  
  );
}

