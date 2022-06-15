import { memo, useCallback } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const Setting = () => {
  const navigation = useNavigation<SettingScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('ThemeStyle');
  }, [navigation]);

  return (
    <Container>
      <Text onPress={onPress}>go ThemeStyle Screen</Text>
    </Container>
  );
};

export default memo(Setting);
