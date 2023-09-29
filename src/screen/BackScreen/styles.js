import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Themes from '../../utility/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.backgroundColor,
  },
  leftArrow: {
    width: scale(20),
    height: verticalScale(10),
    marginLeft: scale(20),
    marginTop: verticalScale(20),
  },
  paymentText: {
    width: scale(150),
    height: verticalScale(25),
    fontSize: moderateScale(20),
    marginTop: verticalScale(10),
    marginLeft: scale(10),
    fontWeight: 'bold',
  
    flexDirection: 'row',
    color: Themes.textColor,
  },
  croosImg: {
    width: scale(20),
    height: verticalScale(20),
    marginLeft: scale(100),
    marginTop: verticalScale(20),
    flexDirection: 'row',
  },
  wallet: {
    height: verticalScale(20),
    fontSize: moderateScale(18),
    marginTop: verticalScale(15),
    color: Themes.textColor,
  },
  balance: {
    width: scale(100),
    height: verticalScale(15),
    fontSize: moderateScale(12),
    marginLeft: scale(40),
    marginTop: verticalScale(10),
    color: Themes.textColor,
    marginLeft: scale(50),
  },

  Crypto: {
    width: scale(100),
    height: verticalScale(19),
    fontSize: moderateScale(16),
    color: Themes.textColor,
    marginTop: verticalScale(15),
  },
  ethText: {
    width: scale(100),
    height: verticalScale(15),
    fontSize: moderateScale(12),
    marginTop: verticalScale(10),
    color: Themes.textColor,
    marginLeft: scale(20),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  to: {
    width: scale(40),
    height: verticalScale(28),
    fontSize: moderateScale(18),
    marginTop: verticalScale(50),
    marginLeft: scale(50),
    color: Themes.textColor,
  },

  ETH: {
    width: scale(50),
    height: verticalScale(28),
    fontSize: moderateScale(18),
    marginTop: verticalScale(15),
    marginLeft: scale(50),
    color: Themes.textColor,
  },
  inputEth: {
    width: scale(150),
    height: verticalScale(50),
    fontSize: moderateScale(18),
    color: Themes.textColor,
    marginLeft: scale(50),
  },
  txnfess: {
    height: verticalScale(28),
    fontSize: moderateScale(16),
    marginTop: verticalScale(30),
    marginLeft: scale(50),
    color: Themes.textColor,
  },
  value: {
    height: verticalScale(50),
    fontSize: moderateScale(16),
    marginTop: verticalScale(20),
    marginLeft: scale(50),
    color: Themes.textColor,
  },
  inputText: {
    marginTop: verticalScale(45),
    fontSize: moderateScale(16),
    height: verticalScale(35),
  },
  ehtTextinput: {
    marginTop: verticalScale(15),
    fontSize: moderateScale(16),
    height: moderateScale(35),
  },
  txnTextinput: {
    marginTop: verticalScale(25),
    fontSize: moderateScale(12),
    height: moderateScale(35),
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  paymentBtn: {
    width: scale(300),
    height: verticalScale(50),
  },
});

export default styles;
