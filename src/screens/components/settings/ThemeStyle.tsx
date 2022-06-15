import { memo, useCallback } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const ThemeStyle = () => {
  const navigation = useNavigation<SettingScreenNavigationProp>();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Text onPress={onBack}>here is ThemeStyle and go back</Text>
    </Container>
  );
};

export default memo(ThemeStyle);
