import { memo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Header } from '../../../components/common';
import { SafeAreaContainer } from '../../../components/layout';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Memo = () => {
  const theme = useTheme();

  return (
    <SafeAreaContainer>
      <Container>
        <Header title="List" />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Memo);
