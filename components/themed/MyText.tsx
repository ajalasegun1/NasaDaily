import {StyleSheet, Text, useColorScheme, TextStyle} from 'react-native';
import React, {FC} from 'react';
type Props = {
  children: any;
  style?: TextStyle;
  numberOfLines?: number;
};
const MyText: FC<Props> = ({children, style, numberOfLines}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, {color: isDark ? '#fff' : '#1c1c1c'}, style]}>
      {children}
    </Text>
  );
};

export default MyText;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
