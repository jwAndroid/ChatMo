import { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';
import { SafeAreaContainer } from '../../../components/layout';
import { Divider, MainHeader, StyledText } from '../../../components/common';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Setting = () => {
  const theme = useTheme();

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
            fontSize={14}
            color={theme.color.text}
            marginLeft={20}
            marginTop={15}
            marginBottom={15}
          >
            테마설정
          </StyledText>
        </TouchableWithoutFeedback>

        <Divider />

        <TouchableWithoutFeedback>
          <StyledText
            fontSize={14}
            color={theme.color.text}
            marginLeft={20}
            marginTop={15}
            marginBottom={15}
          >
            이용약관
          </StyledText>
        </TouchableWithoutFeedback>

        <Divider />

        <TouchableWithoutFeedback>
          <StyledText
            fontSize={14}
            color={theme.color.text}
            marginLeft={20}
            marginTop={15}
            marginBottom={15}
          >
            개인정보보호
          </StyledText>
        </TouchableWithoutFeedback>

        <Divider />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Setting);
