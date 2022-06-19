import { memo, useCallback, useMemo } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleProp,
  ViewStyle,
  ListRenderItem,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { SafeAreaContainer } from '../../../components/layout';
import { MainHeader, StyledText } from '../../../components/common';
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

const ButtonIcon = styled.Image(() => ({
  width: 17,
  height: 17,
  // tintColor: theme.color.white,
}));

const Memo = () => {
  const theme = useTheme();

  const navigation = useNavigation<MemoScreenNavigationProp>();

  // const [listData, setListData] = useState(sample);

  const Row = useMemo<StyleProp<ViewStyle>>(
    () => ({
      height: 60,
      justifyContent: 'center',
      paddingVertical: 8,
      backgroundColor: theme.color.gray_300,
    }),
    [theme]
  );

  const FavoritesButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.gray_20,
    }),
    [theme]
  );

  const AlramButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.gray_20,
    }),
    [theme]
  );

  const PinButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      left: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.gray_20,
    }),
    [theme]
  );

  const ReadButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 75,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.gray_20,
    }),
    [theme]
  );

  const LeaveButton = useMemo<StyleProp<ViewStyle>>(
    () => ({
      position: 'absolute',
      bottom: 0,
      top: 0,
      width: 75,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.color.gray_20,
    }),
    [theme]
  );

  const keyExtractor = useCallback((item: RoomEntity) => `${item.roomId}`, []);

  const onFavorits = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onAlram = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onPin = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onReadMessage = useCallback(
    (rowMap, item) => () => {
      console.log(rowMap);
      console.log(item);
    },
    []
  );

  const onLeave = useCallback(
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

  const renderHiddenItem = useCallback(
    ({ item }, rowMap) => {
      return (
        <RowBack>
          <TouchableOpacity
            style={FavoritesButton}
            onPress={onFavorits(rowMap, item)}
          >
            <ButtonIcon
              source={
                item.isFavorites ? theme.icon.list_black : theme.icon.list_black
              }
            />
          </TouchableOpacity>

          <TouchableOpacity style={AlramButton} onPress={onAlram(rowMap, item)}>
            <ButtonIcon
              source={
                item.isAlram ? theme.icon.list_black : theme.icon.list_black
              }
            />
          </TouchableOpacity>

          <TouchableOpacity style={PinButton} onPress={onPin(rowMap, item)}>
            <ButtonIcon
              source={
                item.isPin ? theme.icon.list_black : theme.icon.list_black
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={ReadButton}
            onPress={onReadMessage(rowMap, item)}
          >
            <StyledText fontSize={13} color={theme.color.black} isBlod>
              읽음
            </StyledText>
          </TouchableOpacity>

          <TouchableOpacity style={LeaveButton} onPress={onLeave(rowMap, item)}>
            <StyledText fontSize={13} color={theme.color.black} isBlod>
              나가기
            </StyledText>
          </TouchableOpacity>
        </RowBack>
      );
    },
    [
      FavoritesButton,
      AlramButton,
      PinButton,
      LeaveButton,
      ReadButton,
      onFavorits,
      onAlram,
      onPin,
      onLeave,
      onReadMessage,
      theme,
    ]
  );

  const renderItem = useCallback<ListRenderItem<RoomEntity>>(
    ({ item }) => {
      return (
        <Pressable onPress={onPressItem(item)} style={Row}>
          <View>
            <Text>{item.title}</Text>
          </View>
        </Pressable>
      );
    },
    [Row, onPressItem]
  );

  const listHeaderComponent = useCallback(() => {
    return (
      <View style={{ width: '100%', height: 50, backgroundColor: 'red' }}>
        <Text>헤더</Text>
      </View>
    );
  }, []);

  const listFooterComponent = useCallback(() => {
    return (
      <View style={{ width: '100%', height: 20, backgroundColor: 'blue' }}>
        <Text>푸터</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaContainer>
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
          stopLeftSwipe={225}
          stopRightSwipe={-150}
          rightOpenValue={-150}
          previewOpenDelay={3000}
        />
      </Container>
    </SafeAreaContainer>
  );
};

export default memo(Memo);
