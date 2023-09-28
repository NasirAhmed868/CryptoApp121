import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import MyTextInput from '../../assets/textinput';
import CustomButton from '../../components/atoms';

import styles from './styles';

const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.leftArrow}
          source={require('../../assets/icons/leftwhite.png')}></Image>
        <Text style={styles.paymentText}>Payment</Text>
        <Image
          style={styles.croosImg}
          source={require('../../assets/icons/xC.png')}></Image>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: scale(40)}}>
          <Text style={styles.wallet}>wallet balance</Text>
          <Text style={styles.balance}>$95.6</Text>
        </View>
        <View>
          <Text style={styles.Crypto}>Crypto Balance</Text>
          <Text style={styles.ethText}>22.6 EHT</Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.to}>TO</Text>
          <MyTextInput  btnStyle={{marginTop:verticalScale(45), fontSize:moderateScale(16),height:verticalScale(35)}}   />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.ETH}>EHT</Text>
        <MyTextInput  btnStyle={{marginTop:verticalScale(15),fontSize:moderateScale(16),height:moderateScale(35)}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.txnfess}>Txn fees </Text>
   <MyTextInput  btnStyle={{marginTop:verticalScale(25),fontSize:moderateScale(12),height:moderateScale(35)}} />
      </View>
      <View style={{alignItems: 'center', marginTop: verticalScale(50)}}>
        <CustomButton
          title="Send"
          btnStyle={{width: scale(300), height: verticalScale(50)}}
        />
      </View>
    </View>
  );
};
export default Payment;
