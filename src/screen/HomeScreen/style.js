import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Themes from '../../utility/theme';
const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Themes.backgroundColor,
  },
  mainView: {
    height: verticalScale(80),
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },
  UpiText: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(20),
    marginLeft: scale(20),
    fontWeight: 'bold',

    color: Themes.textColor,
    marginBottom: verticalScale(8),
  },
  imageMenu: {
    width: scale(25),
    height: verticalScale(25),
    flexDirection: 'row',
    marginLeft: scale(100),
    marginTop: verticalScale(20),
    marginRight: scale(40),
  },
  viewContainer: {
    marginLeft: scale(15),
    height: verticalScale(30),
    width: scale(300),
    flexDirection: 'row',
  },
  cryptoBalanceText: {
    width: scale(150),
    height: verticalScale(22),
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: Themes.textColor,
    marginLeft: scale(18),
  
  },
  rate: {
    width: scale(50),
    height: verticalScale(15),
    fontSize: moderateScale(12),
    marginLeft: scale(20),
    color: Themes.textColor,
    marginTop: scale(10),
  },
  profileImage: {
    width: verticalScale(56),
    height: verticalScale(56),
    borderRadius: verticalScale(28),
  },
  name: {
    fontSize: moderateScale(12),
    marginTop: verticalScale(10),
    fontWeight: 'bold',
    color: Themes.textColor,
  },
  feesAmountBox: {
    width: scale(134),
    height: verticalScale(34),
    marginTop: verticalScale(5),
    marginLeft: scale(19),
  },
  imageGame: {
    width: scale(34),
    height: verticalScale(34),
    marginTop: verticalScale(200),
    marginLeft: scale(30),
  },

  XImage: {
    width: scale(34),
    height: verticalScale(34),
    marginLeft: scale(10),
  },
  XPR: {
    width: scale(50),
    height: verticalScale(34),
    marginLeft: scale(30),
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    flexDirection: 'row',
    color: Themes.textColor,
  },
  btnContanier: {
    width: scale(160),
    height: verticalScale(45),
    marginLeft: scale(10),
  },
  footerbtnContanier: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    marginLeft: scale(10),
  },
  mapFunction: {
    marginTop: verticalScale(50),
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
  },
  homeReviceBtn: {
    marginLeft: scale(20),
    marginTop: scale(10),
  },
  faitBtn: {
    width: scale(160),
    height: verticalScale(45),
  },
});

export default Styles;
