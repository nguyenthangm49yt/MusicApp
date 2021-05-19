import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';

export const styles = StyleSheet.create({
  container:{
      flex:1,
      padding:20,
  },
  header: {
    marginTop: 25,
    flexDirection: 'row',
     justifyContent: 'space-between',
  },
  headerTitle: {
    
    fontSize:25,
    
  },
  headerRightBtnsWrapper: {
    flexDirection: 'row',
    
  },
  form:{
    marginRight:30,
    borderRadius:1,
    marginLeft:10,
    //backgroundColor:"#dcdcdc",
  },
  content:{
      marginTop:30,
      backgroundColor:"#dcdcdc",
  },
  contentTitle:{
      fontSize:25,
  },
  contentResult: {
    backgroundColor:"#ccc",
    padding: 10,
    height: '88%',
  }


});
