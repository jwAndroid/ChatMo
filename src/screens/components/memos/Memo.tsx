import { memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';
import { useFocusEffect } from '@react-navigation/native';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Memo = () => {
  useFocusEffect(() => {
    console.log('Arrival Memo Screen');
  });

  return (
    <Container>
      <Text>Memo Screen</Text>
    </Container>
  );
};

export default memo(Memo);
