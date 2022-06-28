import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { memo } from 'react';

const Container = styled.View(() => ({
  paddingLeft: 2,
}));

const Ticks = styled.Image(({ theme }) => ({
  width: 8,
  height: 8,
  marginBottom: 0.6,
  tintColor: theme.color.white,
}));

const BubbleTicks = () => {
  const theme = useTheme();

  return (
    <Container>
      <Ticks source={theme.icon.bubble_check} />
    </Container>
  );
};

export default memo(BubbleTicks);
