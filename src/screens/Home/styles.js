import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';
import { Platform } from 'react-native';



export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 20,
    },
    header: {
        //backgroundColor: colors.primary,
    },
    heading: {
        fontFamily: fonts.font,
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subHeading: {
        fontFamily: fonts.font,
        fontSize: 20,
        fontWeight: '300',
        marginTop: 10,
    },
    sectionWrapper1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    item1: {
        backgroundColor: '#8E97FD',
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    item2: {
        backgroundColor: '#FFC97E',
        flex: 1,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    basicImg: {
        alignSelf: 'flex-end',
    },
    cardContent: {
        position: 'absolute',
        top: '35%',
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: fonts.font,
    },
    cardSubTitle: {
        marginTop: 10,
        fontSize: 11,
    },
    cardFooterWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: '0%',
        alignItems: 'center',
    },
    footerTitle: {
        fontSize: 11,
        fontFamily: fonts.font,
    },
    cardBtn: {
        borderRadius: 50,
    },
    btnLabel: {
        fontFamily: fonts.font,
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        color: colors.heading,
    },
    dailyThoughtsWrapper: {
        flexDirection: 'row',
        //justifyContent: 'space-around',
        backgroundColor: colors.darkBg,
        alignItems: 'center',
        height: 95,
        borderRadius: 10,
        marginTop: 0,
    
    },
    bgShape1: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    bgShape2: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    bgShape3: {
        position: 'absolute',
        right: '40%',
        bottom: 0,
    },
    daily:{
        paddingLeft:10,
        flexDirection:"row",
    },
    dailyTitle: {
        fontSize: 18,
        fontFamily: fonts.font,
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dailySubTitle: {
        color: colors.white,
        fontSize: 11,
        fontFamily: fonts.font,
    },
    recommendWrapper: {
        marginTop: 40,
        
    },
    recommendTitle: {
        fontSize: 24,
        fontFamily: fonts.font,
        color: colors.heading,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    recommendCard: {
       backgroundColor:"#ccc",
        width: 160,
        marginRight: 20,
        
    },
    recommendImgWrapper: {
        borderRadius: 10,
    },
    recommentContentTitle: {
        fontSize: 18,
        fontFamily: fonts.font,
        fontWeight: 'bold',
        color: colors.heading,
        paddingTop: 10,
        paddingBottom: 5,
    },
    recommentContentSubTitle: {
        fontSize: 11,
        fontFamily: fonts.font,

        color: colors.gray,
    },
    recommendItem: {
        //backgroundColor:"#ccc",
         width: 150,
         height: 140,
         marginRight: 20,
         
     },
    author:{
        position:'relative',
       
        fontSize: 14,
       
    },
    title:{
       // backgroundColor: "#DDDDDD",
        position: 'relative',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop:-20,
    },
    imageMusic:{
        
        width: '100%',
        height: '80%',
    }
});