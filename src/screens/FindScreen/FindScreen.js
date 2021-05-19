import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FindForm} from '../../components/forms/FindForm/FindForm';

 export const FindScreen = () => {
   return (
       <View style={styles.container}>
          {/* Headers */}
          <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}>
                    
                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>  
                
                <View style={styles.form}>
                    <FindForm 
                            placeHolder={"Search"}
                            
                            value={"find something"}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>
                    Kết quả tìm kiếm
                </Text>
                <ScrollView style={styles.contentResult}>
                
                </ScrollView>
            </View>
       </View>
   );  
 };