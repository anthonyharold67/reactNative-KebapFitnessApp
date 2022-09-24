import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="WelcomeScreens"
          component={WelcomeScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="MemberSign"
          component={MemberSign}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="MemberResult"
          component={MemberResult}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
