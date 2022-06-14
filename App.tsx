import { memo, useMemo } from 'react';
import { ThemeProvider } from '@emotion/react';

import { lightTheme } from './src/theme';
import { StyledText } from './src/components/common';

const App = () => {
  const theme = useMemo(() => lightTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <StyledText>chat-mo</StyledText>
    </ThemeProvider>
  );
};

export default memo(App);
