import { memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Memo = () => {
  return (
    <Container>
      <Text>Memo Screen</Text>
    </Container>
  );
};

export default memo(Memo);
