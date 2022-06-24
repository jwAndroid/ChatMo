import { memo, useCallback, useEffect, useMemo } from 'react';
import { StyleProp, ViewStyle, ListRenderItem, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import {
  Card,
  FloatingButton,
  MainHeader,
  MemoItem,
} from '../../../components/common';
import { sample } from '../../../api/sampleData';
import { RoomEntity } from '../../../entity';
import { MemoScreenNavigationProp } from '../../stacks/MemoStack';

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

  // const [listData, setListData] = useState(sample);

  useEffect(() => {}, []);

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

  return (
    <Container>
      <MainHeader title="List" />

      <SwipeListView
        data={sample}
        keyExtractor={keyExtractor}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        ListHeaderComponent={listHeaderComponent}
        ListFooterComponent={listFooterComponent}
        leftOpenValue={225}
        stopLeftSwipe={150}
        stopRightSwipe={-75}
        rightOpenValue={-75}
        previewOpenDelay={3000}
      />

      <FloatingButton
        source={theme.icon.edit}
        onPress={onPressFloatingButton}
      />
    </Container>
  );
};

export default memo(Memo);
