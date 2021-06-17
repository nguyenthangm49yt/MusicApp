import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {colors} from '../../../config/colors';

export const SecondaryInput = (props) => {
    const {placeHolder, value} = props;
    return (
        <View style={styles.container}>
            <TextInput value={value}
                secureTextEntry={true}
                style={styles.input}
                placeHolder={placeHolder}
                onChangeText = {text => props.onChange(text)}
            />
            <View style={styles.eyeWrapper}>
                <Image source={require('../../../../assets/images/eye.png')}/>
            </View>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#eeeeee',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      padding: 20,
    },
    eyeWrapper: {
      marginRight: 15,
    },
  });