import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import Styles from './style';
import {useNavigation} from '@react-navigation/native';
import {en} from '../../i18n';
import CustomButton from '../../components/atoms/customButton';
import DashboradIcons from '../../components/atoms/profile';
import {data} from '../../utility/appConstant';
import Themes from '../../utility/theme';

const HomeScreen = () => {
  const [clickindex, setclickindex] = useState(-1);
  const navigation = useNavigation();
  const onListItemClick = index => {
    setclickindex(index);
  };

  const onSendButtonClick = ({item}) => {
    console.log('onitemclick', item);
    navigation.navigate('Payment', {item: item});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.mainContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View>
            <Text style={Styles.UpiText}>{en.unicrypto}</Text>
            <View
              style={{
                backgroundColor: Themes.uderLine,
                width: scale(90),
                height: verticalScale(3),
                marginLeft: scale(20),
              }}></View>
          </View>
          <Image
            style={Styles.imageMenu}
            source={require('../../assets/icons/menuAndroid.png')}></Image>
        </View>
        <View style={Styles.mainView}>
          <View style={{flex: 1}}>
            <Text style={Styles.cryptoBalanceText}>{en.unicrypto_balance}</Text>

            <Text style={Styles.rate}>{en.price}</Text>
            <View style={Styles.homeReviceBtn}>
              <CustomButton title="Recevice" btnStyle={{width: scale(120)}} />
            </View>
          </View>
          <View style={Styles.profileContainer}>
            <Image
              style={Styles.profileImage}
              source={require('../../assets/icons/Profile_img.jpg')}></Image>
            <Text style={Styles.name}>{en.name}</Text>
          </View>
        </View>

        <View>
          <View style={Styles.mapFunction}>
            {data.map((item, index) => {
              return (
                <DashboradIcons
                  item={item}
                  index={index}
                  onListItemClick={onListItemClick}
                  onSendButtonClick={(selectedItem) => onSendButtonClick(selectedItem)}
                  clickindex={clickindex}
                />
              );
            })}
          </View>
        </View>
        <View style={Styles.footerbtnContanier}>
          <CustomButton btnStyle={Styles.faitBtn} title="Fiat" />
          <CustomButton
            btnStyle={Styles.btnContanier}
            title="Crypto"
            onBtnPrees={onSendButtonClick}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
