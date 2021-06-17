import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../../components/buttons/PrimaryButton/PrimaryButton';
import { SecondaryButton } from '../../components/buttons/SecondaryButton/SecondaryButton';
import { colors } from '../../config/colors';
import { fonts } from '../../config/fonts';
import { PrimaryInput } from '../../components/forms/PrimaryInput/PrimaryInput';

import { validateEmail, URL } from '../../utils';
import Toast from 'react-native-toast-message';
import useAxios from 'axios-hooks'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { requestPermissionsAsync } from 'expo-av/build/Audio';

export default function Login(props) {
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() =>{
    _retrieveData();
  },[])
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('access_token');
      setIsLogin(value);
      if (value !== null) {
        // We have data!!
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  if(isLogin) {
    props.navigation.navigate('index')
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const _storeData = async (response) => {
    console.log(response.data)
    let jsonValue = JSON.stringify(response.data);
    try {
      await AsyncStorage.setItem(
        'access_token',
        jsonValue
      );
    } catch (error) {
      // Error saving data
    }
  };
  const onSubmit = async () => {
    if (validateEmail(email) == false) {
      Toast.show({
        text1: 'Invalid email'
      });
      return;
    }
    if (password.length < 6) {
      Toast.show({
        text1: 'Password must be greater than 6 letter'
      });
      return;
    }
    axios.post(`${URL}/api/login`, {
      email, password
    })
      .then(response => {
        Toast.show({
          text1: 'Sign in success'
        });
       
        _storeData(response);
        console.log('store')
        Toast.show({
          text1: 'Sign up success'
        });
        props.navigation.navigate('GettingStarted')
      })
      .catch(error => {
        alert(error)
        Toast.show({
          text1: 'Fail to sign up'
        });
      });

  }
  return (
    <View style={styles.container}>
      <Toast ref={(ref) => Toast.setRef(ref)} />

      <View style={styles.contentContainer}>
        <Image
          style={styles.back}
          source={require('../../../assets/images/back.png')} />

        <Text style={styles.heading}>Welcome Back!</Text>

        <View style={styles.btnWrapper}>
          <View style={styles.inputItem}>
            <PrimaryInput placeHolder={'Email Address'} onChange={text => setEmail(text)} />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput placeHolder={'Password'} onChange={text => setPassword(text)} />
          </View>
          <View style={styles.loginBtnWrapper}>
            <TouchableOpacity onPress={onSubmit}>
              <PrimaryButton label={'LOG IN'} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footerWrapper}>
          <Text style={styles.footerText}>

            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.footerText2}>SIGN UP</Text>
              </TouchableOpacity> */}

          </Text>
        </View>
      </View>
    </View>

  );
}
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    paddingTop: 0,

  },
  vector1: {
    position: 'absolute',
    left: -10,
    top: -5,
  },
  vector2: {
    position: 'absolute',
    right: -6,
  },
  vector3: {
    position: 'absolute',
    top: 90,
  },
  vector4: {
    position: 'absolute',
    right: 0,
    top: 90,
  },
  contentContainer: {
    flex: 1,
  },
  back: {
    marginTop: 50,
  },
  heading: {
    fontFamily: fonts.font,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
  },
  btnWrapper: {
    marginTop: 30,
  },
  btnItemWrapper: {
    marginBottom: 20,
  },
  or: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontFamily: fonts.font,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    color: colors.gray,
  },
  inputItem: {
    marginBottom: 20,
  },
  loginBtnWrapper: {
    marginTop: 10,
  },
  forgotPassword: {
    fontFamily: fonts.font,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  footerText: {
    fontFamily: fonts.font,
    fontWeight: '400',
    fontSize: 14,
  },
  footerWrapper: {
    position: 'relative',
    marginTop: 25,


    alignItems: 'center',

  },
  footerText1: {
    color: colors.gray,


  },
  footerText2: {
    color: colors.primary,

    marginLeft: 5,

  },

});