import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/colors';
import { SecondaryButton } from '../../components/buttons/SecondaryButton/SecondaryButton';
import { PrimaryButton } from '../../components/buttons/PrimaryButton/PrimaryButton';
import { PrimaryInput } from '../../components/forms/PrimaryInput/PrimaryInput';
import { SecondaryInput } from '../../components/forms/SecondaryInput/SecondaryInput';
import { fonts } from '../../config/fonts';
import Toast from 'react-native-toast-message';
import {validateEmail, URL} from '../../utils';
import useAxios from 'axios-hooks'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignUp(props) {
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    _retrieveData();
  })
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('access_token');
      if (value !== null) {
        setIsLogin(value);
        // We have data!!
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  if(isLogin != null) {
    props.navigation.navigate('index')
  }
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [
    { data: putData, loading: putLoading, error: putError },
    executePost
  ] = useAxios(
    {
      url: `${URL}/api/register`,
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    { manual: true }
  )
  if (putData) {
    Toast.show({
      text1: 'Sign up success'
    });
  }
  const onSubmit = () => {
    if (validateEmail(email) == false) {
      Toast.show({
        text1: 'Invalid email'
      });
      return;
    }
    if (password != passwordConfirmation) {
      Toast.show({
        text1: 'Confirm password does not match'
      });
      return;
    }
    if (password.length < 6) {
      Toast.show({
        text1: 'Password must be greater than 6 letter'
      });
      return;
    }
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
    axios.post(`${URL}/api/register`, {
      username, email, password, password_confirmation: passwordConfirmation
    })
        .then(response => {
          
          Toast.show({
            text1: 'Sign up success'
          });
          _storeData(response)
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
            source={require('../../../assets/images/back.png')}
          />
          <Text style={styles.heading}>Create your account</Text>
          <View style={styles.inputItem}>
            <PrimaryInput
              placeHolder={'User Name'}
              isValid={true}
              value={username}
              onChange={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputItem}>
            <PrimaryInput
              value={email}
              placeHolder={'Email Address'}
              isValid={true}
              onChange={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputItem}>
            <SecondaryInput value={password} placeHolder={'Password'} onChange={(text) => setPassword(text)} />
          </View>
          <View style={styles.inputItem}>
            <SecondaryInput value={passwordConfirmation} placeHolder={'Password Confirmation'} onChange={(text) => setPasswordConfirmation(text)} />
          </View>
          <View style={styles.getStartedbtnItemWrapper}>
            <TouchableOpacity onPress={onSubmit}>
              <PrimaryButton label={'GET STARTED'} />
            </TouchableOpacity>
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
  checkBox: {
    width: 24,
    height: 24,
  },
  privacyPolicyCheckWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: fonts.font,
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },
  link: {
    fontFamily: fonts.font,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primary,
    marginLeft: 5,
  },
  privacyPolicyLabelWrapper: {
    flexDirection: 'row',
  },
  getStartedbtnItemWrapper: {
    marginTop: 30,
  },
});

