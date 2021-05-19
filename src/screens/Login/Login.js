import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PrimaryButton} from '../../components/buttons/PrimaryButton/PrimaryButton';
import {SecondaryButton} from '../../components/buttons/SecondaryButton/SecondaryButton';
import { colors } from '../../config/colors';
import {fonts} from '../../config/fonts';
import {PrimaryInput} from '../../components/forms/PrimaryInput/PrimaryInput';



export default class Login  extends React.Component {

  handleLogin = () => {
    // TODO: Firebase stuff...
    this.props.navigation.navigate('GettingStarted')
  }
  render() {
    return (
    <View style={styles.container}>
            <Image 
            style={styles.vector1}
            source={require('../../../assets/images/vector1.png')}/>
            <Image 
            style={styles.vector2}
            source={require('../../../assets/images/vector2.png')}/>
            <Image 
            style={styles.vector3}
            source={require('../../../assets/images/vector3.png')}/>
            <Image 
            style={styles.vector4}
            source={require('../../../assets/images/vector4.png')}/>

        <View style={styles.contentContainer}>
            <Image 
            style={styles.back}
            source={require('../../../assets/images/back.png')}/>
            
            <Text style={styles.heading}>Welcome Back!</Text>
           
            <View style={styles.btnWrapper}>
                <View style={styles.btnItemWrapper}>
                    <SecondaryButton
                        label={'CONTINUE WITH FACEBOOK'}
                        background={colors.facebookBg}
                        fontColor={colors.white}
                        btnType="FACEBOOK"
                    />
                </View>
                <View style={styles.btnItemWrapper}>
                    <SecondaryButton
                        label={'CONTINUE WITH GOOGLE'}
                        background={colors.white}
                        fontColor={colors.heading}
                        btnType="GOOGLE"
                    />
                </View>
                <Text style={styles.or}>OR LOGIN WITH YOUR EMAIL</Text>
                <View style={styles.inputItem}>
                 <PrimaryInput placeHolder={'Email Address'} />
                </View>
                <View style={styles.inputItem}>
                 <PrimaryInput placeHolder={'Password'} />
                </View>
                <View style={styles.loginBtnWrapper}>
                    <TouchableOpacity onPress={this.handleLogin}>
                       <PrimaryButton label={'LOG IN'} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>

          <View style={styles.footerWrapper}>
              <Text style={styles.footerText}>
                <View>
                   <Text style={styles.footerText1}>ALREADY HAVE AN ACCOUNT?</Text>
                </View>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={styles.footerText2}>SIGN UP</Text>
                </TouchableOpacity>
                
              </Text>
          </View>
         </View>
    </View>
         
    );
    }
};
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
        right:0,
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
        marginTop:25,
      
       
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