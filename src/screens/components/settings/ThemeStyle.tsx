import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners';
import styled from '@emotion/native';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';
import { IconHeader, StyledText } from '../../../components/common';
import { SafeAreaContainer } from '../../../components/layout';
import { APP_THEME_KEY } from '../../../api/constants';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
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

  const navigation = useNavigation<SettingScreenNavigationProp>();

  useEffect(() => {
    navigation.addListener('beforeRemove', async () => {
      await AsyncStorage.setItem(APP_THEME_KEY, isEnabled ? 'dark' : 'white');
    });
  }, [navigation, isEnabled]);

  useEffect(() => {
    (async () => {
      const storage = await AsyncStorage.getItem(APP_THEME_KEY);

      setIsEnabled(storage === 'dark' ? true : false);
    })();
  }, []);

  const backOnPress = useCallback(async () => {
    await AsyncStorage.setItem(APP_THEME_KEY, isEnabled ? 'dark' : 'white');

    navigation.goBack();
  }, [navigation, isEnabled]);

  const onValueChange = useCallback(() => {
    setIsEnabled((prev) => !prev);

    EventRegister.emit('changeTheme', isEnabled);
  }, [isEnabled]);

  return (
    <SafeAreaContainer>
      <Container>
        <IconHeader onBackPress={backOnPress} title="설정" backIcon />

        <StyledText fontSize={18} marginLeft={20} marginTop={20}>
          앱 테마 설정
        </StyledText>

        <ContentsContainer>
          <StyledText fontSize={13}>
            {isEnabled ? '화이트모드 활성화' : '다크모드 활성화'}
          </StyledText>

          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={isEnabled ? '#529EF4' : '#f4f3f4'}
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
