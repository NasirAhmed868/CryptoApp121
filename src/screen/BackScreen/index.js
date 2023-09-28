import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import HomeScreen from '../HomeScreen';
import CustomButton from '../../components/atoms/customButton';
import MyTextInput from '../../components/atoms/textinput';
import {en} from '../../i18n';

const Payment = () => {
  const navigation = useNavigation();
  const onBtnPrees = () => {
    navigation.navigate(HomeScreen);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onBtnPrees}>
            <Image
              style={styles.leftArrow}
              source={require('../../assets/icons/leftwhite.png')}
            />
          </TouchableOpacity>
          <Text style={styles.paymentText}>{en.payment}</Text>
          <Image
            style={styles.croosImg}
            source={require('../../assets/icons/xC.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={{marginLeft: scale(40)}}>
            <Text style={styles.wallet}>{en.wallet_balance}</Text>
            <Text style={styles.balance}>{en.mainbalance}</Text>
          </View>
          <View>
            <Text style={styles.Crypto}>{en.unicrypto_balance}</Text>
            <Text style={styles.ethText}>{en.ethrate}</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={styles.to}>{en.unito}</Text>
            <MyTextInput btnStyle={styles.inputText} />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.ETH}>{en.ehtText}</Text>
          <MyTextInput btnStyle={styles.ehtTextinput} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txnfess}>{en.txn_fees} </Text>
          <MyTextInput btnStyle={styles.txnTextinput} />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton title="Send" btnStyle={styles.paymentBtn} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Payment;
