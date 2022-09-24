import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './Inputs.style';

function Inputs({label, onChangeText, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.labels}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput onChangeText={onChangeText} placeholder={placeholder} />
      </View>
    </View>
  );
}
export default Inputs;
