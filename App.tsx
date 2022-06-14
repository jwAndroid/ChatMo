import { memo, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';

import { lightTheme } from './src/theme';
import { Splash } from './src/screens';

const App = () => {
  const theme = useMemo(() => lightTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  );
};

export default memo(App);
