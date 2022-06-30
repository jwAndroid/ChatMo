import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  StyleProp,
  ViewStyle,
  ListRenderItem,
  Pressable,
  Text,
} from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { MemoScreenNavigationProp } from '../../stacks/MemoStack';
import { Card, MemoItem } from '../../../components/common/item';
import { MainHeader } from '../../../components/common/header';
import { FloatingButton } from '../../../components/common/button';
import { RoomEntity } from '../../../model';
import { list } from '../../../api/sample/sampleData';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.color.background,
}));

const RowBack = styled.View({
  flex: 1,
  flexDirection: 'row',
});

const ButtonIcon = styled.Image(({ theme }) => ({
  width: 17,
  height: 17,
  tintColor: theme.color.white,
}));

const Footer = styled.View({
  width: '100%',
  height: 5,
});

const Memo = () => {
  const theme = useTheme();

  const navigation = useNavigation<MemoScreenNavigationProp>();

  const [data, setData] = useState<RoomEntity[]>([]);

  useEffect(() => {
    setData(list);
  }, []);

  const Row = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 60,
      justifyContent: 'center',
      backgroundColor: theme.color.header.background,
    }),
    [theme]
  );

  const EditButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.sky_100,
    }),
    [theme]
  );

  const FavoritButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.sky_200,
    }),
    [theme]
  );

  const LockButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.sky_300,
    }),
    [theme]
  );

  const DeleteButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.red_error,
    }),
    [theme]
  );

  const keyExtractor = useCallback((item: RoomEntity) => `${item.roomId}`, []);

  const onEdit = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onFavorit = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onLock = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onDelete = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onPressItem = useCallback(
    (item: RoomEntity) => () => {
      navigation.navigate('Room', item);
    },
    [navigation]
  );

  const onCardPress = useCallback(
    (item) => () => {
      console.log(`onCardPress ${item.title}`);
    },
    []
  );

  const onStarPress = useCallback(
    (item) => () => {
      console.log(`onStarPress ${item.title}`);
    },
    []
  );

  const onPressFloatingButton = useCallback(() => {
    navigation.navigate('Room');
  }, [navigation]);

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          <Pressable style={EditButton} onPress={onEdit(rowMap, item)}>
            <ButtonIcon source={theme.icon.edit} />
          </Pressable>

          <Pressable style={FavoritButton} onPress={onFavorit(rowMap, item)}>
            <ButtonIcon source={theme.icon.favorites} />
          </Pressable>

          <Pressable style={LockButton} onPress={onLock(rowMap, item)}>
            <ButtonIcon source={theme.icon.lock} />
          </Pressable>

          <Pressable style={DeleteButton} onPress={onDelete(rowMap, item)}>
            <ButtonIcon source={theme.icon.delete} />
          </Pressable>
        </RowBack>
      );
    },
    [
      EditButton,
      FavoritButton,
      LockButton,
      DeleteButton,
      onEdit,
      onFavorit,
      onLock,
      onDelete,
      theme,
    ]
  );

  const renderItem = useCallback<ListRenderItem<RoomEntity>>(
    ({ item }) => {
      return (
        <Pressable onPress={onPressItem(item)} style={Row}>
          <MemoItem
            title={item.title}
            lastMemo={item.lastMemo}
            date={item.createdAt}
            count={item.memoCount}
            isLock
          />
        </Pressable>
      );
    },
    [Row, onPressItem]
  );

  const listHeaderComponent = useCallback(() => {
    return <Card onPress={onCardPress} onStarPress={onStarPress} />;
  }, [onCardPress, onStarPress]);

  const listFooterComponent = useCallback(() => {
    return <Footer />;
  }, []);

  const ListEmptyComponent = useCallback(() => {
    return data.length === 0 ? <Text>결과가 존재하지 않습니다.</Text> : null;
  }, [data]);

  return (
    <Container>
      <MainHeader title="List" />

      <SwipeListView
        data={data}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        renderHiddenItem={renderHiddenItem}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        leftOpenValue={225}
        stopLeftSwipe={225}
        stopRightSwipe={-75}
        rightOpenValue={-75}
      />

      <FloatingButton
        source={theme.icon.edit}
        onPress={onPressFloatingButton}
      />
    </Container>
  );
};

export default memo(Memo);
