import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import MyView2 from './MyView2';
import MyText from './themed/MyText';
import FastImage from 'react-native-fast-image';
import {WIDTH} from '../constants';
import dayjs from 'dayjs';
import config from '../config';

type Props = {
  data: {
    [key: string]: any;
  };
};

const EpicItem: FC<Props> = ({data}) => {
  const date = dayjs(data.date).format('YYYY/MM/DD');
  const uri = `https://api.nasa.gov/EPIC/archive/enhanced/${dayjs(date).format(
    'YYYY/MM/DD',
  )}/png/${data.image}.png?api_key=${config.API_KEY}`;
  const coordinates = data.centroid_coordinates;
  const time = dayjs(data.date).format('h:mm: a');
  return (
    <MyView2 style={styles.item}>
      <View style={{flex: 8}}>
        <FastImage
          source={{
            uri,
          }}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      </View>

      <MyView2
        style={{
          flex: 2,
          padding: 10,
          justifyContent: 'center',
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <MyText style={styles.details}>Identifier - {data.identifier}</MyText>
        <MyText style={styles.details}>
          Coordinates - LAT: {coordinates.lat} LON: {coordinates.lon}
        </MyText>
        <MyText style={styles.details}>Time taken: {time} </MyText>
      </MyView2>
    </MyView2>
  );
};

export default EpicItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: WIDTH - 40,
    borderRadius: 15,
    marginRight: 8,
  },
  details: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
  },
});
