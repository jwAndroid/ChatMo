import { FC, memo } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { MessageEntity } from '../../model';
import { StyledText } from '../common/text';

const Container = styled.View(() => ({
  flex: 1,
}));

const BubbleContainer = styled.View(({ theme }) => ({
  flex: 1,
  paddingVertical: 8,
  paddingHorizontal: 10,
  marginTop: 8,
  marginBottom: 1,
  marginLeft: 100,
  marginRight: 2,
  borderRadius: 10,
  backgroundColor: theme.color.item.bubble,
}));

const DisplayContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'row',
  marginHorizontal: 8,
}));

const TimeText = styled.Text(({ theme }) => ({
  fontSize: 11,
  fontWeight: '400',
  marginBottom: 0.8,
  color: theme.color.item.time,
}));

const Ticks = styled.Image(({ theme }) => ({
  width: 14,
  height: 14,
  marginLeft: 5,
  tintColor: theme.color.item.bubble,
}));

interface IBubble {
  item: MessageEntity;
}

const Bubble: FC<IBubble> = ({ item }) => {
  const theme = useTheme();

  return (
    <Container>
      <BubbleContainer>
        <StyledText fontSize={14} color={theme.color.white}>
          {item.message}
        </StyledText>
      </BubbleContainer>

      <DisplayContainer>
        <TimeText>오전 1:28</TimeText>

        {item.status === 1 && <Ticks source={theme.icon.bubble_check} />}
      </DisplayContainer>
    </Container>
  );
};

export default memo(Bubble);
