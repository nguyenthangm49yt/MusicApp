import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { colors } from "../../config/colors";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles";
import { EditForm } from "../../components/forms//EditForm/EditForm";
import Toast from "react-native-toast-message";
import useAxios from "axios-hooks";
import axios from "axios";
import {URL} from './../../utils'
import AsyncStorage from "@react-native-async-storage/async-storage";
const InfoBox = ({ title, placeHolder, value, onChangeText }) => {
  const onChange = (text) => {
    value = text;
    onChangeText(text);
  };
  return (
    <View>
      {/* title of infoBox */}
      <View style={styles.titleForm}>
        <Text style={{ fontSize: 18 }}>{title}</Text>
      </View>

      {/* info */}
      <View style={styles.infoBox}>
        <View style={styles.form}>
          <EditForm
            placeHolder={placeHolder}
            onChange={(text) => onChange(text)}
            value={value}
          />
        </View>
      </View>
    </View>
  );
};

export default function EditProfile(props) {
    const [id, setId] = useState(null);
  useEffect(() => {
    _retrieveData();
  }, []);
  const [{ data: putData, loading: putLoading, error: putError }, executePost] =
    useAxios(
      {
        url: `${URL}/api/user/edit-profile/${id}`,
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
      { manual: true }
    );
  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState(null);
  const onChangeUserName = (text) => {
    setUsername(text);
  };
  const onChangePhone = (text) => {
    setPhone(Number(text));
  };
  const handleBack = () => {
    // TODO:.
    props.navigation.goBack();
  };
  const _storeData = async (response) => {
    console.log(response)
    let jsonValue = JSON.stringify(response);
    try {
      await AsyncStorage.setItem(
        'access_token',
        jsonValue
      );
    } catch (error) {
      // Error saving data
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("access_token");
      let user = JSON.parse(value);
      if (value !== null) {
        setUsername(user.username);
        setPhone(user.phone);
        setId(user.id)
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  if(putData) {
    Toast.show({
        text1: 'Update success'
      });
      _storeData(putData);
  }
  const handleSave = () => {
    // TODO:
    Alert.alert("Save", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          executePost({
            data: {
              username: username,
              phone: phone,
            },
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
         <Toast ref={(ref) => Toast.setRef(ref)} />
      {/* Headers */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerRightBtnsWrapper}
          onPress={handleBack}
        >
          <MaterialCommunityIcons
            name="arrow-left-circle-outline"
            color="#36454f"
            size={35}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit your Profile</Text>
        <TouchableOpacity
          style={styles.headerRightBtnsWrapper}
          onPress={handleSave}
        >
          <MaterialCommunityIcons
            name="content-save-edit-outline"
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
        {/* user name and email */}
        <View style={styles.userWrapper}>
          <Image
            style={styles.image}
            source={require("../../../assets/images/user.png")}
          />

          <View style={styles.profileInfos}>
            <View style={styles.nameSection}>
              <Text style={styles.nameSectionAcc}>{username}</Text>
              <Text style={{ color: colors.white }}>+84{phone}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.titleForm}>User's name</Text>
        <TextInput
          value={username}
          onChangeText={onChangeUserName}
          style={styles.input}
          placeHolder="username"
        />

        <Text style={styles.titleForm}>Phone</Text>
        <TextInput
          value={"0" + phone?.toString()}
          keyboardType = 'numeric'
          onChangeText={onChangePhone}
          style={styles.input}
          placeHolder="phone"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
