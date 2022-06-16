import '@emotion/react';

import { icon } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      // YoonGothicBold: string;
    };
    color: {
      black: string;
      white: string;
      tab: {
        background: string;
        text: string;
      };
    };
    background: string;
    icon: typeof icon;
  }
}
