import '@emotion/react';

import { icon } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      YoonGothicRegular: string;
      YoonGothicBold: string;
    };
    color: {
      black: string;
      white: string;
      text: string;
      divider: string;
      background: string;
      gray_20: string;
      gray_40: string;
      gray_50: string;
      gray_100: string;
      gray_200: string;
      gray_300: string;
      gray_350: string;
      gray_400: string;
      gray_450: string;
      gray_500: string;
      gray_600: string;
      gray_700: string;
      gray_750: string;
      gray_800: string;
      gray_850: string;
      gray_900: string;
      gray_950: string;
      gray_1000: string;
      red_error: string;
      sky_100: string;
      sky_200: string;
      sky_300: string;
      sky_400: string;
      tab: {
        background: string;
      };
      header: {
        background: string;
      };
      item: {
        text: string;
      };
    };
    icon: typeof icon;
  }
}
