import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {fonts} from '../../config/fonts';


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
   
        width: '100%',
    },
    bg: {
        padding: 0,
        marginTop: 0,
        position: 'absolute',
        
    },
    contentContainer: {
      padding: 20,
      marginTop: 30,
      flex: 1,
    },
    logo: {
        alignSelf: 'center'
    },
    welcomeImage: {
        marginTop: 60,
        
      },
      top: {
        flex: 1,
      },
      bottom: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      heading: {
       fontFamily: fonts.font,
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 40,
        textAlign: 'center',
        color: colors.heading,
      },
      subHeading: {
       fontFamily: fonts.font,
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 26,
        textAlign: 'center',
        color: colors.gray,
      },
      btnWrapper: {
        marginTop: 60,
      },
      loginLinkWrapper: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 90,
      },
      notificationContent: {
        color: colors.gray,
        fontSize: 14,
       fontFamily: fonts.font,
      },
      link: {
        color: colors.primary,
        fontSize: 14,
        fontFamily: fonts.font,
        bottom: -4
      },
});