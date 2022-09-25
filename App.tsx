import { memo, useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { ThemeProvider } from '@emotion/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners';

import Splash from './src/screens/Splash';
import { lightTheme, darkTheme } from './src/theme';
import { APP_THEME_KEY } from './src/api/constants';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  useLayoutEffect(() => {
    EventRegister.addEventListener('changeTheme', (data) => {
      setTheme(data ? lightTheme : darkTheme);
    });

    return () => {
      EventRegister.removeEventListener('changeTheme');
    };
  }, []);

  useLayoutEffect(() => {
    (async () => {
      await SystemUI.setBackgroundColorAsync(theme.color.tab.background);
    })();
  }, [theme.color.tab.background]);

  useLayoutEffect(() => {
    (async () => {
      const appTheme = await AsyncStorage.getItem(APP_THEME_KEY);

      if (appTheme !== null && appTheme !== undefined) {
        setTheme(appTheme === 'white' ? lightTheme : darkTheme);
      }
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style={theme.name === 'lightTheme' ? 'dark' : 'light'} />

        <Splash />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default memo(App);
