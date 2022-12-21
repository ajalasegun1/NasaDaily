import {StyleSheet, Text, useColorScheme, View, ViewStyle} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {myBackground, myBackgroundDark} from './themed/Colors';

export type MyViewProps = {
  style?: ViewStyle;
  children?: ReactNode;
};

const MyView: FC<MyViewProps> = ({style, children}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        {
          backgroundColor: isDark
            ? myBackgroundDark.screen_bg
            : myBackground.screen_bg,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default MyView;

const styles = StyleSheet.create({});
