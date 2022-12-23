import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {ResultItemType, ResultType} from '../screens/SearchScreen';
import MyView2 from './MyView2';
import {HEIGHT} from '../constants';
import FastImage from 'react-native-fast-image';
import MyText from './themed/MyText';
import {BlurView} from '@react-native-community/blur';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import {useNavigation} from '@react-navigation/native';
import MyViewSub from './MyViewSub';
type SearchItemNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'SearchDetailsScreen'
>;
type Props = {item: ResultItemType};
const SearchItem: FC<Props> = ({item}) => {
  console.log({item: item.links[0].href});
  const navigation = useNavigation<SearchItemNavProp>();
  return (
    <Pressable onPress={() => navigation.push('SearchDetailsScreen', item)}>
      <MyView2 style={styles.container}>
        <FastImage
          source={{uri: item.links[0].href}}
          style={{width: '100%', height: '100%', borderRadius: 15}}
        />

        {Platform.OS === 'ios' ? (
          <BlurView
            style={styles.blurContainer}
            blurType="light"
            blurAmount={3}
            blurRadius={3}>
            <MyText
              style={[{color: 'white'}, styles.heading]}
              numberOfLines={2}>
              {item.data[0].title}
            </MyText>
            <MyText style={styles.desc} numberOfLines={2}>
              {item.data[0].description}
            </MyText>
          </BlurView>
        ) : (
          <MyViewSub style={styles.blurContainer}>
            <MyText
              style={[{color: 'white'}, styles.heading]}
              numberOfLines={2}>
              {item.data[0].title}
            </MyText>
            <MyText style={styles.desc} numberOfLines={2}>
              {item.data[0].description}
            </MyText>
          </MyViewSub>
        )}
        {/* <BlurView
          style={styles.blurContainer}
          blurType="light"
          blurAmount={3}
          blurRadius={3}>
          <MyText style={[{color: 'white'}, styles.heading]} numberOfLines={2}>
            {item.data[0].title}
          </MyText>
          <MyText style={styles.desc} numberOfLines={2}>
            {item.data[0].description}
          </MyText>
        </BlurView> */}
      </MyView2>
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT / 1.8,
    marginHorizontal: 8,
    borderRadius: 15,
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
