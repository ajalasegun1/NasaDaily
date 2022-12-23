import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {RootStackParamList} from '../navigation/RootStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MyView from '../components/MyView';
import MyText from '../components/themed/MyText';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyView2 from '../components/MyView2';
import {HEIGHT} from '../constants';
import FastImage from 'react-native-fast-image';
import MyViewSub from '../components/MyViewSub';
import MyView3 from '../components/MyView3';
import dayjs from 'dayjs';
import ImageView from 'react-native-image-viewing';

type Props = NativeStackScreenProps<RootStackParamList, 'SearchDetailsScreen'>;
const SearchDetailsScreen = ({route, navigation}: Props) => {
  const href = route.params.href;
  const image = route.params.links;
  const data = route.params.data;
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<string>('');
  const [pictures, setPictures] = useState<Array<{uri: string}>>([]);
  const [visible, setIsVisible] = useState(false);
  useEffect(() => {
    getMedias();
  }, []);

  const getMedias = async () => {
    try {
      const res = await axios.get(href);
      //   console.log({media: res.data});
      let pics = res.data.filter((item: string) => item.endsWith('.jpg'));
      let vids = res.data.filter((item: string) => item.endsWith('.mp4'));
      pics = pics.map((item: string) => {
        return {uri: item.replace('http', 'https')};
      });
      vids = vids.map((item: string) => {
        return item.replace('http', 'https');
      });
      //   console.log({vids, pics});
      setPictures(pics);
      if (vids.length > 0) {
        setVideos(vids[0]);
      }

      setLoading(false);
    } catch (error) {
      console.log({error});
      setLoading(false);
      navigation.pop();
    }
  };

  if (loading) {
    return (
      <MyView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color="#d4d4d4" size="small" />
      </MyView>
    );
  }
  return (
    <MyView style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <>
            {/* {console.log({vvvvvv: videos})} */}
            <Pressable
              style={{marginBottom: 8, paddingLeft: 8}}
              onPress={() => navigation.pop()}>
              <MyText>{'<'}Back</MyText>
            </Pressable>
            <MyView2 style={styles.imageHolder}>
              <FastImage
                source={{uri: image[0].href}}
                style={StyleSheet.absoluteFill}
                resizeMode="contain"
              />
            </MyView2>
            <MyView3 style={{padding: 10}}>
              <MyText style={styles.header}>{data[0].title}</MyText>
              <MyText style={styles.date}>
                {dayjs(data[0].date_created).format('MMMM DD, YYYY')}
              </MyText>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {pictures.length > 0 && (
                  <Button title="Images" onPress={() => setIsVisible(true)} />
                )}

                <View style={{width: 8}} />

                {videos.length > 0 && (
                  <Button
                    title="Video"
                    onPress={() =>
                      navigation.push('VideoScreen', {video: videos})
                    }
                  />
                )}
              </View>
            </MyView3>

            <MyText style={{padding: 8}}>{data[0].description}</MyText>
            {/* {console.log({pictures})} */}
            <ImageView
              images={pictures}
              imageIndex={0}
              visible={visible}
              onRequestClose={() => setIsVisible(false)}
            />
          </>
        </ScrollView>
      </SafeAreaView>
    </MyView>
  );
};

export default SearchDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHolder: {
    height: HEIGHT / 3,
  },
  header: {
    fontSize: 25,
    fontWeight: '500',
  },
  date: {
    fontWeight: '500',
  },
  btn: {},
});
