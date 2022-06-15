import { memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.background,
}));

const Statistics = () => {
  return (
    <Container>
      <Text>Statistics Screen</Text>
    </Container>
  );
};

export default memo(Statistics);
