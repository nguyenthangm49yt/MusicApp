import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, Image,TouchableOpacity} from 'react-native';
 import {colors} from '../../config/colors';
import {styles} from './styles';
 
import {  URL} from '../../utils';
import { AppStatus } from '../../../AppStatus';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'; 
const urls = [
    {
     url: require( '../../../assets/images/medicationTypes/1.png'),
    },
    {
        url: require( '../../../assets/images/medicationTypes/2.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/3.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/4.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/5.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/6.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/7.png'),
       },
    
       {
        url: require( '../../../assets/images/medicationTypes/8.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/9.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/10.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/11.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/12.png'),
        
       },
       {
        url: require( '../../../assets/images/medicationTypes/13.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/14.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/15.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/16.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/17.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/18.png'),
       },
       {
        url: require( '../../../assets/images/medicationTypes/19.png'),
       },
      

]
 
const Album = (props) => {
    const navigation = useNavigation();
    const {id} = props;
   
    const [genreTitle, setGenreTitle] = React.useState('')
    const { setPlaylistId } = React.useContext(AppStatus);
    

    useEffect(() => {
        axios.get(`${URL}/songs-genre/${id}`)
       .then(res => {
       
       const songs = res.data.songs
       
       const result = songs[0].genres.find(item => item.id === id)
       
       setGenreTitle(result.genreTitle)
       })
       .catch(error => console.log(error));

   }, []);

   const gotoPlaylist = (id) =>{
    setPlaylistId(id)
    navigation.navigate('Playlists2')
   }
   return (
       <TouchableOpacity style={styles.card}
       onPress={() => gotoPlaylist(id)}
       >
            <Image style={styles.cardImg}
            source={urls[id-1].url}
            />
            <Text style={styles.card1Txt}>{genreTitle}</Text>
        </TouchableOpacity>

    );
};

export default class Meditate extends React.Component  {
 
render() {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Meditate</Text>
            <Text style={styles.description}>
                Free music store for you to explore.
            </Text>
           
            <ScrollView showsVerticalScrollIndicator={false}>
             
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={1} ></Album>
                            <Album id={2} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={3} ></Album>
                            <Album id={4} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={5} ></Album>
                            <Album id={6} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Album id={7} ></Album>
                        <Album id={8} ></Album>
                        
                    </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={10} ></Album>
                            <Album id={11} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={12} ></Album>
                            <Album id={13} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={14} ></Album>
                            <Album id={15} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={16} ></Album>
                            <Album id={17} ></Album>
                            
                        </View>

                    </View>
                    <View style={styles.medicationTypeCards}>
                    
                        <View style={{flexDirection: 'row'}}>
                            <Album id={18} ></Album>
                            <Album id={19} ></Album>
                            
                        </View>

                    </View>
                </ScrollView>
          
        </View>
    );
    }
};