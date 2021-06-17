import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../config/colors';
import { styles } from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FindForm } from '../../components/forms/FindForm/FindForm';
import { validateEmail, URL } from '../../utils';
import useAxios from 'axios-hooks'
import axios from 'axios'
import {Action} from './../Playlists/Playlists'
import Toast from 'react-native-toast-message';
import { AppStatus } from '../../../AppStatus';
import { useNavigation } from '@react-navigation/native'; 


export const FindScreen = () => {
    const navigation = useNavigation();
    const [keyword, setKeyword] = useState('');

    const { setSongId } = React.useContext(AppStatus);
    const { setPlaylistId } = React.useContext(AppStatus);
    
    const onPlay = (id, pid) => {
        //console.log(id)
          setSongId(id.toString());
          // setPlaylistId(pid.toString());
          setPlaylistId("");
          
          navigation.navigate('Music')
        }


    let list =  
        <Text>
            Not found
        </Text>;
    const onSearch = (text) => {
        setKeyword(text)
    }
    const [{ data, loading, error }, refetch] = useAxios(
        `${URL}/songs-search?search=${keyword}`
    )
    if (data) {
        if(data.songs.length==0) {
           list= 
           <Text>
               Not found
            </Text>
        }
        else if(data.songs[`\u0000*\u0000items`].length == 0) {
            list= 
            <Text>
                Not found
            </Text>
        }
        else {
            let songs = data.songs[`\u0000*\u0000items`]
            list = songs.map((item, index) =>{
                return (
                    <TouchableOpacity style={styles.actions} key={index}
                     onPress={() => onPlay(item.id,"")}>
                        <Action name={item.songTitle} author= {item.artists[0] ? item.artists[0].artistName :''} 
                         path_img={item.path_img}
                        iconame={'heart-multiple-outline'} color={'#fe4a49'}/>
                    </TouchableOpacity>
                )
            })
        }
    }
    return (
        <View style={styles.container}>
              <Toast ref={(ref) => Toast.setRef(ref)} />
              
            {/* Headers */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerRightBtnsWrapper}>

                    <MaterialCommunityIcons name="arrow-left-circle-outline" color="#36454f" size={35} />
                </TouchableOpacity>

                <View style={styles.form}>
                    <FindForm
                        onSearch={(text) => onSearch(text)}
                        placeHolder={"Search"}

                        value={"find something"}
                    />
                </View>
            </View>
            
            <View style={styles.content}>
                <ScrollView style={styles.contentResult}>
                    {list}
                </ScrollView>
            </View>
        </View>
    );
};