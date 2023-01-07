import {
  StyleSheet,
  Text,
  View,
  Button,
  useColorScheme,
  TextInput,
  FlatList,
  Pressable,
  ListRenderItem,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import MyView from '../components/MyView';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyView3 from '../components/MyView3';
import MyText from '../components/themed/MyText';
import axios from 'axios';
import SearchItem from '../components/SearchItem';
import VerticalSpace from '../components/VerticalSpace';
import {HEIGHT} from '../constants';
import {RootStackParamList} from '../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ResultType = Array<{
  href: string;
  data: [
    {
      center: string;
      title: string;
      nasa_id: string;
      date_created: string;
      keywords: [string];
      media_type: string;
      description_508: string;
      secondary_creator: string;
      description: string;
    },
  ];
  links: [
    {
      href: string;
      rel: string;
      render: string;
    },
  ];
}>;

export type ResultItemType = {
  href: string;
  data: [
    {
      center: string;
      title: string;
      nasa_id: string;
      date_created: string;
      keywords: [string];
      media_type: string;
      description_508: string;
      secondary_creator: string;
      description: string;
    },
  ];
  links: [
    {
      href: string;
      rel: string;
      render: string;
    },
  ];
};

type SearchScreenPropType = NativeStackNavigationProp<
  RootStackParamList,
  'SearchScreen'
>;

type Props = {
  navigation: SearchScreenPropType;
};

const SearchScreen = ({navigation}: Props) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<ResultType>([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://images-api.nasa.gov/search?q=${query}`,
      );
      console.log({res: res.data.collection.items});
      const result = res.data.collection.items;
      setLoading(false);
      setResult(result);
    } catch (error) {
      console.log({error});
      setLoading(false);
    }
  };

  const check = () => {
    if (!query) return;
    getData();
  };

  const renderItem: ListRenderItem<ResultItemType> = ({item}) => (
    <SearchItem item={item} />
  );

  return (
    <MyView style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Pressable
          style={{marginBottom: 8, marginLeft: 8}}
          onPress={() => navigation.pop()}>
          <MyText>{'<'} Back</MyText>
        </Pressable>
        <MyView3 style={styles.inputContainer}>
          <TextInput
            selectionColor={'#d4d4d4'}
            placeholder="Search"
            style={[
              styles.input,
              {
                color: isDark ? 'white' : 'black',
                paddingHorizontal: 8,
                paddingVertical: 0,
                // backgroundColor: 'black',
              },
            ]}
            value={query}
            onChangeText={val => setQuery(val)}
          />
        </MyView3>
        <MyText style={styles.noteText}>
          Enter any topic you wish to get info on. E.g Sun, Ocean, Apollo, etc.
        </MyText>
        {loading && <MyText style={styles.noteText2}>Loading...</MyText>}

        <View style={{paddingHorizontal: 8, marginBottom: 10}}>
          <Button title="Search" onPress={() => check()} />
        </View>

        <FlatList
          renderItem={renderItem}
          data={result}
          ItemSeparatorComponent={() => <VerticalSpace space={8} />}
          pagingEnabled
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={HEIGHT / 1.8 + 8}
        />
      </SafeAreaView>
    </MyView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  input: {
    // backgroundColor: 'red',
    paddingLeft: 8,
  },
  noteText: {
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 8,
    marginVertical: 10,
  },
  noteText2: {
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 8,
  },
});
