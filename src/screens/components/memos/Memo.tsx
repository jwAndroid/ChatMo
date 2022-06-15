import { memo } from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';
import { useFocusEffect } from '@react-navigation/native';
import { auth } from '../../../api/firebase';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Memo = () => {
  useFocusEffect(() => {
    const user = auth.currentUser;

    console.log(user?.uid);
  });

  return (
    <Container>
      <Text>Memo Screen</Text>
    </Container>
  );
};

export default memo(Memo);
