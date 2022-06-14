import { memo, useEffect, useState } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { cacheFonts, cacheImages } from '../api/cache';
import { font, icon } from '../theme';

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

  return appIsReady ? (
    <Text>setup navigation</Text>
  ) : (
    <Container>
      <Logo source={theme.icon.splashicon} />
    </Container>
  );
};

export default memo(Splash);
