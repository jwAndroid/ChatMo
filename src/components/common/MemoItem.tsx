import { FC, memo, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import StyledText from './StyledText';

const Container = styled.View(() => ({
  flex: 1,
  marginHorizontal: 10,
  flexDirection: 'row',
}));

const ImageContainer = styled.View(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

const TitleContainer = styled.View(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}));

const ContentsContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 5,
}));

const CountContainer = styled.View(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledImage = styled.Image(() => ({
  width: 40,
  height: 40,
  borderRadius: 6,
  backgroundColor: 'gray',
}));

const CircleContainer = styled.View(({ theme }) => ({
  width: 16,
  height: 16,
  borderRadius: 5,
  marginTop: 4,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.color.sky_400,
}));

const Icon = styled.Image(({ theme }) => ({
  width: 10,
  height: 10,
  marginLeft: 3,
  tintColor: theme.color.red_error,
}));

interface IMemoItem {
  title: ReactNode;
  lastMemo: ReactNode;
  date: number;
  count: number;
  isLock: boolean;
  image: ImageSourcePropType;
}

const MemoItem: FC<IMemoItem> = ({
  title,
  lastMemo,
  date,
  count,
  isLock,
  image,
}) => {
  const theme = useTheme();

  return (
    <Container>
      {image && (
        <ImageContainer>
          <StyledImage source={image} />
        </ImageContainer>
      )}

      <ContentsContainer>
        <TitleContainer>
          <StyledText color={theme.color.text} fontSize={16} isBlod>
            {title}
          </StyledText>

          {isLock && <Icon source={theme.icon.lock} />}
        </TitleContainer>

        <StyledText fontSize={12} marginTop={3} color={theme.color.item.text}>
          {lastMemo}
        </StyledText>
      </ContentsContainer>

      <CountContainer>
        <StyledText fontSize={10} color={theme.color.item.text}>
          {date}
        </StyledText>

        {count && (
          <CircleContainer>
            <StyledText fontSize={12} color={theme.color.white}>
              {count}
            </StyledText>
          </CircleContainer>
        )}
      </CountContainer>
    </Container>
  );
};

export default memo(MemoItem);
