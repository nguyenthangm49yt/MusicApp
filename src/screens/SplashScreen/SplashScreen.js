import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PrimaryButton} from '../../components/buttons/PrimaryButton/PrimaryButton';
import {styles} from './styles';


export default class SplashScreen extends React.Component {
  
  render() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bg}
        source={require('../../../assets/images/bg1.png')}
      />
      <View style={styles.contentContainer}>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logo.png')}
          />
          <Image
            style={styles.welcomeImage}
            source={require('../../../assets/images/enjoy.png')}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.heading}>We are what we do</Text>
          <Text style={styles.subHeading}>
            Thousand of people are usign silent moon for smalls meditation{' '}
          </Text>
          <View style={styles.btnWrapper}>
               <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                   <PrimaryButton label={'SIGN UP'} />
               </TouchableOpacity>
          </View>
          <Text style={styles.loginLinkWrapper}>
            <Text style={styles.notificationContent}>
              ALREADY HAVE AN ACCOUNT?
            </Text>{' '}

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.link}>LOG IN</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
  }
};
