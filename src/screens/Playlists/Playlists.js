import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, ScrollView,TouchableOpacity, Alert } from 'react-native';
import {colors} from '../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles'
import { useNavigation } from '@react-navigation/native'; 
import {  URL} from '../../utils';
import { AppStatus } from '../../../AppStatus';
import useAxios from 'axios-hooks'
import axios from 'axios'

export const Action = ({name, author, iconame, color, path_img}) => {
    color = colors.facebookBg; 
    return(
        <View style={styles.actions}>
                <View style={styles.musicImg}>
                    {/* <MaterialCommunityIcons name="file-music-outline" color={color} size={30} /> */}
                    <Image source={{uri:path_img}}  style={{width:40, height:40}}></Image>
                </View>
                
                <View style={styles.actionTitle}>
                    <Text style={styles.actionTitleName}>{name}</Text>
                    <Text style={styles.actionTitleAuthor}>{author}</Text>
                </View>
            
                <MaterialCommunityIcons name="chevron-right" color={color} size={30} style={styles.moreIcon}/> 
        </View>
    )
}

export default function Playlists()  {
    const { setSongId } = React.useContext(AppStatus);
    const { setPlaylistId } = React.useContext(AppStatus);
    const { playlistId } = React.useContext(AppStatus);
    const [playlist, setPlaylist] = React.useState([])
    const navigation = useNavigation();
   
    useEffect(() => {
        axios.get(`${URL}/api/user/favourite-list/1`)
       .then(res => {
       
       const songs = res.data.song
       setPlaylist( songs)
        // console.log(songs[0][0])
       })
       .catch(error => console.log(error));

   }, []);
   
   const onPlay = (id, pid) => {
    //console.log(id)
      setSongId(id.toString());
      // setPlaylistId(pid.toString());
      setPlaylistId("");
      
      navigation.navigate('Music')
    }

   
    
    const handleAdd = () => {
        // TODO:  
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
      const handleBack = () => {
        // TODO:  
        navigation.goBack();
      }
   
    return (
        <SafeAreaView style={styles.container}>
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}
                 onPress={handleBack}>
                    
                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>  
                <Text style={styles.headerTitle}>Favorite list</Text>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
                onPress={handleAdd}>
               
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
                            <Text style={styles.nameSectionTitle}>Favorite Song</Text>
                            <Text style={{color: colors.white}}>danh sách các bài hát yêu thích</Text>
                        </View>
                    </View>
                </View>
                  {/* action */}

                  { playlist?.map((item, index) => {

                    return(
                        <TouchableOpacity style={styles.actions}
                        onPress={() => onPlay(item[0].id,"")}>
                           <Action name={item[0].songTitle} author={ ''}
                           path_img={item[0].path_img}
                           iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                       </TouchableOpacity>

                    )
                    })
                }
             
            
          
                
                
            </ScrollView>
        </SafeAreaView>
    );
   
};
