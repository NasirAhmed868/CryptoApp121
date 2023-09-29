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
    maxWidth: scale(200),
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: scale(2),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
});
export default styles;
