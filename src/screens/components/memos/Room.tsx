import { memo, ReactNode, useCallback, useEffect, useState } from 'react';
import {
  GiftedChat,
  IMessage,
  Bubble,
  BubbleProps,
} from 'react-native-gifted-chat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import styled from '@emotion/native';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';
import { RoomEntity } from '../../../entity';
import { IconHeader } from '../../../components/common';
import { SafeAreaContainer } from '../../../components/layout';

const Container = styled.View(() => ({
  flex: 1,
  backgroundColor: 'gray',
}));

const Room = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [entity, setEntity] = useState<RoomEntity>();
  const [uid, setUid] = useState('');

  const { params } = useRoute<MemoScreenRouteProp>();

  const navigation = useNavigation<MemoScreenNavigationProp>();

  useEffect(() => {
    if (params) {
      setEntity(params);
    }

    console.log(entity);
  }, [params, entity]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUid(user.uid);
    }
  }, [params]);

  useEffect(() => {
    // 들어올 데이터
    setMessages([
      {
        _id: 1, // 메세지 id
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: uid, // userId
        },
      },
    ]);
  }, [uid]);

  const onSend = useCallback((messages = []) => {
    // 쓸 데이터
    setMessages((prev) => GiftedChat.append(prev, messages));

    console.log(messages);
  }, []);

  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderBubble = useCallback(
    (
      props: Readonly<BubbleProps<IMessage>> &
        Readonly<{ children?: ReactNode }>
    ) => {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#6646ee',
            },
          }}
          textStyle={{
            right: {
              color: '#fff',
            },
          }}
        />
      );
    },
    []
  );

  return (
    <SafeAreaContainer>
      <Container>
        <IconHeader onBackPress={onBackPress} title="설정" backIcon />

        <GiftedChat
          alignTop
          messages={messages}
          renderBubble={renderBubble}
          keyboardShouldPersistTaps="handled"
          onSend={(messages) => onSend(messages)}
          user={{ _id: uid, name: 'user' }}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Room);
