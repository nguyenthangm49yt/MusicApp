import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const FindForm = (props) => {
    const {placeHolder, value} = props;
    const [text, onChangeText] = React.useState(value);
    
    return (
        <View style={styles.container}>
            <View style={{marginLeft:5,}}>
                <MaterialCommunityIcons name="search-web" color="#ccc" size={28} /> 
            </View>
            <TextInput value={text}
                onChangeText={onChangeText}
                style={styles.input}
                placeHolder={placeHolder}
            />
              <TouchableOpacity style={styles.clearBtn}
                  onPress={ () => onChangeText({text:""})} >
                <MaterialCommunityIcons name="close" color="#cccccc" size={20} />
              </TouchableOpacity> 
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#eeeeee',
      borderRadius: 90,
      justifyContent: 'space-between',
      alignItems: 'center',
    
      borderColor: '#dddddd',
      borderWidth: 1,
      flexDirection: 'row',
    },
    input: {
        
      padding: 5,
     // backgroundColor: "#dccddc",
      width:"79%",
    },
    clearBtn:{
      width:30,
      height:30,
      color: "#d6d7da",
      position: 'relative',
      padding:5,
    //  backgroundColor: "#ddd",
      
    },
  });