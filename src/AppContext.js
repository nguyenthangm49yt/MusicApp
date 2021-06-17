import * as React from 'react';
import { NavigationContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import  Music  from './screens/Music/Music';
import Setting from './screens/Setting/Setting';
import Playlists from './screens/Playlists/Playlists';
import EditProfile from './screens/EditProfile/EditProfile';
import {AppLogin} from './AppLogin/AppLogin';
import {index} from './screens/index';
import { ContextInside } from './ContextInside';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {AppStatus} from '../AppStatus';


export default function AppContext () {
    const ref = React.useRef(null);

  return (
    <NavigationContainer ref={ref}>
        
        <RootNavigator/>
   
     </NavigationContainer>
  );
}



const Stack = createStackNavigator();

function RootNavigator() {
  const [songId, setSongId] = React.useState('');
  const [playlistId, setPlaylistId] = React.useState('');
  return (
     <AppStatus.Provider value={{
          songId,
          setSongId: (id)  => setSongId(id),
          playlistId,
          setPlaylistId: (id)  => setPlaylistId(id),
        }}> 
        <Stack.Navigator initialRouteName="SplashScreen" headerMode='none'>
            
            <Stack.Screen name="AppLogin" component={AppLogin} />

            <Stack.Screen name="index" component={index} />
            <Stack.Screen name="Music" component={Music} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Playlists" component={Playlists} />
          
          
        </Stack.Navigator>
     </AppStatus.Provider>
    
 );
}