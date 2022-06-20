import { Theme } from '@emotion/react';

export const font = {
  YoonGothicRegular: require('../assets/font/YoonGothicRegular.otf'),
  YoonGothicBold: require('../assets/font/YoonGothicBold.otf'),
};

export const icon = {
  back_arrow_black: require('../assets/icons/back_arrow_black.png'),
  back_arrow_white: require('../assets/icons/back_arrow_white.png'),
  delete: require('../assets/icons/delete.png'),
  edit: require('../assets/icons/edit.png'),
  favorites: require('../assets/icons/favorites.png'),
  list_black: require('../assets/icons/list_black.png'),
  list_white: require('../assets/icons/list_white.png'),
  lock: require('../assets/icons/lock.png'),
  logo_black: require('../assets/icons/logo_black.png'),
  logo_white: require('../assets/icons/logo_white.png'),
  logo: require('../assets/icons/logo.png'),
  settings_black: require('../assets/icons/settings_black.png'),
  settings_white: require('../assets/icons/settings_white.png'),
  splash_black: require('../assets/icons/splash_black.png'),
  splash_white: require('../assets/icons/splash_white.png'),
  statistic_black: require('../assets/icons/statistic_black.png'),
  statistic_white: require('../assets/icons/statistic_white.png'),
};

export const lightTheme: Theme = {
  font: {
    YoonGothicRegular: 'YoonGothicRegular',
    YoonGothicBold: 'YoonGothicBold',
  },
  color: {
    black: '#000',
    white: '#fff',
    text: '#303030',
    divider: '#cccccc',
    background: '#F9F9F9',
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
      background: '#F2F3F5',
    },
    header: {
      background: '#F2F3F5',
    },
  },
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
    text: '#ffffff',
    divider: '#555555',
    background: '#232324',
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
      background: '#0A0A0A',
    },
    header: {
      background: '#0A0A0A',
    },
  },
  icon,
};
