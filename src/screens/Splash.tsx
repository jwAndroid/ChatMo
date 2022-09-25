import { memo, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { signInAnonymously } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

import { Navigation } from '../navigation';
import { auth } from '../api/firebase';
import { cacheFonts, cacheImages } from '../api/cache';
import { font, icon } from '../theme';
import { TextModal } from '../components/common/modal';
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
  width: 200,
  resizeMode: 'contain',
});

const Splash = () => {
  const theme = useTheme();
  const [appIsReady, setAppIsReady] = useState(false);
  const [isWhite, setIsWhite] = useState(true);
  const [cacheReady, setCacheReady] = useState(false);
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  const notification = useMemo(() => {
    return '챗모 앱 서비스를 사용하기 위해,\n네트워크 연결을 확인해주세요.';
  }, []);

  useLayoutEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all([cacheFonts(font), ...cacheImages(icon)]).then(() => {
        setCacheReady(true);
      });
    })();
  }, []);

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
      const { user } = await signInAnonymously(auth);

      if (user.uid !== null && isConnected && cacheReady) {
        setTimeout(() => {
          setAppIsReady(true);
        }, 3000);
      }
    })();
  }, [isConnected, cacheReady]);

  return appIsReady && isConnected && cacheReady ? (
    <Navigation />
  ) : (
    <LogoContainer isWhite={isWhite}>
      <Logo
        source={isWhite ? theme.icon.splash_black : theme.icon.splash_white}
      />

      {!isConnected && <TextModal isOpen notification={notification} />}
    </LogoContainer>
  );
};

export default memo(Splash);
