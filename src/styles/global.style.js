import {Platform, StyleSheet} from 'react-native';
const GlobalStyles = StyleSheet.create({
  wrapContainer: {
    flex: 1,
    // backgroundColor: '#ffffff',
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    // height: "100%",
    marginBottom: Platform.OS === 'android' ? 20 : -33,
  },
});
export default GlobalStyles;
