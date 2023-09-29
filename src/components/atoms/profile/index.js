import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../customButton';
import DashboradComponents from '../profiteData';
import styles from './styles';
import Payment from '../../../screen/BackScreen';

const DashboradIcons = ({
  item,
  index,
  onListItemClick,
  onSendButtonClick,
  clickindex,
}) => {
  console.log(item);
  console.log(index);

  return (
    <View>
      <View key={index.toString()} style={styles.sllaybusBox}>
        <TouchableOpacity
          style={{flexDirection: 'row', flex: 1}}
          onPress={() => onListItemClick(index)}>
          <Image style={styles.bookImage} source={item.image} />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginLeft: scale(10)}}>
              <Text style={{color: 'white'}}>{item.name}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>{item.value}</Text>
                <Text style={{color: item.percentage >= 0 ? 'green' : 'red'}}>
                  {item.percentage} %
                </Text>
              </View>
            </View>
            <Text style={styles.sllybusText}>{item.tittle}</Text>
          </View>
        </TouchableOpacity>
        <CustomButton
          item={item}
          onBtnPrees={onSendButtonClick}
          btnStyle={{
            width: scale(80),
            marginRight: scale(20),
          }}
          title="Send"
        />
      </View>
      {index == clickindex && (
        <View>
          {item.transaction.map((transItem, transIndex) => (
            <DashboradComponents item={transItem} index={transIndex} />
          ))}
        </View>
      )}
    </View>
  );
};

export default DashboradIcons;
