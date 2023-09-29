import {StyleSheet} from 'react-native';
import { scale, verticalScale} from 'react-native-size-matters';
import Themes from '../../../utility/theme';
const styles = StyleSheet.create({
  container: {
    width: scale(70),
    height: scale(30),
    borderRadius: scale(15),
    flexDirection: 'row',
    marginTop: verticalScale(70),
    color: Themes.textColor,
  },

  sllaybusBox: {
    width: '100%',
    height: verticalScale(60),
    flexDirection: 'row',
    marginLeft: scale(10),
    color: Themes.textColor,
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  bookImage: {
    width: scale(24),
    height: scale(24),
    marginLeft: scale(10),
  },
  sllybusText: {
    fontSize: scale(12),
    flexDirection: 'row',
    marginLeft: scale(30),
    width: scale(65),
    height: verticalScale(15),
    color: Themes.textColor,
  },
  IImage: {
    height: verticalScale(40),
    flexDirection: 'column',
    marginRight: verticalScale(170),
    marginTop: verticalScale(75),
    color: Themes.textColor,
  },
  upArrow: {
    width: scale(25),
    height: scale(25),
  },
});
export default styles;
