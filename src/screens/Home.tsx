import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Apod from '../components/Apod';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView bounces={false} contentContainerStyle={{height: '100%'}}>
          <Apod />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'black',
  },
});
