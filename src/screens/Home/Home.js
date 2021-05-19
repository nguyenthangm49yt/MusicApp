import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {colors} from '../../config/colors';
import {styles} from './styles';
//import { Audio } from 'expo-av';
import { AppStatus } from '../../../AppStatus';

const Recommend = [
    {
        id: '1',
        title: 'Wild Dream',
        author: 'Taylor Swift',
        imageUrl: require('../../../assets/images/album.png'),
        musicUrl: require('../../../assets/music/wild-dream.mp3'),
    },
    {
        id: '2',
        title: 'See You Again',
        author: 'Charlie Puth',
        imageUrl: require('../../../assets/images/album1.jpg'),
        musicUrl: require('../../../assets/music/see-you-again.mp3'),
    },
    {
        id: '3',
        title: 'A Thousand Year',
        author: 'Christina Perri',
        imageUrl: require('../../../assets/images/album2.jpg'),
        musicUrl: require('../../../assets/music/A-Thousand-Years.mp3'),
    },
    
]

const MusicItem  = (props) => {
    const {imageUrl, author, title, musicUrl, id} = props;
    const { setSongId } = React.useContext(AppStatus);

    const onPlay = () => {
     //  console.log(id)
        setSongId(id);
      }
    // phan hien thi
    return (
        <TouchableOpacity style={styles.recommendItem} 
        onPress={onPlay} >
            <View >
                <Image source={imageUrl} style={styles.imageMusic}/>
            </View>
                
            <Text
                style={styles.title}>
                {title}
            </Text>
            <Text
                style={styles.author}>
                {author}
            </Text>
        </TouchableOpacity>
    );
};

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
                        <Text style={styles.heading}>Good Morning, Afsar</Text>
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
                    
                    <View style={styles.recommendWrapper}>
                        <Text style={styles.recommendTitle}>Recommend for you</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>            
                            {/* <View style={styles.recommendCard}>
                                {/* <View style={[
                                            styles.recommendImgWrapper,
                                            {backgroundColor: '#afdbc5'},
                                ]}>
                                    <Image source={require('../../../assets/images/recommend1.png')}/>
                                </View>
                                <View style={styles.recommendCardContentWrapper}>
                                    <Text style={styles.recommentContentTitle}>Focus</Text>
                                    <Text style={styles.recommentContentSubTitle}>
                                        MEDITATION - 3-10 MIN
                                        
                                    </Text>
                                    
                                </View> 
                            </View> */}
                        {Recommend.map((item, index) => {
    
                            return(
                                <MusicItem key={index}
                                id={item.id} 
                                imageUrl={item.imageUrl} 
                                author={item.author} 
                                title={item.title} 
                                musicUrl={item.musicUrl} />
                            );
                            })
                        }
                        
                        </ScrollView>
                    </View>
    
                    <View style={styles.recommendWrapper}>
                        <Text style={styles.recommendTitle}>US UK popular song</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>            
                       
                        {Recommend.map((item, index) => {
    
                            return(
                                <MusicItem key={index}
                                id={item.id}
                                imageUrl={item.imageUrl} 
                                author={item.author} 
                                title={item.title} 
                                musicUrl={item.musicUrl} />
                            );
                            })
                        }
                        
                        </ScrollView>
                    </View>
                    
                </ScrollView>
            </View>
        );
    }
    
};