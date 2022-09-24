import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Buttons from '../components/Button';

function MemberResult({route, navigation}) {
  const {user} = route.params;
  const {userName, userSurname, userAge, userMail, userCity} = user;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Kayıt başarıyla tamamlandı!</Text>
      <Text style={styles.label}>Üyenin; </Text>
      <Text style={styles.label}>Adı: {userName} </Text>
      <Text style={styles.label}>Soyadı: {userSurname}</Text>
      <Text style={styles.label}>Yaşı: {userAge}</Text>
      <Text style={styles.label}>E-postası: {userMail}</Text>
      <Text style={styles.label}>İli: {userCity}</Text>
      <Buttons
        text="Karşılama Sayfasına Dön!"
        onPress={() => navigation.navigate('WelcomeScreens')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    color: 'black',
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    margin: 5,
    textAlign: 'center',
    color: 'black',
  },
});

export default MemberResult;
