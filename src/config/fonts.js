import { Platform } from 'react-native';

export const fonts = {
    font :  (Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif')
};