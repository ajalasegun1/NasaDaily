import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import MyView from './MyView';
import MyView2 from './MyView2';
import {HEIGHT} from '../constants';
import MyText from './themed/MyText';
import FastImage from 'react-native-fast-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import {useNavigation} from '@react-navigation/native';

type EpicScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EpicScreen'
>;

const Epic = () => {
  const navigation = useNavigation<EpicScreenNavigationProp>();
  return (
    <Pressable onPress={() => navigation.push('EpicScreen')}>
      <MyView2 style={styles.container}>
        <View style={{flex: 1}}>
          <FastImage
            source={{
              uri: 'https://api.nasa.gov/EPIC/archive/enhanced/2019/05/30/png/epic_RGB_20190530215746.png?api_key=2UPuysI50TfGWMsCNtQoe12YVVDAPpqykB0tzePL',
            }}
            style={[
              StyleSheet.absoluteFill,
              {borderTopLeftRadius: 15, borderTopRightRadius: 15},
            ]}
          />
        </View>
        <View style={styles.header}>
          <MyText style={styles.headingText}>Epic "Blue Marble"</MyText>
          <MyText>
            Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides
            full disc imagery of the Earth and captures unique perspectives of
            certain astronomical events such as lunar transits using a 2048x2048
            pixel CCD (Charge Coupled Device) detector coupled to a 30-cm
            aperture Cassegrain telescope.
          </MyText>
        </View>
      </MyView2>
    </Pressable>
  );
};

export default Epic;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT / 1.7,
    borderRadius: 15,
  },
  header: {
    padding: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
