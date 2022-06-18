import { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from '@emotion/native';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';
import { SafeAreaContainer } from '../../../components/layout';
import { Divider, MainHeader, StyledText } from '../../../components/common';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Setting = () => {
  const navigation = useNavigation<SettingScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('ThemeStyle');
  }, [navigation]);

  return (
    <SafeAreaContainer>
      <Container>
        <MainHeader title="Setting" />

        <TouchableWithoutFeedback onPress={onPress}>
          <StyledText
            marginLeft={20}
            marginTop={15}
            marginBottom={15}
            fontSize={14}
          >
            테마설정
          </StyledText>
        </TouchableWithoutFeedback>

        <Divider />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Setting);
