import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import PotdDetailsScreen from '../screens/PotdDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  PotdDetailsScreen: {
    data: {
      copyright: string;
      date: string;
      explanation: string;
      hdurl: string;
      media_type: string;
      service_version: string;
      title: string;
      url: string;
    };
  };
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="PotdDetailsScreen"
            component={PotdDetailsScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
