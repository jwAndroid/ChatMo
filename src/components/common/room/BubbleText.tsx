import { FC, memo, ReactNode } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import { IMessage, MessageTextProps } from 'react-native-gifted-chat';

import LinkViewer from './LinkViewer';
import { regexUrl } from '../../../api/utils/regex';
import { StyledText } from '../text';

const Container = styled.View(() => ({
  paddingVertical: 3,
  alignItems: 'flex-end',
}));

interface IBubbleItem {
  messageText: MessageTextProps<IMessage> & Readonly<{ children?: ReactNode }>;
}

const BubbleText: FC<IBubbleItem> = ({ messageText }) => {
  const theme = useTheme();

  const message = messageText.currentMessage!!.text;

  return (
    <Container>
      {regexUrl(message) ? (
        <LinkViewer link={message} />
      ) : (
        <StyledText color={theme.color.white} fontSize={14}>
          {message}
        </StyledText>
      )}
    </Container>
  );
};

export default memo(BubbleText);
