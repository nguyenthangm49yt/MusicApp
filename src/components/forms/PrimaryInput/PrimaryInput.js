import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {colors} from '../../../config/colors';

export const PrimaryInput = (props) => {
  const {placeHolder, isValid, value} = props;
  const [text, onChangeText] = React.useState(value);
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        style={styles.input}
        placeholder={placeHolder}
        onChangeText={onChangeText} />
      <View style={styles.validityShowWrapper}>
        {isValid ? (
          <Image source={require('../../../../assets/images/checked.png')} />
        ) : null}
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
   // fontFamily: 'HelveticaNeue',
  },
  input: {
    padding: 20,
    fontSize: 16,
  },
  validityShowWrapper: {
    marginRight: 15,
  },
});
