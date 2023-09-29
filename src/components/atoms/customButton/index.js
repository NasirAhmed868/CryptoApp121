import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CustomButton = ({title, onBtnPrees, btnStyle, item}) => {
  return (
    <TouchableOpacity
      style={[styles.button, btnStyle]}
      onPress={()=>onBtnPrees(item)}>
      <Text style={styles.buttonText}> {title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
