import { memo, useEffect, useLayoutEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInAnonymously } from 'firebase/auth';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { cacheFonts, cacheImages } from '../api/cache';
import { font, icon } from '../theme';
import { Navigation } from '../navigation';
import { auth } from '../api/firebase';
import { APP_THEME_KEY } from '../api/constants';

interface ILogoContainer {
  isWhite: boolean;
}

const LogoContainer = styled.View<ILogoContainer>(({ theme, isWhite }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 50,
  backgroundColor: isWhite ? theme.color.white : theme.color.black,
}));

const Logo = styled.Image({
  width: '100%',
  resizeMode: 'contain',
});

const Splash = () => {
  const theme = useTheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [isWhite, setIsWhite] = useState(true);

  useLayoutEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useLayoutEffect(() => {
    (async () => {
      const appTheme = await AsyncStorage.getItem(APP_THEME_KEY);

      if (appTheme !== null && appTheme !== undefined) {
        setIsWhite(appTheme === 'white' ? true : false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all([cacheFonts(font), ...cacheImages(icon)]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { user } = await signInAnonymously(auth);

      if (user.uid !== null && user.uid !== undefined) {
        setTimeout(() => {
          setAppIsReady(true);
        }, 3000);
      }
    })();
  }, []);

  return appIsReady ? (
    <Navigation />
  ) : (
    <LogoContainer isWhite={isWhite}>
      <Logo
        source={isWhite ? theme.icon.splash_black : theme.icon.splash_white}
      />
    </LogoContainer>
  );
};

export default memo(Splash);
