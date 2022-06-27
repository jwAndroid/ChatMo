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
import BubbleText from './BubbleText';

interface IBubbleItem {
  props: Readonly<BubbleProps<IMessage>> & Readonly<{ children?: ReactNode }>;
  onPressBubble: (context?: any, message?: any) => void;
}

const BubbleItem: FC<IBubbleItem> = ({ props, onPressBubble }) => {
  const theme = useTheme();

  const containerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        marginVertical: 5,
      },
    };
  }, []);

  const wrapperStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingVertical: 3,
        backgroundColor: theme.color.item.bubble,
      },
    };
  }, [theme.color.item.bubble]);

  const bottomContainerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        alignItems: 'center',
        backgroundColor: 'gray',
        marginBottom: 3,
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

  const renderMessageText = useCallback(
    (
      messageText: MessageTextProps<IMessage> &
        Readonly<{ children?: ReactNode }>
    ) => {
      return <BubbleText messageText={messageText} />;
    },
    []
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
