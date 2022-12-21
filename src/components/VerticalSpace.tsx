import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

export type Props = {
  space: number;
};

const VerticalSpace: FC<Props> = ({space}) => {
  return <View style={{height: space, width: '100%'}} />;
};

export default VerticalSpace;

const styles = StyleSheet.create({});
