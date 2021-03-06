import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity, Alert} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Profile/styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  URL} from '../../utils';
 
import useAxios from 'axios-hooks'
import axios from 'axios'


const Action = ({title, iconame, color}) => {
    
    return(
        <View style={styles.actions}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name={iconame} color={color} size={30} />
                
                </View>
                
                <Text style={styles.actionTitle}>{title}</Text>
            
                <MaterialCommunityIcons name="chevron-right" color={color} size={30} style={styles.moreIcon}/> 
        </View>
    )
}
export default function Setting()  {
    const navigation = useNavigation();
    const handleBack = () => {
        // TODO: 
        navigation.goBack();
      }
    
    
      const signout = () => {

        Alert.alert(
            "Will you log out",
            "Are you sure?",
            [
            {
                text: "Cancel",
                onPress: () => console.log("cancel Pressed") ,
                style: "cancel"
            },
            { text: "OK", onPress: () => {
                AsyncStorage.clear();
                navigation.navigate('SplashScreen')
            }}
            ]
        );
        // TODO:  
       console.log('signout')
    //    navigation.navigate('GettingStarted')
      }
    return (
        <SafeAreaView style={styles.container}>
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
                onPress={handleBack}>
                    
                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>  
               
                <Text style={styles.headerTitle}>Setting</Text>
               
                <TouchableOpacity style={styles.headerRightBtnsWrapper}>
                    <MaterialCommunityIcons name="help-circle-outline" color="#36454f" size={30} />
                </TouchableOpacity>
            </View>

             {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:30}}>
                
                  {/* action */}
                <TouchableOpacity style={styles.actions}>
                    <Action title={'Privacy Policy'} iconame={'book-open-variant'} color={'#fe4a49'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actions}>
                    <Action title={'About us'} iconame={'information-outline'} color={'#283655'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actions}>
                    <Action title={'Help'} iconame={'account-question'} color={'#88d8b0'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actions}
                onPress={signout}
                >
                    <Action title={'Sign out'} iconame={'logout-variant'} color={'#88d8b0'}/>
                </TouchableOpacity>
                
                
            </ScrollView>
        </SafeAreaView>
    );
    
};
