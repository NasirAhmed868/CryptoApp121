import React from 'react';
import {View, Text} from 'react-native';
import Payment from './src/screen/BackScreen';
import HomeScreen from './src/screen/HomeScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <HomeScreen />
    </View>
  );
};

export default App;
