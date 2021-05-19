import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';

export const styles = StyleSheet.create({
  container:{
      flex:1,
      padding:20
  },
  playlistInfos: {
      marginTop: 16,
      paddingHorizontal: 29,
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    marginTop: 5,
    fontSize:25,
    
  },
  headerRightBtnsWrapper: {
    flexDirection: 'row',
    marginTop: 8,
  },
  headerPlaylistWrapper: {
    backgroundColor: colors.primary,
    flexDirection: 'column',
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
  },
  image:{
      width:200,
      height:200,
      borderColor:'#dddddd',
      borderWidth:1,
      borderRadius: 4,
      backgroundColor:"#dcdcdc",
      
  },
  nameSection: {
    alignItems: 'center',
    marginTop:10,
  },
  nameSectionTitle: {
   color: colors.white,
   fontSize:25,
},
  actions: {
      marginTop: 20,
      paddingHorizontal: 5,
      flexDirection: 'row',
     // backgroundColor: "#fe9c8f",
  },
  musicImg: {
      width: 40,
      height: 40,
      borderRadius: 6,
  },
  moreIcon: {
    color: "#d6d7da",
    position: 'absolute',
    left:320,
    
  },
  
  actionTitle: {
    marginLeft:0,
    marginTop: -12,
    padding:10,
   // backgroundColor: colors.facebookBg,
  },
  actionTitleName:{
     fontSize: 16,
  },
  actionTitleAuthor:{
    fontSize: 10,
 },

});
