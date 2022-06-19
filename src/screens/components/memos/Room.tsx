import { memo, useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';
import { RoomEntity } from '../../../entity';
import { IconHeader } from '../../../components/common';
import { SafeAreaContainer } from '../../../components/layout';

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

  return (
    <SafeAreaContainer>
      <IconHeader onBackPress={onBackPress} title="설정" backIcon />

      <GiftedChat
        alignTop
        messages={messages}
        alwaysShowSend
        keyboardShouldPersistTaps="handled"
        onSend={(messages) => onSend(messages)}
        user={{ _id: uid }}
      />
    </SafeAreaContainer>
  );
};

export default memo(Room);
