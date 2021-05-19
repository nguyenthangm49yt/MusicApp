import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity, Alert } from 'react-native';
import {colors} from '../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native'; 

const Action = ({name, author, iconame, color}) => {
    const navigation = useNavigation();
    color = colors.facebookBg; 
    return(
        <TouchableOpacity style={styles.actions}
        onPress={() => navigation.navigate('Music')}>
                <View style={styles.musicImg}>
                    <MaterialCommunityIcons name="file-music-outline" color={color} size={30} />
                
                </View>
                
                <View style={styles.actionTitle}>
                    <Text style={styles.actionTitleName}>{name}</Text>
                    <Text style={styles.actionTitleAuthor}>{author}</Text>
                </View>
            
                <MaterialCommunityIcons name="chevron-right" color={color} size={30} style={styles.moreIcon}/> 
        </TouchableOpacity>
    )
}

export default class Playlists extends React.Component {
    handleAdd = () => {
        // TODO: Firebase stuff...
       // this.props.navigation.navigate('Setting').
        Alert.alert(
            "Add a new music",
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
      handleBack = () => {
        // TODO: Firebase stuff...
        this.props.navigation.goBack();
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
                <Text style={styles.headerTitle}>Playlist</Text>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
                onPress={this.handleAdd}>
               
                    <MaterialCommunityIcons name="playlist-plus" color="#36454f" size={30} />
                </TouchableOpacity>
            </View>

             {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:30}}>
                      {/* header info */}
                <View style={styles.headerPlaylistWrapper}>
                     
                        <Image style={styles.image} source={require('../../../assets/images/album.png')}/>
                    
                    <View style={styles.playlistInfos}>
                        <View style={styles.nameSection}>
                            <Text style={styles.nameSectionTitle}>Album's Name</Text>
                            <Text style={{color: colors.white}}>Description</Text>
                        </View>
                    </View>
                </View>
                  {/* action */}
                
                    <Action name={'Music Name'} author={'Author'} iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                    <Action name={'Music Name'} author={'Author'} iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                    <Action name={'Music Name'} author={'Author'} iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
              
                
                
            </ScrollView>
        </SafeAreaView>
    );
    }
};
