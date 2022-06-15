import { memo, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { lightTheme, darkTheme } from './src/theme';
import { Splash } from './src/screens';
import { APP_THEME_KEY } from './src/api/constants';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    EventRegister.addEventListener('changeTheme', (data) => {
      if (data) {
        setTheme(lightTheme);
      } else {
        setTheme(darkTheme);
      }
    });

    return () => {
      EventRegister.removeEventListener('changeTheme');
    };
  }, []);

  useEffect(() => {
    (async () => {
      const appTheme = await AsyncStorage.getItem(APP_THEME_KEY);

      if (appTheme === 'white') {
        setTheme(lightTheme);
      } else {
        setTheme(darkTheme);
      }
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="default" />

      <Splash />
    </ThemeProvider>
  );
};

export default memo(App);
