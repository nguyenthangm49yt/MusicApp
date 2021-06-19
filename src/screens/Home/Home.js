import React, { useState, useEffect } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
import useAxios from "axios-hooks";
import axios from "axios";
import {  URL} from '../../utils';
import { AppStatus } from '../../../AppStatus';
import { useNavigation } from '@react-navigation/native'; 
import Carousel from '../../components/Carousel/Carousel'
import { urlCarousel } from '../../components/Carousel/Data'
import { LogBox } from 'react-native';


 

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

    const {id} = props;
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
    
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    render(){
        LogBox.ignoreAllLogs()
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
                    
                    <Carousel data = {urlCarousel}/>

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