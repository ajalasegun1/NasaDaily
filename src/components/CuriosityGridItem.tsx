import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {CuriosityItemType} from '../screens/CuriosityScreen';
import MyView3 from './MyView3';
import {HEIGHT} from '../constants';
import FastImage from 'react-native-fast-image';

type Props = {
  data: CuriosityItemType;
};
const CuriosityGridItem: FC<Props> = ({data}) => {
  //   console.log({data});
  const image333 = data.img_src;
  const image = image333.replace('http', 'https');
  //   console.log({image});
  return (
    <MyView3 style={styles.container}>
      <FastImage
        // source={{uri: data.img_src}}
        source={{
          uri: image,
        }}
        style={{width: '100%', height: '100%'}}
      />
    </MyView3>
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
