import {
  ActivityIndicator,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import config from '../config';
import MyView from '../components/MyView';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import CuriosityGridItem from '../components/CuriosityGridItem';
import MyText from '../components/themed/MyText';

export type CuriosityDataType = Array<{
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}>;

export type CuriosityItemType = {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
};

const CuriosityScreen = ({navigation}: any) => {
  const [data, setData] = useState<CuriosityDataType>([]);
  const [page, setPage] = useState(1);
  const [sol, setSol] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    getRoverImages();
  }, []);
  console.log({sol});
  console.log({page});
  const getRoverImages = async () => {
    try {
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}&api_key=${config.API_KEY}`,
      );
      console.log({res: res.data.photos});
      setData(res.data.photos);
      setPage(prev => prev + 1);
      setSol(prev => prev + 1);
      setLoading(false);
    } catch (error) {
      console.log({error});
      setLoading(false);
    }
  };

  const getMoreImages = async () => {
    try {
      console.log('Fetching...');
      setFetching(true);
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${config.API_KEY}`,
      );
      setData(prev => prev.concat(res.data.photos));
      setPage(prev => prev + 1);
      setSol(prev => prev + 1);
      setFetching(false);
    } catch (error) {
      setFetching(false);
    }
  };

  const renderItem: ListRenderItem<CuriosityItemType> = ({item, index}) => (
    <CuriosityGridItem data={item} index={index} fullData={data} />
  );

  const renderFooter = () => (
    <MyView
      style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
      {fetching && <ActivityIndicator size="small" color="#BBBBBB" />}
    </MyView>
  );

  if (loading) {
    return (
      <MyView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {loading && <ActivityIndicator size={'small'} color={'#BBBBBB'} />}
      </MyView>
    );
  }
  return (
    <MyView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.pop()} style={styles.backButton}>
          <MyText>{'<'} Back</MyText>
        </Pressable>
        <MyText style={{fontWeight: '600'}}>Images({data.length})</MyText>
      </View>

      {data?.length > 0 && (
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          onEndReached={() => getMoreImages()}
          onEndReachedThreshold={0.9}
          ListFooterComponent={renderFooter}
        />
      )}
    </MyView>
  );
};

export default CuriosityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
