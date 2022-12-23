import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyView2 from './MyView2';
import {HEIGHT} from '../constants';
import FastImage from 'react-native-fast-image';
import {BlurView} from '@react-native-community/blur';
import MyText from './themed/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import MyViewSub from './MyViewSub';

type SearchNasaNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  'SearchScreen'
>;
const SearchNasa = () => {
  const navigation = useNavigation<SearchNasaNavigationType>();
  return (
    <Pressable onPress={() => navigation.push('SearchScreen')}>
      <MyView2 style={styles.container}>
        <FastImage
          source={{
            uri: 'https://cdn.arstechnica.net/wp-content/uploads/2022/04/SLS-Apr-21-2022-8868-800x534.jpg',
          }}
          style={{height: '100%', width: '100%', borderRadius: 15}}
        />
        <View style={styles.overlay}>
          {Platform.OS === 'ios' ? (
            <BlurView
              style={styles.blurContainer}
              blurType="light"
              blurAmount={3}
              blurRadius={3}>
              <MyText style={[{color: 'white'}, styles.heading]}>
                Nasa Image and Video Library
              </MyText>
              <MyText style={styles.desc}>
                Query Nasa's database for information you need
              </MyText>
            </BlurView>
          ) : (
            <MyViewSub style={styles.blurContainer}>
              <MyText style={[{color: 'white'}, styles.heading]}>
                Nasa Image and Video Library
              </MyText>
              <MyText style={styles.desc}>
                Query Nasa's database for information you need
              </MyText>
            </MyViewSub>
          )}
        </View>
      </MyView2>
    </Pressable>
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
