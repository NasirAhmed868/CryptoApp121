import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import CustomButton from '../atoms';
import DashboradComponents from '../atoms/profiteData';
import styles from './styles';

const DashboradIcons = ({
  item,
  index,
  onListItemClick,
  onsendButtonClick,
  clickindex,
}) => {
  console.log(item);
  console.log(index);
  return (
    <View>
      <TouchableOpacity
        key={index.toString()}
        style={styles.sllaybusBox}
        onPress={() => onListItemClick(index)}>
        <Image style={styles.bookImage} source={item.image} />
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: scale(10)}}>
            <Text style={{color: 'white'}}>{item.name}</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>{item.value}</Text>
              <Text style={{color: 'green'}}>{item.percentage}</Text>
            </View>
          </View>

          <Text style={styles.sllybusText}>{item.tittle}</Text>
        </View>
        <CustomButton
          onBtnPrees={onsendButtonClick}
          btnStyle={{
            width: scale(60),
            marginRight: scale(20),
          }}
          title="SEND"
        />
      </TouchableOpacity>
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
