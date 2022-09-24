import {SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import Inputs from '../components/Inputs';
import Buttons from '../components/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userCity, setUserCity] = useState('');

  const handleSubmit = () => {
    if (!userName || !userSurname || !userAge || !userMail || !userCity) {
      Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }
    const user = {
      userName,
      userSurname,
      userAge,
      userMail,
      userCity,
    };
    navigation.navigate('MemberResult', {user});
  };
  return (
    <SafeAreaView>
      <Inputs
        label="Üye Adı"
        placeholder="İsmini giriniz..."
        onChangeText={setUserName}
      />
      <Inputs
        label="Üye Soyadı"
        placeholder="Soyadınızı giriniz..."
        onChangeText={setUserSurname}
      />
      <Inputs
        label="Üye Yaşı"
        placeholder="Yaşınızı giriniz..."
        onChangeText={setUserAge}
      />
      <Inputs
        label="Üye E-posta"
        placeholder="E-posta adresinizi giriniz..."
        onChangeText={setUserMail}
      />
      <Inputs
        label="Üye Şehir"
        placeholder="İlinizi giriniz..."
        onChangeText={setUserCity}
      />
      <Buttons text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
