import { memo, useEffect, useState } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { signInAnonymously } from 'firebase/auth';

import { cacheFonts, cacheImages } from '../api/cache';
import { font, icon } from '../theme';
import { Navigation } from '../navigation';
import { auth } from '../api/firebase';

const Container = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'gray',
}));

const Logo = styled.Image({
  width: 100,
  height: 100,
});

const Splash = () => {
  const theme = useTheme();

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await Promise.all([cacheFonts(font), ...cacheImages(icon)]).then(
        (resolve) => {
          console.log(resolve);

          setTimeout(() => {
            setAppIsReady(true);
          }, 3000);
        }
      );
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await signInAnonymously(auth);
    })();
  }, []);

  return appIsReady ? (
    <Navigation />
  ) : (
    <Container>
      <Logo source={theme.icon.splashicon} />
    </Container>
  );
};

export default memo(Splash);
