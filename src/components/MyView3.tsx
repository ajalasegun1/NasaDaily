import {StyleSheet, Text, View, ViewStyle, useColorScheme} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {myBackground, myBackgroundDark} from './themed/Colors';

export type MyViewProps2 = {
  style?: ViewStyle;
  children?: ReactNode;
};
const MyView3: FC<MyViewProps2> = ({style, children}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <View
      style={[
        {
          ...styles.container,
          backgroundColor: isDark
            ? myBackgroundDark.layer_bg
            : myBackground.layer_bg,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default MyView3;

const styles = StyleSheet.create({
  container: {},
});
