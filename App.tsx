/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  FlatListProps,
} from 'react-native';
import Apod from './components/Apod';
import MyText from './components/themed/MyText';

const App = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  text: {
    color: 'green',
  },
});

export default App;
