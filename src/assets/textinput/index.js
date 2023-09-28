import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import styles from './styles';

const MyTextInput = ({btnStyle}) => {
  const [text, setText] = useState('');

  const onChangeText = newText => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput,btnStyle]}
        onChangeText={onChangeText}
        value={text}
        placeholder="Type something..."
      />
    </View>
  );
};
export default MyTextInput;
