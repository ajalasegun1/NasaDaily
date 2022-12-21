import {StyleSheet, Text, View, ViewStyle, useColorScheme} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {myBackground, myBackgroundDark} from './themed/Colors';

export type MyViewProps2 = {
  style?: ViewStyle;
  children?: ReactNode;
};
const MyView2: FC<MyViewProps2> = ({style, children}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <View
      style={[
        // styles.container,
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

export default MyView2;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
