import { FC, memo } from 'react';
import { ScrollView } from 'react-native';
import styled from '@emotion/native';
import { RoomEntity } from '../../entity';

const Container = styled.View(({ theme }) => ({
  felx: 1,
  flexDirection: 'row',
  backgroundColor: theme.color.sky_400,
  //   backgroundColor: theme.color.background,
}));

const ChipContainer = styled.View(() => ({
  width: 150,
  height: 50,
  marginLeft: 10,
  backgroundColor: 'red',
}));

interface IFavoritChip {
  items: [];
  // items: RoomEntity[];
}

const FavoritChip: FC<IFavoritChip> = ({ items }) => {
  return (
    <ScrollView horizontal>
      <Container>
        <ChipContainer />
        <ChipContainer />
        <ChipContainer />
        <ChipContainer />
      </Container>
    </ScrollView>
  );
};

export default memo(FavoritChip);
