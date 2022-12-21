import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import PotdDetailsScreen from '../screens/PotdDetailsScreen';
import EpicScreen from '../screens/EpicScreen';
import CuriosityScreen from '../screens/CuriosityScreen';

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
  EpicScreen: undefined;
  CuriosityScreen: undefined;
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EpicScreen" component={EpicScreen} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="PotdDetailsScreen"
            component={PotdDetailsScreen}
          />
          <Stack.Screen name="CuriosityScreen" component={CuriosityScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
