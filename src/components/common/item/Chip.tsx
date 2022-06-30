import { FC, memo, useCallback } from 'react';
import { FlatList, GestureResponderEvent, Pressable, View } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { StyledText } from '../text';
import { chipData } from '../../../api/sample/sampleData';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: 5,
  marginHorizontal: 5,
  marginVertical: 5,
  backgroundColor: theme.color.background,
}));

const ContentsContainer = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  paddingVertical: 5,
  paddingHorizontal: 15,
  alignItems: 'center',
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
  borderWidth: 1,
  borderColor: theme.color.item.border,
}));

const DeleteContainer = styled.Pressable(({ theme }) => ({
  width: 26,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: -1,
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
  backgroundColor: theme.color.sky_400,
}));

const DeleteIcon = styled.Image(() => ({
  width: 15,
  height: 15,
  tintColor: 'white',
}));

interface IFavoritChip {
  onPressChipContents: (event: GestureResponderEvent) => () => void;
  onPressChipDelete: (event: GestureResponderEvent) => () => void;
  // items: RoomEntity[];
}

const Chip: FC<IFavoritChip> = ({ onPressChipContents, onPressChipDelete }) => {
  const theme = useTheme();

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <Container>
          <ContentsContainer>
            <StyledText
              color={theme.color.text}
              fontSize={15}
              isBlod
              onPress={onPressChipContents(item)}
            >
              {String(item.title).length < 15
                ? `${String(item.title)}`
                : `${String(item.title).substring(0, 15)}...`}
            </StyledText>
          </ContentsContainer>

          <DeleteContainer>
            <Pressable onPress={onPressChipDelete(item)}>
              <DeleteIcon source={theme.icon.circle_x} />
            </Pressable>
          </DeleteContainer>
        </Container>
      );
    },
    [theme, onPressChipContents, onPressChipDelete]
  );

  return (
    <View>
      <StyledText
        color={theme.color.text}
        fontSize={15}
        marginTop={20}
        marginLeft={10}
        marginBottom={10}
      >
        즐겨찾기
      </StyledText>

      <FlatList
        data={chipData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(Chip);
