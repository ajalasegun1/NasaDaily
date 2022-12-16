import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import config from '../config';
import MyText from './themed/MyText';
import {HEIGHT} from '../constants';
import dayjs from 'dayjs';
import FastImage from 'react-native-fast-image';

const Apod = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<null | {[key: string]: any}>(null);
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
      <MyText style={styles.text}>
        {dayjs(new Date()).format('dddd D MMMM')}
      </MyText>
      <MyText style={styles.text2}>Today</MyText>
      <View style={styles.contentHolder}>
        <View style={styles.headerHolder}>
          <MyText style={styles.textHeader}>Photo of the day</MyText>
          <MyText style={styles.textHeader2}>{data?.title}</MyText>
        </View>
        <FastImage
          source={{
            // uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
            uri: data?.url,
          }}
          style={{width: '100%', height: '100%'}}
        />
        <View style={styles.footer}>
          <MyText numberOfLines={2}>{data?.explanation}</MyText>
        </View>
      </View>
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
    color: '#fff',
    letterSpacing: 2,
    fontWeight: '600',
    marginVertical: 5,
  },
  contentHolder: {
    width: '100%',
    height: HEIGHT / 2,
    backgroundColor: '#141414',
    borderRadius: 15,
    overflow: 'hidden',
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
    // color: '#A4A4A4',
  },
  textHeader2: {
    textShadowColor: 'black',
    textShadowRadius: 6,
    textShadowOffset: {height: 1, width: 2},
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700',
    // color: '#A4A4A4',
  },
  footer: {
    height: 60,
    backgroundColor: '#141414',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
