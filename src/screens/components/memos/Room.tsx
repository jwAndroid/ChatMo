import {
  memo,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import {
  GiftedChat,
  IMessage,
  BubbleProps,
  DayProps,
} from 'react-native-gifted-chat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';

import { BubbleItem, DayHeader } from '../../../components/common/room';
import { IconHeader } from '../../../components/common/header';
import { ScreenContainer } from '../../../components/layout';
import { RoomEntity } from '../../../model';
import { messageData } from '../../../api/sample/sampleData';

const Container = styled.View({
  flex: 1,
});

const Room = () => {
  const theme = useTheme();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [entity, setEntity] = useState<RoomEntity>();

  const { params } = useRoute<MemoScreenRouteProp>();

  const navigation = useNavigation<MemoScreenNavigationProp>();

  const initialInsets = useMemo(() => -(getStatusBarHeight() * 2), []);

  useEffect(() => {
    if (params) {
      setEntity(params);
    }
  }, [params, entity]);

  useEffect(() => {
    setMessages(messageData);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((prev) => GiftedChat.append(prev, messages));
  }, []);

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressMore = useCallback(() => {
    console.log('more');
  }, []);

  const onPressBubble = useCallback((_, message) => {
    if (message) {
      console.log(message);
    }
  }, []);

  const onLongPressBubble = useCallback((_, message) => {
    if (message) {
      console.log(message);
    }
  }, []);

  const renderBubble = useCallback(
    (
      props: Readonly<BubbleProps<IMessage>> &
        Readonly<{ children?: ReactNode }>
    ) => {
      return (
        <BubbleItem
          props={props}
          onPressBubble={onPressBubble}
          onLongPressBubble={onLongPressBubble}
        />
      );
    },
    [onPressBubble, onLongPressBubble]
  );

  const renderDay = useCallback(
    (
      props: Readonly<DayProps<IMessage>> & Readonly<{ children?: ReactNode }>
    ) => {
      return <DayHeader props={props} />;
    },
    []
  );

  return (
    <Container>
      <IconHeader
        onBackPress={onBackPress}
        title={entity?.title}
        backIcon
        marginBottom={initialInsets}
        one={theme.icon.more}
        onOnePress={onPressMore}
      />

      <ScreenContainer>
        <GiftedChat
          alignTop
          scrollToBottom
          messages={messages}
          renderBubble={renderBubble}
          keyboardShouldPersistTaps="handled"
          renderDay={renderDay}
          onSend={(messages) => onSend(messages)}
          user={{ _id: 1 }}
        />
      </ScreenContainer>
    </Container>
  );
};

export default memo(Room);
