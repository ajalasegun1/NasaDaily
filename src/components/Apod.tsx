import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';
import {HEIGHT} from '../constants';
import MyText from './themed/MyText';
import config from '../config';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import MyView2 from './MyView2';
import {textColor} from './themed/Colors';

const Apod = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'PotdDetailsScreen'>
    >();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<null | {[key: string]: any}>({});
  useEffect(() => {
    fetchPOD();
  }, []);

  const fetchPOD = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${config.API_KEY}`,
      );
      console.log({res: res.data});
      setData(res.data);
    } catch (error) {
      console.log({error});
    }
  };

  return (
    <View>
      <MyText style={[styles.text, {color: textColor.adapt2}]}>
        {dayjs(new Date()).format('dddd D MMMM')}
      </MyText>
      <MyText style={styles.text2}>Today</MyText>
      <Pressable
        style={styles.contentHolder}
        onPress={() =>
          navigation.navigate('PotdDetailsScreen', {
            data: {
              copyright: data?.copyright,
              date: data?.date,
              explanation: data?.explanation,
              hdurl: data?.hdurl,
              media_type: data?.media_type,
              service_version: data?.service_version,
              title: data?.title,
              url: data?.url,
            },
          })
        }>
        <View style={styles.headerHolder}>
          <MyText style={styles.textHeader}>Photo of the day</MyText>
          <MyText style={styles.textHeader2}>{data?.title}</MyText>
        </View>
        <FastImage
          source={{
            uri: data?.url,
          }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
        <MyView2 style={styles.footer}>
          <MyText numberOfLines={2}>{data?.explanation}</MyText>
        </MyView2>
      </Pressable>
    </View>
  );
};

export default Apod;

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 12,
    color: '#A4A4A4',
  },
  text2: {
    fontSize: 26,
    letterSpacing: 2,
    fontWeight: '600',
    marginVertical: 5,
  },
  contentHolder: {
    width: '100%',
    height: HEIGHT / 2,
    backgroundColor: '#141414',
    borderRadius: 15,
    // overflow: 'hidden',
  },
  headerHolder: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 2,
  },
  textHeader: {
    textShadowColor: 'black',
    textShadowRadius: 6,
    textShadowOffset: {height: 1, width: 2},
    fontSize: 11,
    textTransform: 'uppercase',
    color: '#fff',
  },
  textHeader2: {
    textShadowColor: 'black',
    textShadowRadius: 6,
    textShadowOffset: {height: 1, width: 2},
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#fff',
  },
  footer: {
    height: 60,
    // backgroundColor: '#141414',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});
