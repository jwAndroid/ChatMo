import { memo, ReactNode, useCallback, useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import {
  GiftedChat,
  IMessage,
  Bubble,
  BubbleProps,
  DayProps,
  MessageTextProps,
} from 'react-native-gifted-chat';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { LinkPreview } from '@flyerhq/react-native-link-preview';
import { Text, View } from 'react-native';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';
import { RoomEntity } from '../../../entity';
import { DayHeader, IconHeader } from '../../../components/common';
import { SafeAreaContainer } from '../../../components/layout';

const Container = styled.View(() => ({
  flex: 1,
  backgroundColor: 'gray',
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
          containerStyle={{
            right: {
              marginTop: 5,
            },
          }}
          wrapperStyle={{
            right: {
              paddingHorizontal: 10,
              borderTopRightRadius: 3,
              backgroundColor: '#6646ee',
            },
          }}
          textStyle={{
            right: {
              color: '#fff',
              fontSize: 13,
              fontFamily: theme.font.YoonGothicRegular,
            },
          }}
        />
      );
    },
    [theme]
  );

  const renderDay = useCallback(
    (
      props: Readonly<DayProps<IMessage>> & Readonly<{ children?: ReactNode }>
    ) => {
      return <DayHeader props={props} />;
    },
    []
  );

  const renderText = useCallback((text: string) => {
    console.log(`renderText ${text}`);

    return <Text>{text}</Text>;
  }, []);

  const renderTitle = useCallback((title: string) => {
    console.log(`renderTitle ${title}`);

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
              renderText={renderText}
              enableAnimation
              renderTitle={renderTitle}
            />
          ) : (
            <Text>{message}</Text>
          )}
        </View>
      );
    },
    [renderText, renderTitle]
  );

  return (
    <SafeAreaContainer>
      <Container>
        <IconHeader onBackPress={onBackPress} title="설정" backIcon />

        <GiftedChat
          alignTop
          messages={messages}
          renderBubble={renderBubble}
          renderMessageText={renderMessageText}
          keyboardShouldPersistTaps="handled"
          renderDay={renderDay}
          onSend={(messages) => onSend(messages)}
          user={{ _id: uid }}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Room);
