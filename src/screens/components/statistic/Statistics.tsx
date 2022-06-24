import { memo, useCallback } from 'react';
import styled from '@emotion/native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainHeader } from '../../../components/common';
import { RoomScreenNavigationProp } from '../../stacks/StatisticsStack';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Statistics = () => {
  const navigation = useNavigation<RoomScreenNavigationProp>();

  const onPress = useCallback(() => {
    navigation.navigate('Room');

    // navigation.navigate('Room' , props item);
  }, [navigation]);

  return (
    <Container>
      <MainHeader title="Statistics" />

      <Text style={{ color: 'white' }} onPress={onPress}>
        go room
      </Text>
    </Container>
  );
};

export default memo(Statistics);
