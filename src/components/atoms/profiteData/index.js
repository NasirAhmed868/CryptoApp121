import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import styles from './styles';

const DashboradComponents = ({item, index}) => {
  console.log(item);

  return (
    <TouchableOpacity style={styles.sllaybusBox}>
      <View style={styles.container}>
      <Image style={{marginRight:scale(30)}}  source={item.arrowImage}></Image>
        <Image style={styles.bookImage} source={item.image} />
      </View>

      <Text style={styles.sllybusText}>{item.name}</Text>
      <View>
        <Image style={styles.IImage} source={item.detailImage}></Image>
      </View>
    </TouchableOpacity>
  );
};

export default DashboradComponents;
