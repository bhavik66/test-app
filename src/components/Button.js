import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './button-styles';

const Button = ({title, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
