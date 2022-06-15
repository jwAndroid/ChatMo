import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@emotion/react';
import { EventRegister } from 'react-native-event-listeners';
import styled from '@emotion/native';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';
import { Header, StyledText } from '../../../components/common';
import { SafeAreaContainer } from '../../../components/layout';
import { APP_THEME_KEY } from '../../../api/constants';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.background,
}));

const ContentsContainer = styled.View(() => ({
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  paddingHorizontal: 20,
}));

const ThemeStyle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const theme = useTheme();

  const navigation = useNavigation<SettingScreenNavigationProp>();

  useEffect(() => {
    (async () => {
      const storage = await AsyncStorage.getItem(APP_THEME_KEY);

      if (storage === 'dark') {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    })();
  }, []);

  const backOnPress = useCallback(async () => {
    if (isEnabled) {
      await AsyncStorage.setItem(APP_THEME_KEY, 'dark');
    } else {
      await AsyncStorage.setItem(APP_THEME_KEY, 'white');
    }

    navigation.goBack();
  }, [navigation, isEnabled]);

  const onValueChange = useCallback(() => {
    setIsEnabled((prev) => !prev);

    EventRegister.emit('changeTheme', isEnabled);
  }, [isEnabled]);

  return (
    <SafeAreaContainer>
      <Container>
        <Header
          title="테마 설정"
          backIcon={theme.icon.splashicon}
          backOnPress={backOnPress}
        />

        <StyledText fontSize={18} marginLeft={20} marginTop={20}>
          앱 테마 설정
        </StyledText>

        <ContentsContainer>
          <StyledText fontSize={13}>
            {isEnabled ? '화이트모드 활성화' : '다크모드 활성화'}
          </StyledText>

          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onValueChange}
            value={isEnabled}
          />
        </ContentsContainer>
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(ThemeStyle);
