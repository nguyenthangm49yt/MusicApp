import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';

export const styles = StyleSheet.create({
  container:{
      flex:1,
      padding:20
  },
  profileInfos: {
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
  userWrapper: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    marginTop: 30,
    padding: 10,
  },
  image:{
      width:120,
      height:120,
      borderRadius:60,
      borderColor:'#dddddd',
      borderWidth:1,
      backgroundColor:"#dcdcdc",
      
  },
  nameSection: {
      
      marginLeft: 1,
      marginTop:10,
  },
  nameSectionAcc: {
   color: colors.white,
   fontSize:20
},
  actions: {
      marginTop: 20,
      paddingHorizontal: 5,
      flexDirection: 'row',
     // backgroundColor: "#fe9c8f",
  },
  iconContainer: {
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
      marginLeft:5,
      marginTop: 3,
      fontSize: 16,
  },

});
