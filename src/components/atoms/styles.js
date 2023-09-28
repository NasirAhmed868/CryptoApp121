import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(30),
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: scale(2),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(17),
    width: scale(290),
    height: verticalScale(21),
    textAlign: 'center',
    alignItems: 'center',
    fontSize: moderateScale(16),
  },
});
export default styles;
