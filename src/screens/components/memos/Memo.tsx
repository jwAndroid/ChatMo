import { memo, useCallback } from 'react';
import styled from '@emotion/native';
import { Pressable, Text } from 'react-native';

import { SafeAreaContainer } from '../../../components/layout';
import { MainHeader } from '../../../components/common';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Memo = () => {
  const onPress = useCallback(() => {}, []);

  return (
    <SafeAreaContainer>
      <Container>
        <MainHeader title="List" />

        <Pressable onPress={onPress}>
          <Text>모달 테스트</Text>
        </Pressable>
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Memo);
