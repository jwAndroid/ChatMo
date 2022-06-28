import { memo, ReactNode, useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import {
  GiftedChat,
  IMessage,
  BubbleProps,
  DayProps,
} from 'react-native-gifted-chat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';
import { RoomEntity } from '../../../entity';
import { BubbleItem, DayHeader, IconHeader } from '../../../components/common';

const Container = styled.Pressable(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Room = () => {
  const theme = useTheme();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [entity, setEntity] = useState<RoomEntity>();
  const [uid, setUid] = useState('');

  const { params } = useRoute<MemoScreenRouteProp>();

  const navigation = useNavigation<MemoScreenNavigationProp>();

  useEffect(() => {
    if (params) {
      setEntity(params);
    }
  }, [params, entity]);

  useEffect(() => {
    const user = getAuth().currentUser;

    if (user) {
      setUid(user.uid);
    }
  }, [params]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: uid,
        },
        received: true,
      },
    ]);
  }, [uid]);

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

  const renderBubble = useCallback(
    (
      props: Readonly<BubbleProps<IMessage>> &
        Readonly<{ children?: ReactNode }>
    ) => {
      return <BubbleItem props={props} onPressBubble={onPressBubble} />;
    },
    [onPressBubble]
  );

  const renderDay = useCallback(
    (
      props: Readonly<DayProps<IMessage>> & Readonly<{ children?: ReactNode }>
    ) => {
      return <DayHeader props={props} />;
    },
    []
  );

  const onPressContainer = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Container onPress={onPressContainer}>
      <IconHeader
        onBackPress={onBackPress}
        title={
          entity?.title!! && entity.title.length < 15
            ? entity?.title
            : `${entity?.title.substring(0, 15)}...`
        }
        backIcon
        marginBottom={-30}
        one={theme.icon.more}
        onOnePress={onPressMore}
      />

      <GiftedChat
        alignTop
        scrollToBottom
        messages={messages}
        renderBubble={renderBubble}
        keyboardShouldPersistTaps="handled"
        renderDay={renderDay}
        onSend={(messages) => onSend(messages)}
        user={{ _id: uid }}
      />
    </Container>
  );
};

export default memo(Room);
