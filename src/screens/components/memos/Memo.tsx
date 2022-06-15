import { memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { auth } from '../../../api/firebase';
import { APP_THEME_KEY } from '../../../api/constants';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Memo = () => {
  useFocusEffect(() => {
    (async () => {
      const themeName = await AsyncStorage.getItem(APP_THEME_KEY);

      console.log(themeName);
    })();
  });

  return (
    <Container>
      <Text>Memo Screen</Text>
    </Container>
  );
};

export default memo(Memo);
