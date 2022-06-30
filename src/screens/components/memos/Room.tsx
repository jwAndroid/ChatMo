import { memo, useCallback, useEffect, useState } from 'react';
import {
  ListRenderItem,
  SectionList,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  MemoScreenNavigationProp,
  MemoScreenRouteProp,
} from '../../stacks/MemoStack';

import { IconHeader } from '../../../components/common/header';
import { IMessageEntity, MessageEntity, RoomEntity } from '../../../model';
import { messages } from '../../../api/sample/sampleData';
import { groupBy } from '../../../api/utils/groupBy';
import { ScreenContainer } from '../../../components/layout';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const Room = () => {
  const theme = useTheme();

  const { params } = useRoute<MemoScreenRouteProp>();
  const navigation = useNavigation<MemoScreenNavigationProp>();

  const [post, setPost] = useState<RoomEntity>();
  const [message, setMessage] = useState<IMessageEntity[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setPost(params);
  }, [params, post]);

  useEffect(() => {}, []);

  useEffect(() => {
    const groupDay = groupBy(messages, (item) => item.day);

    const values = Object.values(groupDay).map((values) => {
      return { data: values };
    });

    const assign = Object.keys(groupDay).map((key, index) => {
      return Object.assign(values[index], { title: key });
    });

    setMessage(assign);
  }, []);

  const keyExtractor = useCallback((item: MessageEntity) => `${item.id}`, []);

  const renderItem = useCallback<ListRenderItem<MessageEntity>>(({ item }) => {
    return (
      <View
        style={{ flex: 1, alignItems: 'flex-end', backgroundColor: 'gray' }}
      >
        <Text style={{ color: 'white' }}>{item.message}</Text>
      </View>
    );
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <Text style={{ color: 'orange' }}>{section.title}</Text>
      </View>
    );
  }, []);

  const onChangeText = useCallback((text: string) => {
    setValue(text);
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log(value);
  }, [value]);

  return (
    <Container>
      <IconHeader
        onBackPress={() => navigation.goBack()}
        title={post?.title}
        backIcon
        one={theme.icon.more}
        onOnePress={() => console.log('more')}
      />

      <ScreenContainer>
        <SectionList
          sections={message}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </ScreenContainer>

      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          backgroundColor: 'orange',
        }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          style={{ width: '100%', backgroundColor: 'red' }}
        />
      </View>
    </Container>
  );
};

export default memo(Room);
