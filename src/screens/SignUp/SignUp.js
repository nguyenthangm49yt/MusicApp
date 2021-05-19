import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../config/colors';
import {SecondaryButton} from '../../components/buttons/SecondaryButton/SecondaryButton';
import {PrimaryButton} from '../../components/buttons/PrimaryButton/PrimaryButton';
import {PrimaryInput} from '../../components/forms/PrimaryInput/PrimaryInput';
import {SecondaryInput} from '../../components/forms/SecondaryInput/SecondaryInput';
import {fonts} from '../../config/fonts';

export default class SignUp  extends React.Component {

    // const [userName, setuserName] = useState('Alan Walker');
    // const [email, setemail] = useState('alan@vnu.edu.vn');
    // const [password, setpassword] = useState('12345678');
      constructor(props) {
          super(props);
          this.state = { 
            userName: 'alan' ,
            email: 'alan@gmail.com',
            password: '12345678',
        };
      }
      handleSignUp = () => {
        // TODO: Firebase stuff...
        this.props.navigation.navigate('GettingStarted')
      }
    render() {
      return (
        <View style={styles.container}>
            <Image
              style={styles.vector1}
              source={require('../../../assets/images/vector1.png')}
              />
              <Image
                  style={styles.vector2}
                  source={require('../../../assets/images/vector2.png')}
              />
              <Image
                  style={styles.vector3}
                  source={require('../../../assets/images/vector3.png')}
              />
              <Image
                  style={styles.vector4}
                  source={require('../../../assets/images/vector4.png')}
              />
              <View style={styles.contentContainer}>
                  <Image
                      style={styles.back}
                      source={require('../../../assets/images/back.png')}
                  />
                  <Text style={styles.heading}>Create your account</Text>
                  <View style={styles.btnWrapper}>
                      <View style={styles.btnItemWrapper}>
                          <SecondaryButton
                          label={'CONTINUE WITH FACEBOK'}
                          background={colors.facebookBg}
                          fontColor={colors.white}
                          btnType="FACEBOOK"
                          />
                      </View>
                      <View style={styles.btnItemWrapper}>
                          <SecondaryButton
                          label={'CONTINUE WITH GOOGLE'}
                          background={colors.white}
                          btnType="GOOGLE"
                          fontColor={colors.heading}
                          />
                      </View>
                  </View>
                  <Text style={styles.or}>OR LOGIN WITH EMAIL</Text>
                  <View style={styles.inputItem}>
                      <PrimaryInput
                          placeHolder={'User Name'}
                          isValid={true}
                          value={this.props.userName}
                      />
                  </View>
                  <View style={styles.inputItem}>
                      <PrimaryInput
                          value={this.props.email}
                          placeHolder={'Email Address'}
                          isValid={true}
                      />
                </View>
                <View style={styles.inputItem}>
                    <SecondaryInput  value={this.props.password} placeHolder={'Password'}/>
                </View>

                  <View style={styles.privacyPolicyCheckWrapper}>
                      <TouchableOpacity style={styles.privacyPolicyLabelWrapper}>
                          <Text style={styles.subTitle}>I have read the</Text>
                          <Text style={styles.link}>Privace Policy</Text>
                      </TouchableOpacity>
                      <Image 
                          style={styles.checkBox}
                          source={require('../../../assets/images/checkbox.png')}
                      />
                  </View>
                  <View style={styles.getStartedbtnItemWrapper}>
                      <TouchableOpacity onPress={this.handleSignUp}>
                      <PrimaryButton label={'GET STARTED'} />
                      </TouchableOpacity>
                  </View>
              </View>
        </View>
      );
   };
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
        marginLeft:5,
      },
      privacyPolicyLabelWrapper: {
        flexDirection: 'row',
      },
      getStartedbtnItemWrapper: {
        marginTop: 30,
      },
});

