import React from 'react';
import {View, TextInput, Text} from 'react-native';

import styles from './input-styles';

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={styles.txtLabel}>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;
