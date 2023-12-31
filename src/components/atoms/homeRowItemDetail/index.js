import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
const HomeListItemDetail = ({item, index}) => {
  console.log(item);
  return (
    <TouchableOpacity style={styles.sllaybusBox}>
      <View style={styles.container}>
        <Image style={styles.imageArrow} source={item.arrowImage}></Image>
        <Image style={styles.bookImage} source={item.image} />
      </View>
      <Text style={styles.sllybusText}>{item.name}</Text>
      <View>
        <Image style={styles.IImage} source={item.detailImage}></Image>
      </View>
    </TouchableOpacity>
  );
};

export default HomeListItemDetail;
