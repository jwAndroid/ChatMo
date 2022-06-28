import { FC, memo, ReactNode } from 'react';
import { useTheme } from '@emotion/react';
import { IMessage, MessageTextProps } from 'react-native-gifted-chat';
import styled from '@emotion/native';
import StyledText from './StyledText';

const Container = styled.View(() => ({
  paddingVertical: 3,
}));

interface IBubbleItem {
  messageText: MessageTextProps<IMessage> & Readonly<{ children?: ReactNode }>;
}

const BubbleText: FC<IBubbleItem> = ({ messageText }) => {
  const theme = useTheme();

  const message = messageText.currentMessage!!.text;

  return (
    <Container>
      <StyledText color={theme.color.white} fontSize={14}>
        {message}
      </StyledText>
    </Container>
  );
};

export default memo(BubbleText);
