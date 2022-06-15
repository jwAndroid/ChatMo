import { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottmTab from './BottmTab';

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottmTab />
    </NavigationContainer>
  );
};

export default memo(Navigation);
