import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyView2 from './MyView2';
import {HEIGHT} from '../constants';
import FastImage from 'react-native-fast-image';
import {BlurView} from '@react-native-community/blur';
import MyText from './themed/MyText';

const SearchNasa = () => {
  return (
    <MyView2 style={styles.container}>
      <FastImage
        source={{
          uri: 'https://cdn.arstechnica.net/wp-content/uploads/2022/04/SLS-Apr-21-2022-8868-800x534.jpg',
        }}
        style={{height: '100%', width: '100%', borderRadius: 15}}
      />
      <View style={styles.overlay}>
        <BlurView
          style={styles.blurContainer}
          blurType="dark"
          blurAmount={6}
          blurRadius={30}>
          <MyText style={[{color: 'white'}, styles.heading]}>
            Nasa Image and Video Library
          </MyText>
          <MyText style={styles.desc}>
            Query Nasa's database for information you need
          </MyText>
        </BlurView>
      </View>
    </MyView2>
  );
};

export default SearchNasa;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT / 1.5,
    borderRadius: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'black',
    flex: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  blurContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  desc: {
    color: 'white',
  },
});
