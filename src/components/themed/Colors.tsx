import {useColorScheme} from 'react-native';

export const myBackground = {
  screen_bg: '#efeff4', //Screen background
  layer_bg: '#ffffff', // Background for content layer
  sub_bg: '#efeffe', // Background for subheads
  disabled_bg: '#f0f0f0', // Background for cells not tapable
  selected_bg: '#e8f0fe', // Background for selected / pressed
};

export const myBackgroundDark = {
  screen_bg: '#171A23', //Screen background
  // layer_bg: '#1b2440', // Background for content layer
  layer_bg: '#242424',
  sub_bg: '#2a3556', // Background for subheads
  disabled_bg: '#29324d', // Background for cells not tapable
  selected_bg: '#202f61', // Background for selected / pressed
};

export const textColor = {
  adapt1: 'black',
  adapt2: 'rgb(142,142,147)',
  adapt3: 'rgb(99,99,102)',
  disabled: 'rgb(58,58,60)',
};

export const textColorDark = {
  adapt1: 'white',
  adapt2: 'rgb(142,142,147)',
  adapt3: 'rgb(174, 174, 178)',
  disabled: 'rgb(209,209,214)',
};
