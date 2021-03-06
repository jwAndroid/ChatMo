import { FC, memo, useCallback } from 'react';
import { FlatList, Dimensions, GestureResponderEvent } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import StyledText from '../text/StyledText';
import { CARD_DATA } from '../../../api/sample/sampleData';
import { ellipsize } from '../../../api/utils/ellipsize';

const { width } = Dimensions.get('screen');

const Container = styled.Pressable(({ theme }) => ({
  flex: 1,
  height: 80,
  marginTop: 10,
  justifyContent: 'center',
  backgroundColor: theme.color.background,
}));

const CardConatiner = styled.Pressable(({ theme }) => ({
  width: width / 2.5,
  height: 66,
  marginHorizontal: 10,
  borderRadius: 8,
  backgroundColor: theme.color.item.card_background,
}));

interface ITitleContainer {
  backgroundColor: string;
}

const TitleContainer = styled.View<ITitleContainer>(({ backgroundColor }) => ({
  width: '100%',
  height: 66 / 2.5,
  justifyContent: 'center',
  borderTopEndRadius: 8,
  borderTopLeftRadius: 8,
  backgroundColor,
}));

const ContentsContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'row',
}));

const TextContainer = styled.View({
  flex: 1,
  justifyContent: 'center',
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
});

const IconContainer = styled.Pressable(() => ({
  width: 30,
  justifyContent: 'center',
  alignItems: 'center',
}));

const Icon = styled.Image(() => ({
  width: 17,
  height: 17,
  tintColor: '#FECE00',
  marginRight: 3,
}));

interface ICard {
  onPress: (event: GestureResponderEvent) => () => void;
  onStarPress: (event: GestureResponderEvent) => () => void;
}

const Card: FC<ICard> = ({ onPress, onStarPress }) => {
  const theme = useTheme();

  const keyExtractor = useCallback((item) => `${item.id}`, []);

  const renderItem = useCallback(
    ({ item }) => {
      const title = String(item.title);
      const lastMemo = String(item.lastMemo);
      const date = String(item.date);

      return (
        <Container>
          <CardConatiner onPress={onPress(item)}>
            <TitleContainer backgroundColor={theme.color.sky_400}>
              <StyledText
                fontSize={12}
                color={theme.color.gray_830}
                marginLeft={8}
                isBlod
              >
                {ellipsize(title, 10)}
              </StyledText>
            </TitleContainer>
            <ContentsContainer>
              <TextContainer>
                <StyledText
                  fontSize={11}
                  color={theme.color.gray_830}
                  marginLeft={8}
                >
                  {ellipsize(lastMemo, 20)}
                </StyledText>

                <StyledText
                  fontSize={10}
                  marginTop={3}
                  color={theme.color.gray_830}
                  marginLeft={8}
                >
                  {date}
                </StyledText>
              </TextContainer>

              <IconContainer onPress={onStarPress(item)}>
                <Icon source={theme.icon.favoritesfill} />
              </IconContainer>
            </ContentsContainer>
          </CardConatiner>
        </Container>
      );
    },
    [onPress, onStarPress, theme]
  );

  return (
    <FlatList
      data={CARD_DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default memo(Card);
