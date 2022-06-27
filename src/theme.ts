import { Theme } from '@emotion/react';

export const font = {
  YoonGothicRegular: require('../assets/font/YoonGothicRegular.otf'),
  YoonGothicBold: require('../assets/font/YoonGothicBold.otf'),
};

export const icon = {
  back_arrow_black: require('../assets/icons/back_arrow_black.png'),
  back_arrow_white: require('../assets/icons/back_arrow_white.png'),
  circle_x: require('../assets/icons/circle_x.png'),
  delete: require('../assets/icons/delete.png'),
  edit: require('../assets/icons/edit.png'),
  favorites: require('../assets/icons/favorites.png'),
  favoritesfill: require('../assets/icons/favoritesfill.png'),
  list_black: require('../assets/icons/list_black.png'),
  list_white: require('../assets/icons/list_white.png'),
  lock: require('../assets/icons/lock.png'),
  logo_black: require('../assets/icons/logo_black.png'),
  logo_white: require('../assets/icons/logo_white.png'),
  logo: require('../assets/icons/logo.png'),
  more: require('../assets/icons/more.png'),
  settings_black: require('../assets/icons/settings_black.png'),
  settings_white: require('../assets/icons/settings_white.png'),
  splash_black: require('../assets/icons/splash_black.png'),
  splash_white: require('../assets/icons/splash_white.png'),
  statistic_black: require('../assets/icons/statistic_black.png'),
  statistic_white: require('../assets/icons/statistic_white.png'),
};

export const lightTheme: Theme = {
  name: 'lightTheme',
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
    gray_350: '#71757E',
    gray_400: '#909499',
    gray_450: '#7F8285',
    gray_500: '#76787A',
    gray_600: '#5D5F61',
    gray_700: '#454647',
    gray_750: '#363738',
    gray_800: '#2C2D2E',
    gray_830: '#303030',
    gray_850: '#232324',
    gray_900: '#19191A',
    gray_950: '#141414',
    gray_1000: '#0A0A0A',
    red_error: '#EB4250',
    white_blue: '#CCE4FF',
    sky_100: '#97c4f8',
    sky_200: '#85bbf7',
    sky_300: '#74b1f6',
    sky_400: '#529EF4',
    text: '#303030',
    divider: '#cccccc',
    background: '#F9F9F9',
    tab: {
      background: '#F9F9F9',
    },
    header: {
      background: '#F9F9F9',
    },
    item: {
      text: '#71757E',
      border: '#AAAEB3',
      card_background: '#E1E3E6',
      arrow: '#0A0A0A',
      bubble: '#0781FF',
    },
  },
  icon,
};

export const darkTheme: Theme = {
  name: 'darkTheme',
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
    gray_350: '#71757E',
    gray_400: '#909499',
    gray_450: '#7F8285',
    gray_500: '#76787A',
    gray_600: '#5D5F61',
    gray_700: '#454647',
    gray_750: '#363738',
    gray_800: '#2C2D2E',
    gray_830: '#303030',
    gray_850: '#232324',
    gray_900: '#19191A',
    gray_950: '#141414',
    gray_1000: '#0A0A0A',
    red_error: '#EB4250',
    white_blue: '#CCE4FF',
    sky_100: '#97c4f8',
    sky_200: '#85bbf7',
    sky_300: '#74b1f6',
    sky_400: '#529EF4',
    text: '#ffffff',
    divider: '#555555',
    background: '#0A0A0A',
    tab: {
      background: '#0A0A0A',
    },
    header: {
      background: '#0A0A0A',
    },
    item: {
      text: '#E1E3E6',
      border: '#E1E3E6',
      card_background: '#E1E3E6',
      arrow: '#fff',
      bubble: '#0781FF',
    },
  },
  icon,
};
