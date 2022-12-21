import {
  Button,
  Pressable,
  StyleSheet,
  useColorScheme,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {FC, useMemo, useState} from 'react';
import MyView from '../components/MyView';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyText from '../components/themed/MyText';
import MyView2 from '../components/MyView2';
import VerticalSpace from '../components/VerticalSpace';
import {textColor} from '../components/themed/Colors';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import axios from 'axios';
import config from '../config';
import {WIDTH} from '../constants';
import EpicItem from '../components/EpicItem';

type EpicScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'EpicScreen'
>;

type RenderItemType = {
  [key: string]: any;
};

const EpicScreen: FC<EpicScreenNavigationProp> = ({navigation}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  const [date, setDate] = useState<Date>(new Date('2015-10-05'));
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState<string>('');
  const [lon, setLon] = useState<string>('');
  const [epicData, setEpicData] = useState<Array<{[key: string]: any}>>();

  const getEpic = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.nasa.gov/EPIC/api/enhanced/date/${dayjs(date).format(
          'YYYY-MM-DD',
        )}?api_key=${config.API_KEY}`,
      );
      setEpicData(res.data);
      setLoading(false);
      console.log({res: res.data});
    } catch (error) {
      console.log({error});
      setLoading(false);
    }
  };

  const renderItem = ({item}: RenderItemType) => <EpicItem data={item} />;
  const renderEmpty = () => (
    <MyView2
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: WIDTH - 16,
        borderRadius: 15,
      }}>
      {loading && <ActivityIndicator size={'small'} color={'aqua'} />}
    </MyView2>
  );
  return (
    <MyView style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Pressable onPress={() => navigation.pop()}>
          <MyText>{'<'} Back</MyText>
        </Pressable>
        <VerticalSpace space={10} />
        <MyView2 style={styles.header}>
          <MyText style={{textAlign: 'center'}}>
            Pick a date then search for EPIC's images of the earth on that day
          </MyText>
          <VerticalSpace space={8} />
          <MyText
            style={{
              textAlign: 'center',
              color: textColor.adapt2,
              fontSize: 11,
            }}>
            * The image might take a while to load because of it's size
          </MyText>

          <Button
            title={dayjs(date).format('YYYY-MM-DD')}
            onPress={() => setOpen(true)}
          />
          <VerticalSpace space={8} />
          <VerticalSpace space={8} />
          <Button title="Search" onPress={() => getEpic()} />
        </MyView2>
        <VerticalSpace space={8} />
        <FlatList
          data={epicData}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => item.identifier}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={renderEmpty}
        />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          minimumDate={new Date('2015-10-05')}
        />
      </SafeAreaView>

      {/* {renderModal} */}
    </MyView>
  );
};

export default EpicScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    // height: '100%',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 15,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  item: {
    flex: 1,
    // backgroundColor: 'green',
    width: WIDTH - 40,
    borderRadius: 15,
  },
  details: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
  },
});
