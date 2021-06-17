import React, { useState, useEffect } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
import useAxios from "axios-hooks";
import axios from "axios";
import {  URL} from '../../utils';
import { AppStatus } from '../../../AppStatus';
import { useNavigation } from '@react-navigation/native'; 
 
const MusicItem  = (props) => {
    const {path_img, artists, songTitle, path, id, pid} = props;
    const { setSongId } = React.useContext(AppStatus);
    const { setPlaylistId } = React.useContext(AppStatus);

    const navigation = useNavigation();
    const { songId } = React.useContext(AppStatus);
    
    const onPlay = () => {
      //console.log(id)
        setSongId(id.toString());
        // setPlaylistId(pid.toString());
        setPlaylistId("");
        
        navigation.navigate('Music')
      }
    // phan hien thi
    return (
        <TouchableOpacity style={styles.recommendItem} 
        onPress={onPlay} >
            <View >
                <Image source={{uri:path_img}} style={styles.imageMusic}/>
            </View>
                
            <Text
                style={styles.title}>
                {songTitle}
            </Text>
            <Text
                style={styles.author}>
                {artists}
            </Text>
        </TouchableOpacity>
    );
};


const PlaylistItem = (props) => {

    const {  id} = props;
    // Create state variables
    const [playlist, setPlaylist] = React.useState([])
    const [genreTitle, setGenreTitle] = React.useState('')
    const [genreId, setGenreId] = React.useState('')
    // fetches data

    
    useEffect(() => {
         axios.get(`${URL}/songs-genre/${id}`)
        .then(res => {
        
        const songs = res.data.songs
        setPlaylist( songs)
        const result = songs[0].genres.find(item => item.id === id)
        setGenreId(result.id);
        setGenreTitle(result.genreTitle)
        })
        .catch(error => console.log(error));

    }, []);
   
    return (
        <View style={styles.recommendWrapper}>
 
            <Text style={styles.recommendTitle}>{genreTitle} </Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>            
            
            { playlist?.map((item, index) => {

                return(
                    <MusicItem key={index}
                    id={item.id}
                    pid={genreId}
                    path_img={item.path_img} 
                    artists={item.artists.artistName} 
                    songTitle={item.songTitle} 
                    path={item.path} />

                )
                })
            }
            
            </ScrollView>
         </View>
    )
}

export default class Home extends React.Component {
     
    render(){
        
        return (
            <View style={styles.container}>
               
               <Image
                style={styles.logo}
                source={require('../../../assets/images/logo.png')}
                />
               
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.header}>
                        <Text style={styles.heading}>Hello</Text>
                        <Text style={styles.subHeading}>We Wish you have a good day</Text>
                    </View>
                    <View style={styles.sectionWrapper1}>
                        <View style={styles.item1}>
                            <Image
                                style={styles.basicImg}
                                source={require('../../../assets/images/basicImg.png')}
                            />
                            <View style={styles.cardContent}>
                                <Text style={[styles.cardTitle, {color: colors.whiteShade}]}>
                                    Basic
                                </Text>
                                <Text style={[styles.cardSubTitle, {color: colors.whiteShade}]}>
                                    COURSE
                                </Text>
                            </View>
                            <View style={styles.cardFooterWrapper}>
                                <View>
                                    <Text style={[styles.cardTitle, {color: colors.whiteShadeBg}]}>
                                        3-10 MIN
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                    style={[styles.cardBtn,
                                    {backgroundColor: colors.whiteShadeBg}]}>
                                        <Text style={styles.btnLabel}>START</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
    
                        <View style={styles.item2}>
                            <Image
                                style={styles.basicImg}
                                source={require('../../../assets/images/relaxationimg.png')}
                            />
                            <View style={styles.cardContent}>
                                <Text style={[styles.cardTitle, {color: colors.whiteShade}]}>
                                Relaxation
                                </Text>
                                <Text style={[styles.cardSubTitle, {color: colors.whiteShade}]}>
                                MUSIC
                                </Text>
                            </View>
                            <View style={styles.cardFooterWrapper}>
                                <View>
                                    <Text style={[styles.cardTitle, {color: colors.whiteShadeBg}]}>
                                        3-10 MIN
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                    style={[styles.cardBtn,
                                    {backgroundColor: colors.whiteShadeBg}]}>
                                        <Text style={styles.btnLabel}>START</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.dailyThoughtsWrapper}>
                        <Image style={styles.bgShape1}
                            source={require('../../../assets/images/bgShape1.png')}
                        />
                        <Image
                            style={styles.bgShape2}
                            source={require('../../../assets/images/bgShape2.png')}
                        />
                        <Image
                            style={styles.bgShape3}
                            source={require('../../../assets/images/bgShape3.png')}
                        />
                        <View style={styles.daily}>
                            <View>
                                <Text style={styles.dailyTitle}>Daily Thought</Text>
                                <Text style={styles.dailySubTitle}>MEDITATION - 3-10 MIN</Text>
                            </View>
                        
                            <Image source={require('../../../assets/images/player.png')} 
                            style={{left:170, top:5}}/>
                        </View>
                    </TouchableOpacity>
                    
                     
                    <PlaylistItem id={2} ></PlaylistItem>
                    <PlaylistItem id={3} ></PlaylistItem>
                    <PlaylistItem id={4} ></PlaylistItem>
                    <PlaylistItem id={5} ></PlaylistItem>
                    <PlaylistItem id={6} ></PlaylistItem>
                    
                    
                    
                </ScrollView>
            </View>
        );
    }
    
};