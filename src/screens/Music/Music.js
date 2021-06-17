import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import TrackPlayer, {
  Capability,
  useTrackPlayerEvents,
  usePlaybackState,
  TrackPlayerEvents,
  STATE_PLAYING,
  Event,
} from 'react-native-track-player';

import song from './data';
import axios from "axios";
import {  URL} from '../../utils';
import { AppStatus } from '../../../AppStatus';
import Controller from './Controller';
import SliderComp from './SliderComp';
import {PLAYBACK_TRACK_CHANGED} from 'react-native-track-player/lib/eventTypes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');
 

const TRACK_PLAYER_CONTROLS_OPTS = {
  waitforBuffer: true,
  stopWithApp: false,
  alwaysPauseOnInterruption: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    TrackPlayer.CAPABILITY_SEEK_TO,
  ],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  ],
};

export default function Music() {
 // using for load songs
  const [songs, setSong] = React.useState([]);
  const { songId } = React.useContext(AppStatus);
  const { playlistId } = React.useContext(AppStatus);

 //using for play song
  const [songIndex, setSongIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const index = useRef(0);

 

  const isItFromUser = useRef(true);

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;
  const playbackState = usePlaybackState();

 
  useEffect(() => {
    
    if(!songs.length && playlistId){
      //load song if playing is a playlists
       axios.get(`${URL}/songs-genre/${playlistId}`)
      .then(res => {
      
      const data_songs = res.data.songs
      
      const data = data_songs.map(
        ({id,  songTitle, path, path_img, artists }, index) => ({
          
          id: (index+1).toString(),
          title: songTitle,
          artist: artists[0].artistName,
          artwork: path_img,
          url: path,
          duration: 3 * 60 + 49
        })
      );
      setSong(data)
     
      })
      .catch(error => console.log(error));

    }

    else if(!songs.length && !playlistId){
        //load once song if playing is a song

      axios.get(`${URL}/song/${songId}`)
      .then(res => {
      
      const data_songs = [res.data]
      
      const data = data_songs.map(
        ({song, artists }, index) => ({
          
          id: (index+1).toString(),
          title: song[0].songTitle,
          artist: artists[0].artistName,
          artwork: song[0].path_img,
          url: song[0].path,
          duration: 3 * 60 + 40
        })
      );

        setSong(data)
        // console.log('d',songId);
        // console.log('pid',playlistId);
      })
      .catch(error => console.log(error));
    }
    else{
          scrollX.addListener(({value}) => {
          const val = Math.round(value / width);

          setSongIndex(val);
        });

        TrackPlayer.setupPlayer().then(async () => {
          // The player is ready to be used
          console.log('Player ready', songs);

          // add the array of songs in the playlist
          await TrackPlayer.reset();

      
            
          await TrackPlayer.add(songs);
          TrackPlayer.play();
          isPlayerReady.current = true;

          await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);

          //add listener on track change
          TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, async e => {
            console.log('song ended', e);

            const trackId = (await TrackPlayer.getCurrentTrack()) - 1; //get the current id

            console.log('track id', trackId, 'index', index.current);

            if (trackId !== index.current) {
              setSongIndex(trackId);
              isItFromUser.current = true;

              if (trackId > index.current) {
                goNext();
              } else {
                goPrv();
              }
              // setTimeout(() => {
              //   isItFromUser.current = true;
              // }, 200);
            }

            // isPlayerReady.current = true;
          });

          // monitor intterupt when other apps start playing music
          TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_DUCK, e => {
            // console.log(e);
            if (e.paused) {
              // if pause true we need to pause the music
              TrackPlayer.pause();
            } else {
              TrackPlayer.play();
            }
          });
        });
    }
    return () => {
      scrollX.removeAllListeners();
       

      // exitPlayer();
    };
  }, [scrollX,songs]);

  // change the song when index changes
  useEffect(() => {
    if (isPlayerReady.current) {
      TrackPlayer.skip(songs[songIndex].id)
        .then(_ => {
          console.log('changed track');
        })
        .catch(e => console.log('error in changing track ', e));
    }
    index.current = songIndex;
  }, [songIndex]);

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: (index.current + 1) * width,
    });

    await TrackPlayer.play();
  };
  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: (index.current - 1) * width,
    });

    await TrackPlayer.play();
  };

  const handleLikebtn = () => {
    const _storeData = async (response) => {
      console.log(response.data)
      let jsonValue = JSON.stringify(response.data);
      try {
        await AsyncStorage.setItem(
          'access_token',
          jsonValue
        );
      } catch (error) {
        // Error saving data
      }
    };

    axios.post(`${URL}/api/user/add-favoritelist`, {
        id: '1', song_id: songId
    })
        .then(response => {
          
          Toast.show({
            text1: 'Add Favorite success'
          });
          _storeData(response)
         
        })
        .catch(error => {
          alert(error)
          Toast.show({
            text1: 'Fail to Add Favorite'
          });
        });
  }


  const renderItem = ({index, item}) => {
    return (
      <Animated.View
        style={{
          alignItems: 'center',
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -100,
              ),
            },
          ],
        }}>
        <Animated.Image
          source= {{uri:item.artwork}}
          style={{width: 320, height: 320, borderRadius: 180}}
        />
      </Animated.View>
    );
  };

  return (
        <SafeAreaView style={styles.container}>
          <Toast ref={(ref) => Toast.setRef(ref)} />
          <TouchableOpacity style={styles.likeBtn}
                    onPress={handleLikebtn}
                    >
                        <MaterialCommunityIcons name={0 ? 'cards-heart' :  'heart-outline'} color="#000" size={33} />   
           </TouchableOpacity>
          
          <SafeAreaView style={{height: 320, marginTop: 20,}}>
            <Animated.FlatList
              ref={slider}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              data={songs}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true},
              )}
            />
          </SafeAreaView>
          <View>
            <Text style={styles.title}>{songs.length ? songs[songIndex].title : ""}</Text>
            <Text style={styles.artist}>{songs.length ? songs[songIndex].artist : ""}</Text>
          </View>

          <SliderComp />

          <Controller onNext={goNext} onPrv={goPrv} />
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#000',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    textTransform: 'capitalize',
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height,
    maxHeight: 600,
  },
  likeBtn: {
    right:20,
    
    
  }
});