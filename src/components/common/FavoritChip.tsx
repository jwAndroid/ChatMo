import { FC, memo, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { chipData } from '../../api/sampleData';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  flexDirection: 'row',
  paddingHorizontal: 8,
  backgroundColor: theme.color.background,
}));

const ContentsContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'gray',
}));

const DeleteContainer = styled.Pressable(() => ({
  width: 30,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
}));

const DeleteIcon = styled.Image(() => ({
  width: 15,
  height: 15,
  tintColor: 'white',
}));

interface IFavoritChip {
  // items: RoomEntity[];
}

const FavoritChip: FC<IFavoritChip> = () => {
  const theme = useTheme();

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <Container>
          <ContentsContainer>
            <Text>
              {String(item.title).length < 15
                ? String(item.title)
                : `${String(item.title).substring(0, 15)}...`}
            </Text>
          </ContentsContainer>

          <DeleteContainer>
            <DeleteIcon source={theme.icon.delete} />
          </DeleteContainer>
        </Container>
      );
    },
    [theme]
  );

  return (
    <FlatList
      data={chipData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default memo(FavoritChip);
