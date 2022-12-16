import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../navigation/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import {HEIGHT} from '../constants';
import MyText from '../components/themed/MyText';

type ScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'PotdDetailsScreen'
>;

const PotdDetailsScreen = ({route}: ScreenProp) => {
  const {data} = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageHolder}>
          <FastImage
            source={{uri: data?.hdurl}}
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.titleHolder}>
            <MyText style={styles.title}>{data?.title}</MyText>
            <MyText style={styles.copyright}>{data?.copyright}</MyText>
          </View>
        </View>
        <View style={styles.desc}>
          <MyText style={styles.text}>
            {data?.explanation}
            {/* {'\n'} {'\n'} {data?.explanation} {'\n'} {'\n'} {data?.explanation} */}
          </MyText>
        </View>
      </ScrollView>
    </View>
  );
};

export default PotdDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  imageHolder: {
    width: '100%',
    height: HEIGHT / 2,
    backgroundColor: '#141414',
    overflow: 'hidden',
  },
  titleHolder: {
    padding: 10,
    height: 60,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  title: {
    textShadowColor: 'black',
    textShadowRadius: 6,
    textShadowOffset: {height: 1, width: 2},
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  copyright: {
    textShadowColor: 'black',
    textShadowRadius: 6,
    textShadowOffset: {height: 1, width: 2},
    fontWeight: '500',
  },
  desc: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  text: {
    // textAlign: 'justify',
  },
});
