import { Theme } from '@emotion/react';

export const font = {
  YoonGothicRegular: require('../assets/font/YoonGothicRegular.otf'),
  YoonGothicBold: require('../assets/font/YoonGothicBold.otf'),
};

export const icon = {
  splash_white: require('../assets/icons/splash_white.png'),
  splash_black: require('../assets/icons/splash_black.png'),
  logo_white: require('../assets/icons/logo_white.png'),
  logo_black: require('../assets/icons/logo_black.png'),
};

export const lightTheme: Theme = {
  font: {
    YoonGothicRegular: 'YoonGothicRegular',
    YoonGothicBold: 'YoonGothicBold',
  },
  color: {
    black: '#000',
    white: '#fff',
    gray_20: '#F9F9F9',
    gray_40: '#F2F3F5',
    gray_50: '#EBEDF0',
    gray_100: '#E1E3E6',
    gray_200: '#C4C8CC',
    gray_300: '#AAAEB3',
    gray_400: '#909499',
    gray_450: '#7F8285',
    gray_500: '#76787A',
    gray_600: '#5D5F61',
    gray_700: '#454647',
    gray_750: '#363738',
    gray_800: '#2C2D2E',
    gray_850: '#232324',
    gray_900: '#19191A',
    gray_950: '#141414',
    gray_1000: '#0A0A0A',
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
    YoonGothicRegular: 'YoonGothicRegular',
    YoonGothicBold: 'YoonGothicBold',
  },
  color: {
    black: '#000000',
    white: '#ffffff',
    gray_20: '#F9F9F9',
    gray_40: '#F2F3F5',
    gray_50: '#EBEDF0',
    gray_100: '#E1E3E6',
    gray_200: '#C4C8CC',
    gray_300: '#AAAEB3',
    gray_400: '#909499',
    gray_450: '#7F8285',
    gray_500: '#76787A',
    gray_600: '#5D5F61',
    gray_700: '#454647',
    gray_750: '#363738',
    gray_800: '#2C2D2E',
    gray_850: '#232324',
    gray_900: '#19191A',
    gray_950: '#141414',
    gray_1000: '#0A0A0A',
    tab: {
      background: 'gray',
      text: '#fff',
    },
  },
  background: 'gray',
  icon,
};
