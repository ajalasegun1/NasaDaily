import {StyleSheet, Text, View, ViewStyle, useColorScheme} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {myBackground, myBackgroundDark} from './themed/Colors';

export type MyViewProps2 = {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
};
const MyViewSub: FC<MyViewProps2> = ({style, children}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <View
      style={[
        {
          ...styles.container,
          backgroundColor: isDark
            ? myBackgroundDark.sub_bg
            : myBackground.sub_bg,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default MyViewSub;

const styles = StyleSheet.create({
  container: {},
});
