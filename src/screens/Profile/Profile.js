import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../config/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import Toast from "react-native-toast-message";
import useAxios from "axios-hooks";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Action = ({ title, iconame, color }) => {
  return (
    <View style={styles.actions}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={iconame} color={color} size={30} />
      </View>

      <Text style={styles.actionTitle}>{title}</Text>

      <MaterialCommunityIcons
        name="chevron-right"
        color={color}
        size={30}
        style={styles.moreIcon}
      />
    </View>
  );
};

export default function Profile(props) {
  const [user, setUser] = useState({username:'',phone:''});
  
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("access_token");
        let user = JSON.parse(value);
        setUser(user);
       
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() =>{
    _retrieveData(); 
  },[])
  handleSetting = () => {
    // TODO: 
    props.navigation.navigate("Setting");
  };
  handleAction = () => {
    // TODO:  
    props.navigation.navigate("Playlists");
  };
  handleAction3 = () => {
    // TODO:  
    props.navigation.navigate("EditProfile");
  };
  
  console.log('user',user)

  return (
    <SafeAreaView style={styles.container}>
      {/* Headers */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerRightBtnsWrapper}>
          <MaterialCommunityIcons
            name="arrow-left-circle-outline"
            color="#36454f"
            size={35}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          style={styles.headerRightBtnsWrapper}
          onPress={handleSetting}
        >
          <MaterialCommunityIcons
            name="cog-outline"
            color="#36454f"
            size={30}
          />
        </TouchableOpacity>
      </View>

      {/* content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {/* user info */}
        <View style={styles.userWrapper}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/user.png")}
          />

          <View style={styles.profileInfos}>
            <View style={styles.nameSection}>
              <Text style={styles.nameSectionAcc}>{user.username}</Text>
              <Text style={{ color: colors.white }}>+84{user.phone}</Text>
            </View>
          </View>
        </View>
        {/* action */}
        <TouchableOpacity style={styles.actions} onPress={handleAction}>
          <Action
            title={"Like"}
            iconame={"heart-multiple-outline"}
            color={"#fe4a49"}
          />
        </TouchableOpacity>
         
        <TouchableOpacity style={styles.actions} onPress={handleAction3}>
          <Action
            title={"Edit Profile"}
            iconame={"account-edit-outline"}
            color={"#88d8b0"}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
