import {StyleSheet, Text, useColorScheme, TextStyle} from 'react-native';
import React, {FC} from 'react';
import {textColor, textColorDark} from './Colors';
type Props = {
  children: any;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number;
};
const MyText: FC<Props> = ({children, style, numberOfLines}) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {color: isDark ? textColorDark.adapt1 : textColor.adapt1},
        style,
      ]}>
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
