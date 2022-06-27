import { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from '@emotion/react';
import { IMessage, MessageTextProps } from 'react-native-gifted-chat';
import {
  LinkPreview,
  PreviewDataImage,
} from '@flyerhq/react-native-link-preview';
import styled from '@emotion/native';
import StyledText from './StyledText';
import { regexUrl } from '../../api/regex';

const Container = styled.View(() => ({
  paddingVertical: 3,
}));

interface IBubbleItem {
  messageText: MessageTextProps<IMessage> & Readonly<{ children?: ReactNode }>;
}

const BubbleText: FC<IBubbleItem> = ({ messageText }) => {
  const theme = useTheme();

  const message = messageText.currentMessage!!.text;

  const linkContainerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      paddingVertical: 5,
    };
  }, []);

  const textContainerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      marginHorizontal: 0,
      marginVertical: 0,
    };
  }, []);

  const renderLinkText = useCallback(
    (text: string) => {
      return (
        <StyledText color={theme.color.white} fontSize={13}>
          {text.length < 30 ? text : `${text.substring(0, 30)}...`}
        </StyledText>
      );
    },
    [theme.color.white]
  );

  const renderLinkTitle = useCallback(
    (title: string) => {
      return (
        <StyledText color={theme.color.white} fontSize={12}>
          {title.length < 5 ? title : `${title.substring(0, 5)}...`}
        </StyledText>
      );
    },
    [theme.color.white]
  );

  const renderLinkImage = useCallback((image: PreviewDataImage) => {
    return (
      image.url && (
        <Image
          style={{
            width: '100%',
            height: 100,
            backgroundColor: 'orange',
            resizeMode: 'center',
          }}
          source={{ uri: image.url }}
        />
      )
    );
  }, []);

  const renderLinkDescription = useCallback(
    (description: string) => {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center',
          }}
        >
          <StyledText color={theme.color.white} fontSize={10}>
            {description.length < 8
              ? description
              : `${description.substring(0, 8)}...`}
          </StyledText>
        </View>
      );
    },
    [theme.color.white]
  );

  return (
    <Container>
      {regexUrl(message) ? (
        <LinkPreview
          text={message}
          renderText={renderLinkText}
          renderTitle={renderLinkTitle}
          renderDescription={renderLinkDescription}
          containerStyle={linkContainerStyle}
          renderImage={renderLinkImage}
          textContainerStyle={textContainerStyle}
        />
      ) : (
        <StyledText color={theme.color.white} fontSize={15}>
          {message}
        </StyledText>
      )}
    </Container>
  );
};

export default memo(BubbleText);
