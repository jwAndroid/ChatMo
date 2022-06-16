import { memo, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import BottmTab from './BottmTab';

const Navigation = () => {
  useLayoutEffect(() => {
    StatusBar.setHidden(false);
  }, []);

  return (
    <NavigationContainer>
      <BottmTab />
    </NavigationContainer>
  );
};

export default memo(Navigation);
