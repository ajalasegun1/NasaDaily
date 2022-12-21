import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {HEIGHT} from '../constants';
import {CuriosityItemType} from '../screens/CuriosityScreen';
import MyView3 from './MyView3';
import FastImage from 'react-native-fast-image';

type Props = {
  item: CuriosityItemType;
};
const CuriosityFullItem: FC<Props> = ({item}) => {
  const initial = item.img_src;
  const image = initial.replace('http', 'https');
  return (
    <MyView3 style={styles.container}>
      <FastImage
        source={{uri: image}}
        style={{width: '100%', height: '100%'}}
        resizeMode="contain"
      />
    </MyView3>
  );
};

export default CuriosityFullItem;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
  },
});
