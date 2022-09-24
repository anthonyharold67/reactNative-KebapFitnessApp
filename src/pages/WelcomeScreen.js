import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Buttons from '../components/Button';

const WelcomeScreen = ({navigation}) => {
  function goToMemberSign() {
    navigation.navigate('MemberSign');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Buttons text="Üye Kaydı Oluştur" onPress={goToMemberSign} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

export default WelcomeScreen;
