import { memo, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from '@emotion/react';

import { lightTheme, darkTheme } from './src/theme';
import { Splash } from './src/screens';
import { APP_THEME_KEY } from './src/api/constants';

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    EventRegister.addEventListener('changeTheme', (data) => {
      setTheme(data ? lightTheme : darkTheme);

      setIsWhite(data);
    });

    return () => {
      EventRegister.removeEventListener('changeTheme');
    };
  }, []);

  useEffect(() => {
    (async () => {
      const appTheme = await AsyncStorage.getItem(APP_THEME_KEY);

      setTheme(appTheme === 'white' ? lightTheme : darkTheme);

      setIsWhite(appTheme === 'white' ? true : false);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={isWhite ? 'dark' : 'light'} />

      <Splash />
    </ThemeProvider>
  );
};

export default memo(App);
