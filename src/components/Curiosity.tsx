import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyView2 from './MyView2';
import {HEIGHT} from '../constants';
import MyView3 from './MyView3';
import MyText from './themed/MyText';
import {textColor} from './themed/Colors';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';

const Curiosity = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'CuriosityScreen'>
    >();
  return (
    <Pressable onPress={() => navigation.push('CuriosityScreen')}>
      <MyView2 style={styles.container}>
        <MyView3 style={styles.headers}>
          <MyText style={[{color: textColor.adapt2}, styles.subHead]}>
            Mars Rover Images
          </MyText>
          <MyText style={styles.textHead}>Curiosity</MyText>
        </MyView3>

        <View style={styles.imageHolder}>
          <FastImage
            source={{
              uri: 'https://static.sciencelearn.org.nz/images/images/000/003/148/original/SLH_NEWS34_Curiosity_Rover_original.jpg?1522313849',
            }}
            style={[
              StyleSheet.absoluteFill,
              {borderBottomLeftRadius: 15, borderBottomRightRadius: 15},
            ]}
          />
        </View>
      </MyView2>
    </Pressable>
  );
};

export default Curiosity;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT / 1.8,
    borderRadius: 15,
  },
  headers: {
    flex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
    justifyContent: 'center',
  },
  imageHolder: {
    flex: 9,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  subHead: {
    fontSize: 15,
    fontWeight: '500',
  },
  textHead: {
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
