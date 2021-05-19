import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity, Alert} from 'react-native';
import {colors} from '../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles'
import {EditForm} from '../../components/forms//EditForm/EditForm';


const InfoBox = ({title,placeHolder,value}) => {

    return(
        <View>
            {/* title of infoBox */}
            <View style={styles.titleForm}>
                <Text style={{fontSize:18}}>{title}</Text>
            </View>

            {/* info */}
            <View style={styles.infoBox}>
                <View style={styles.form}>
                    <EditForm 
                        placeHolder={placeHolder}
                        
                        value={value}
                    />
                </View>
                   
                        
            </View>
        </View>
    )
}

export default class EditProfile extends React.Component {
    handleBack = () => {
        // TODO:.
        this.props.navigation.goBack();
      }
    handleSave = () => {
        // TODO: 
        Alert.alert(
            "Save",
            "Are you sure?",
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
      }
    
    render(){
    return (
        <SafeAreaView style={styles.container}>
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}
                onPress={this.handleBack}>
                    
                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>  
                <Text style={styles.headerTitle}>Edit your Profile</Text>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
                onPress={this.handleSave}>
               
                    <MaterialCommunityIcons name="content-save-edit-outline" color="#36454f" size={30} />
                </TouchableOpacity>
            </View>

             {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:30}}>
                {/* user name and email */}
                <View style={styles.userWrapper}>
                     
                        <Image style={styles.image} source={require('../../../assets/images/user.png')}/>
                    
                    <View style={styles.profileInfos}>
                        <View style={styles.nameSection}>
                            <Text style={styles.nameSectionAcc}>Name</Text>
                            <Text style={{color: colors.white}}>name@gmail.com</Text>
                        </View>
                    </View>
                </View>

                  {/* info list of user */}
                 <InfoBox title={'Name'} placeHolder={'name'} value={'username'} />
                 <InfoBox title={'Email'} placeHolder={'name@gmail.com'} value={'name@gmail.com'} />
                 <InfoBox title={'Phone'} placeHolder={'Phone'} value={'0123456789'} />
                 
               
                
                
            </ScrollView>
        </SafeAreaView>
    );
    }
};
