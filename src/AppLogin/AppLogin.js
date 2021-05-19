import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import  SplashScreen  from '../screens/SplashScreen/SplashScreen';
import  SignUp  from '../screens/SignUp/SignUp';
import  Login from '../screens/Login/Login';
import  GettingStarted  from '../screens/GettingStarted/GettingStarted';


export  function AppLogin() {
  
  return (
    <LoginNavigator/>

  );
}

const Stack = createStackNavigator();

function LoginNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode='none'>
       <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
    </Stack.Navigator>
  );
}