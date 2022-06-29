import { FC, memo, ReactNode, useCallback, useMemo, useState } from 'react';
import { useTheme } from '@emotion/react';
import { TextStyle, View, ViewStyle } from 'react-native';
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
import BubbleTicks from './BubbleTicks';
import BottomModal from './BottomModal';

interface IBubbleItem {
  props: Readonly<BubbleProps<IMessage>> & Readonly<{ children?: ReactNode }>;
}

const BubbleItem: FC<IBubbleItem> = ({ props }) => {
  const theme = useTheme();

  const [isModal, setIsModal] = useState(false);

  const containerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        flex: 1,
        marginVertical: 5,
      },
    };
  }, []);

  const wrapperStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical: 3,
        backgroundColor: theme.color.item.bubble,
      },
    };
  }, [theme.color.item.bubble]);

  const bottomContainerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        alignItems: 'center',
        marginBottom: 3,
      },
    };
  }, []);

  const timeTextStyle = useMemo<LeftRightStyle<TextStyle>>(() => {
    return {
      right: {
        fontSize: 9,
        color: theme.color.white,
        includeFontPadding: false,
      },
    };
  }, [theme]);

  const timeContainerStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: {
        marginBottom: 1,
        marginRight: 1,
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
      return currentMessage.received && <BubbleTicks />;
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
      right: {
        borderTopRightRadius: 2,
        marginTop: -5,
      },
    };
  }, []);

  const containerToNextStyle = useMemo<LeftRightStyle<ViewStyle>>(() => {
    return {
      right: { borderBottomRightRadius: 2 },
    };
  }, []);

  const onPressBubble = useCallback((_, message) => {
    if (message) {
      console.log(message);
    }
  }, []);

  const onLongPressBubble = useCallback((_, message) => {
    if (message) {
      setIsModal(true);

      console.log(message);
    }
  }, []);

  const onPressContainer = useCallback(() => {
    setIsModal(false);
  }, []);

  return (
    <View>
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
        onLongPress={onLongPressBubble}
        onPress={onPressBubble}
      />

      <BottomModal
        isOpen={isModal}
        onPress={onPressContainer}
        message={props.currentMessage}
      />
    </View>
  );
};

export default memo(BubbleItem);
