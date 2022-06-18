import { memo } from 'react';
import styled from '@emotion/native';

import { SafeAreaContainer } from '../../../components/layout';
import { StackHeader } from '../../../components/common';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Memo = () => {
  return (
    <SafeAreaContainer>
      <Container>
        <StackHeader title="List" />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Memo);
