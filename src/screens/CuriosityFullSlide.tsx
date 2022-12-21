import {ListRenderItem, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import MyView from '../components/MyView';
import MyText from '../components/themed/MyText';
import {FlatList} from 'react-native';
import CuriosityFullItem from '../components/CuriosityFullItem';
import {CuriosityItemType} from './CuriosityScreen';
import VerticalSpace from '../components/VerticalSpace';
import {HEIGHT} from '../constants';

const CuriosityFullSlide = ({route, navigation}: any) => {
  const {index, data} = route.params;
  const fListRef = useRef<FlatList>();
  const renderItem: ListRenderItem<CuriosityItemType> = ({item}) => {
    return <CuriosityFullItem item={item} />;
  };
  return (
    <MyView style={styles.container}>
      <Pressable style={styles.back} onPress={() => navigation.pop()}>
        <MyText>{'<'} Back</MyText>
      </Pressable>
      <FlatList
        renderItem={renderItem}
        data={data}
        initialScrollIndex={index}
        ItemSeparatorComponent={() => <VerticalSpace space={8} />}
        snapToAlignment="start"
        snapToInterval={HEIGHT + 8}
        decelerationRate="fast"
        pagingEnabled
        onScrollToIndexFailed={info => {
          fListRef.current?.scrollToOffset({
            offset: info.averageItemLength * info.index,
            animated: true,
          });
          setTimeout(() => {
            if (data.length !== 0 && fListRef !== null) {
              fListRef?.current?.scrollToIndex({
                index: info.index,
                animated: true,
              });
            }
          }, 100);
        }}
        getItemLayout={(data, index) => ({
          length: HEIGHT,
          offset: HEIGHT * index,
          index,
        })}
      />
    </MyView>
  );
};

export default CuriosityFullSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
});
