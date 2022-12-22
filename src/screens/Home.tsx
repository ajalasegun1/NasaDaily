import {ScrollView, StyleSheet, StatusBar, Platform} from 'react-native';
import React from 'react';
import Apod from '../components/Apod';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import VerticalSpace from '../components/VerticalSpace';
import MyText from '../components/themed/MyText';
import MyView from '../components/MyView';
import Epic from '../components/Epic';
import Curiosity from '../components/Curiosity';
import SearchNasa from '../components/SearchNasa';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <MyView style={styles.container}>
      <SafeAreaView>
        <ScrollView bounces={false}>
          <Apod />
          <VerticalSpace space={20} />
          <Epic />
          <VerticalSpace space={20} />
          <Curiosity />
          <VerticalSpace space={20} />
          <SearchNasa />
          <VerticalSpace space={20} />
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle={'default'} />
    </MyView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});
