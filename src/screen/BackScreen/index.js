import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import CustomButton from '../../components/atoms/customButton';
import MyTextInput from '../../components/atoms/textinput';
import {en} from '../../i18n';
import Themes from '../../utility/theme';
import HomeScreen from '../HomeScreen';
import ServiceInvoker from '../../service';

const Payment = prop => {
  console.log(prop);
  const item = prop?.route?.params?.item;
  console.log('paymentitem', item);
  const navigation = useNavigation();
  const onBtn = () => {
    navigation.navigate(HomeScreen);
  };

  const onBtnPrees = async () => {
    const ApiCallRespones = await ServiceInvoker.ApiCall();
    console.log(ApiCallRespones);
    if (ApiCallRespones.status == 200) alert('Succes');
    else alert('false');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={onBtn}>
            <Image
              style={styles.leftArrow}
              source={require('../../assets/icons/leftwhite.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.paymentText}>{en.payment}</Text>
            <View
              style={{
                backgroundColor: Themes.uderLine,
                width: scale(80),
                height: verticalScale(3),
                marginLeft: scale(10),
                marginTop: verticalScale(5),
              }}></View>
          </View>
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
          <Text style={styles.ETH}>{item?.name}</Text>
          <MyTextInput btnStyle={styles.ehtTextinput} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txnfess}>{en.txn_fees} </Text>
          <MyTextInput btnStyle={styles.txnTextinput} />
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            title="Send"
            btnStyle={styles.paymentBtn}
            onBtnPrees={onBtnPrees}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Payment;
