import React from 'react';
import {View} from 'react-native';

import Button from '../components/Button';

import {Toast} from '../utils/nativeModules';

const Tab1 = () => {
  return (
    <View>
      <Button title={'Check Native Event'} onPress={() => Toast.show()} />
    </View>
  );
};

export default Tab1;
