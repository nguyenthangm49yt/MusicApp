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

export default function Playlists2()  {
    const { setSongId } = React.useContext(AppStatus);
    const { setPlaylistId } = React.useContext(AppStatus);

    const { playlistId } = React.useContext(AppStatus);
    const [genreTitle, setGenreTitle] = React.useState('')

    const [playlist, setPlaylist] = React.useState([])
    const navigation = useNavigation();
   
    useEffect(() => {
        axios.get(`${URL}/songs-genre/${playlistId}`)
       .then(res => {
       
       const songs = res.data.songs
       setPlaylist( songs)

       const result = songs[0].genres.find(item => item.id === playlistId)
      
       setGenreTitle(result.genreTitle)
      
        console.log(genreTitle)
       })
       .catch(error => console.log(error));

   }, []);
   
   const onPlay = (id, pid) => {
    //console.log(id)
      setSongId(id.toString());
      // setPlaylistId(pid.toString());
      setPlaylistId(playlistId);
      
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
                <Text style={styles.headerTitle}>Playlist</Text>
                <TouchableOpacity 
                style={styles.headerRightBtnsWrapper}
               >
               
               <MaterialCommunityIcons name="help-circle-outline" color="#36454f" size={30} />
                </TouchableOpacity>
            </View>

             {/* content */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:30}}>
                      {/* header info */}
                <View style={styles.headerPlaylistWrapper}>
                     
                        <Image style={styles.image} source={{uri: playlist[0]?.path_img}}/>
                    
                    <View style={styles.playlistInfos}>
                        <View style={styles.nameSection}>
                            <Text style={styles.nameSectionTitle}>{genreTitle}</Text>
                            <Text style={{color: colors.white}}>các bài hát thuộc thể loại {genreTitle}</Text>
                        </View>
                    </View>
                </View>
                  {/* action */}

                  { playlist?.map((item, index) => {

                    return(
                        <TouchableOpacity style={styles.actions}
                        onPress={() => onPlay(item.id,"")}>
                           <Action name={item.songTitle} author={ ''}
                           path_img={item.path_img}
                           iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                       </TouchableOpacity>

                    )
                    })
                }
             
            
          
                
                
            </ScrollView>
        </SafeAreaView>
    );
   
};
