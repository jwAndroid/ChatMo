import { Theme } from '@emotion/react';

export const font = {
  //   YoonGothicBold: require('../assets/font/YoonGothicBold.otf'),
};

export const icon = {
  splashicon: require('../assets/icons/splashicon.png'),
};

export const lightTheme: Theme = {
  font: {
    //  YoonGothicBold: 'YoonGothicBold',
  },
  color: {
    black: '#000',
    white: '#fff',
    tab: {
      background: '#fff',
      text: '#000',
    },
  },
  background: '#fff',
  icon,
};

export const darkTheme: Theme = {
  font: {
    //  YoonGothicBold: 'YoonGothicBold',
  },
  color: {
    black: '#000',
    white: '#fff',
    tab: {
      background: 'gray',
      text: '#fff',
    },
  },
  background: 'gray',
  icon,
};
