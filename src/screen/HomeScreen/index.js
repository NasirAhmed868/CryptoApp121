import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../components/atoms';
import DashboradIcons from '../../components/profile';
import Styles from './style';

const data = [
  {
    id: 1,
    name: 'BNB',
    image: require('../../assets/icons/iconbnb.png'),
    tittle: '10.15  BNB',
    value: '$126.69',
    percentage: '+2%',
    transaction: [
      {
        id: 1,
        upArrow: 'upArrow.png',
        name: '10.15 ETH',
        image: require('../../assets/icons/gameIconGreen.png'),
        detailImage: require('../../assets/icons/i_img.png'),
        arrowImage: require('../../assets/icons/bgRed.png'),
      },

      {
        id: 2,
        upArrow: 'upArrow.png',
        name: '22.26 EHT ',
        image: require('../../assets/icons/nowCoin.png'),
        detailImage: require('../../assets/icons/i_img.png'),
        arrowImage: require('../../assets/icons/bgGreen.png'),
      },
      {
        id: 3,
        upArrow: 'upArrow.png',
        name: '110.26 EHT',
        image: require('../../assets/icons/Uber_img.png'),
        detailImage: require('../../assets/icons/i_img.png'),
        arrowImage: require('../../assets/icons/bgGreen.png'),
      },
    ],
  },
  {
    id: 2,
    name: 'ETH',
    image: require('../../assets/icons/resizeIcon.png'),
    tittle: '22.26  ETH',
    value: '$121.00',
    percentage: '+4.3%',

    transaction: [
      {
        id: 1,
        upArrow: 'upArrow.png',
        name: '10.15 ETH',
        arrowImage: require('../../assets/icons/bgRed.png'),
        image: require('../../assets/icons/gameIconGreen.png'),
        detailImage: require('../../assets/icons/i.png'),
      },

      {
        id: 2,
        upArrow: 'upArrow.png',
        name: '22.26 EHT ',
        image: require('../../assets/icons/nowCoin.png'),
        detailImage: require('../../assets/icons/i.png'),
        arrowImage: require('../../assets/icons/bgGreen.png'),
      },
      {
        id: 3,
        upArrow: 'upArrow.png',
        name: '110.26 EHT',
        image: require('../../assets/icons/Uber_img.png'),
        detailImage: require('../../assets/icons/i.png'),
        arrowImage: require('../../assets/icons/bgGreen.png'),
      },
    ],
  },
  {
    id: 3,
    name: 'XRP',
    image: require('../../assets/icons/xrp.png'),
    tittle: '10.15  BNB',
    value: '$1.10',
    percentage: '-1.3%',
  },
];

const HomeScreen = () => {
  const [clickindex, setclickindex] = useState(-1);

  const onListItemClick = index => {
    setclickindex(index);
  };
  const onsendButtonClick = () => {};
  return (
    <View style={Styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={Styles.UpiText}>UpiCrytop</Text>

        <Image
          style={Styles.imageMenu}
          source={require('../../assets/icons/menuAndroid.png')}></Image>
      </View>
      <View style={{height: verticalScale(80), flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={Styles.cryptoBalanceText}> Crypto Balance </Text>
          <Text style={Styles.rate}>$126.60</Text>

          <View
            style={{
              width: scale(80),
              marginLeft: scale(20),
              marginTop: scale(10),
            }}>
            <CustomButton title="Recevice" />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            style={Styles.profileImage}
            source={require('../../assets/icons/Profile_img.jpg')}></Image>
          <Text style={Styles.name}>Nasir ahmed</Text>
        </View>
      </View>

      <View>
        <View style={{marginTop: verticalScale(50)}}>
          {data.map((item, index) => {
            return (
              <DashboradIcons
                item={item}
                index={index}
                onListItemClick={onListItemClick}
                onsendButtonClick={onsendButtonClick}
                clickindex={clickindex}
              />
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          position: 'absolute',
          bottom: 0,
          marginLeft: scale(10),
        }}>
        <CustomButton
          btnStyle={{width: scale(160), height: verticalScale(40)}}
          title="Fiat"
        />
        <CustomButton
          btnStyle={{
            width: scale(160),
            height: verticalScale(40),
            marginLeft: scale(10),
          }}
          title="Crypto"
        />
      </View>
    </View>
  );
};
export default HomeScreen;
