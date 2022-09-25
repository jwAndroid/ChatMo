import { memo, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from '@emotion/native';

import { SettingScreenNavigationProp } from '../../stacks/SettingStack';
import { SettingItem } from '../../../components/common/setting';
import { Divider } from '../../../components/common/item';
import { MainHeader } from '../../../components/common/header';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Setting = () => {
  const navigation = useNavigation<SettingScreenNavigationProp>();

  const settings = useMemo(
    () => [
      { id: 1, title: '테마설정' },
      { id: 2, title: '이용약관' },
      { id: 3, title: '개인정보보호' },
      { id: 4, title: '앱 비밀번호 설정' },
    ],
    []
  );

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const onPress = useCallback(
    (title: string) => () => {
      if (title === settings[0].title) {
        navigation.navigate('ThemeStyle');
      }
    },
    [navigation, settings]
  );

  const renderItem = useCallback(
    ({ item }) => {
      return <SettingItem title={item.title} onPress={onPress} />;
    },
    [onPress]
  );

  const divider = useCallback(() => {
    return <Divider />;
  }, []);

  return (
    <Container>
      <MainHeader title="Setting" />

      <FlatList
        data={settings}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={divider}
      />
    </Container>
  );
};

export default memo(Setting);
