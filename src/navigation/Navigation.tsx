import { memo, useLayoutEffect, useMemo } from 'react';
import { StatusBar } from 'react-native';
import {
  DefaultTheme,
  NavigationContainer,
  Theme as navigationContainerTheme,
} from '@react-navigation/native';
import { useTheme } from '@emotion/react';

import BottmNavigation from './BottmNavigation';

const Navigation = () => {
  const theme = useTheme();

  useLayoutEffect(() => {
    StatusBar.setHidden(false);
  }, []);

  const navigationContainerTheme = useMemo<navigationContainerTheme>(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.color.background,
      },
    }),
    [theme.color.background]
  );

  return (
    <NavigationContainer theme={navigationContainerTheme}>
      <BottmNavigation />
    </NavigationContainer>
  );
};

export default memo(Navigation);
