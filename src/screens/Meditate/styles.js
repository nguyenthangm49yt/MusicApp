import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: 20,
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    fontFamily: fonts.font,
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.heading,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    color: colors.gray,
  },
  meditateItem: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 25,
  },
  meditateItemWrapper: {
    margin: 10,
  },
  itemTitle: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    fontFamily: fonts.font,
    fontWeight: '400',
  },
  meditateItemWrapperContainer: {
    marginTop: 30,
  },
  dailyThoughtsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.lightBg,
    alignItems: 'center',
    height: 95,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  bgShape1: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 10,
  },
  bgShape2: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 10,
  },
  bgShape3: {
    position: 'absolute',
    right: '40%',
    bottom: 0,
  },
  dailyTitle: {
    fontSize: 18,
    fontFamily: fonts.font,
    color: colors.heading,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dailySubTitle: {
    color: colors.heading,
    fontSize: 11,
    fontFamily: fonts.font,
  },
  medicationTypeCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    //
    paddingTop: 10,
   
  },
  card: {
    marginBottom: 25,
    marginRight: 10
    //backgroundColor: "#ccc",
  },
  cardImg: {
    borderRadius:10,
    width:170,
    height:150,
  },
  card1Txt: {
    fontFamily: fonts.font,
    fontSize: 18,
    color: colors.white,
    position: 'absolute',
    bottom: 10,
    left: 15,
    fontWeight: 'bold',
  },
});