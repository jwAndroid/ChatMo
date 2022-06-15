import { memo, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import { lightTheme } from './src/theme';
import { Splash } from './src/screens';

const App = () => {
  const theme = useMemo(() => lightTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" />

      <Splash />
    </ThemeProvider>
  );
};

export default memo(App);
