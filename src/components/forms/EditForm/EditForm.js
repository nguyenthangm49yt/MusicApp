import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image,TouchableOpacity} from 'react-native';
import {colors} from '../../../config/colors';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import useAxios from 'axios-hooks'
import axios from 'axios'
export const EditForm = (props) => {
    const {placeHolder, value} = props;
    const [text, onChangeText] = useState(value);
   
    return (
        <View style={styles.container}>
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
      borderRadius: 15,
      justifyContent: 'space-between',
      borderColor: '#dddddd',
      borderWidth: 1,
      flexDirection: 'row',
    },
    input: {
      padding: 20,
    //backgroundColor: "#dccddc",
      width:"90%",
    },
    clearBtn:{
      width:40,
      height:40,
      color: "#d6d7da",
      position: 'relative',
      left:2,
      top:10,  
      padding:10,
    //  backgroundColor: "#ddd",
      
    },
  });