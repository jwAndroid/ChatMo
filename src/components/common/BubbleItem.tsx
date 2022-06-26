import { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import {
  Bubble,
  BubbleProps,
  IMessage,
  LeftRightStyle,
  MessageTextProps,
  Time,
  TimeProps,
} from 'react-native-gifted-chat';
import { LinkPreview } from '@flyerhq/react-native-link-preview';

interface IBubbleItem {
  props: Readonly<BubbleProps<IMessage>> & Readonly<{ children?: ReactNode }>;
  onPressBubble: (context?: any, message?: any) => void;
}

const BubbleItem: FC<IBubbleItem> = ({ props, onPressBubble }) => {
  const theme = useTheme();

  const containerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        flex: 1,
        marginTop: 5,
      },
    };
  }, []);

  const wrapperStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        paddingLeft: 22,
        paddingRight: 12,
        paddingVertical: 3,
        backgroundColor: theme.color.white_blue,
      },
    };
  }, [theme.color.white_blue]);

  const bottomContainerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        marginRight: -5,
        alignItems: 'center',
        backgroundColor: 'gray',
      },
    };
  }, []);

  const timeTextStyle = useMemo<LeftRightStyle<TextStyle>>(() => {
    return {
      right: {
        fontSize: 10,
        color: '#000',
        includeFontPadding: false,
        fontFamily: theme.font.YoonGothicRegular,
      },
    };
  }, [theme]);

  const timeContainerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        flex: 1,
        marginBottom: 1,
        marginRight: 1,
        backgroundColor: 'yellow',
      },
    };
  }, []);

  const renderTime = useCallback(
    (
      timeProps: Readonly<TimeProps<IMessage>> &
        Readonly<{ children?: ReactNode }>
    ) => {
      return (
        <Time
          {...timeProps}
          containerStyle={timeContainerStyle}
          timeTextStyle={timeTextStyle}
        />
      );
    },
    [timeTextStyle, timeContainerStyle]
  );

  const renderTicks = useCallback(
    (currentMessage: IMessage & Readonly<{ children?: ReactNode }>) => {
      return (
        currentMessage.received && (
          <View style={{ backgroundColor: 'blue' }}>
            <Text style={{ color: 'red', marginBottom: 2 }}>c</Text>
          </View>
        )
      );
    },
    []
  );

  const renderLinkText = useCallback((text: string) => {
    return <Text>{text}</Text>;
  }, []);

  const renderLinkTitle = useCallback((title: string) => {
    return <Text>{title}</Text>;
  }, []);

  const renderMessageText = useCallback(
    (
      messageText: MessageTextProps<IMessage> &
        Readonly<{ children?: ReactNode }>
    ) => {
      const message = messageText.currentMessage!!.text;

      return (
        <View>
          {String(message).includes('https') ? (
            <LinkPreview
              text={message}
              renderText={renderLinkText}
              enableAnimation
              renderTitle={renderLinkTitle}
            />
          ) : (
            <Text
              style={{
                color: '#000',
                fontSize: 16,
              }}
            >
              {message}
            </Text>
          )}
        </View>
      );
    },
    [renderLinkText, renderLinkTitle]
  );

  const containerToPreviousStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: { borderTopRightRadius: 2, marginTop: -2 },
    };
  }, []);

  const containerToNextStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: { borderBottomRightRadius: 2 },
    };
  }, []);

  return (
    <Bubble
      {...props}
      containerStyle={containerStyle}
      wrapperStyle={wrapperStyle}
      bottomContainerStyle={bottomContainerStyle}
      renderTicks={renderTicks}
      renderTime={renderTime}
      renderMessageText={renderMessageText}
      containerToPreviousStyle={containerToPreviousStyle}
      containerToNextStyle={containerToNextStyle}
      onPress={onPressBubble}
    />
  );
};

export default memo(BubbleItem);
