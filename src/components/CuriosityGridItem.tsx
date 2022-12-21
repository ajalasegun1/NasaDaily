import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {CuriosityDataType, CuriosityItemType} from '../screens/CuriosityScreen';
import MyView3 from './MyView3';
import {HEIGHT} from '../constants';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';

type Props = {
  data: CuriosityItemType;
  index: number;
  fullData: CuriosityDataType;
};
type CuriosityStackProp = NativeStackNavigationProp<
  RootStackParamList,
  'CuriosityFullSlide'
>;
const CuriosityGridItem: FC<Props> = ({data, index, fullData}) => {
  const navigation = useNavigation<CuriosityStackProp>();
  const image333 = data.img_src;
  const image = image333.replace('http', 'https');
  return (
    <Pressable
      onPress={() => {
        console.log({index});
        navigation.push('CuriosityFullSlide', {data: fullData, index: index});
      }}
      style={{flex: 1}}>
      <MyView3 style={styles.container}>
        <FastImage
          source={{
            uri: image,
          }}
          style={{width: '100%', height: '100%'}}
        />
      </MyView3>
    </Pressable>
  );
};

export default CuriosityGridItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT / 3,
    margin: 1,
  },
});
