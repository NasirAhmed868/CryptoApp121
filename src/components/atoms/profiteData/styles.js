import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Themes from '../../../utility/theme';

const styles = StyleSheet.create({
  container: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(100),
    marginTop: verticalScale(10),
   
  },

  sllaybusBox: {
    width: scale(100),
    height: verticalScale(40),
    flexDirection: 'row',
    marginBottom:verticalScale(20)
  },
  bookImage: {
    width: scale(20),
    height: scale(20),
    margin: moderateScale(2),
    flexDirection: 'row',
    color: Themes.textColor,
    marginRight:scale(50)
  },
  sllybusText: {
    marginLeft: scale(8),
    fontSize: scale(12),
    flexDirection: 'row',
    marginLeft: scale(8),
    marginTop: verticalScale(17),
    width: scale(86),
    height: verticalScale(15),
    color: Themes.textColor,
  },
  IImage: {
    width: scale(20),
    height: scale(20),
    margin: moderateScale (2),
    marginTop: moderateScale(17),

 
  },
});
export default styles;
