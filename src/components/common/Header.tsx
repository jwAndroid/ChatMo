import { FC, memo, ReactNode } from 'react';
import { GestureResponderEvent, ImageSourcePropType } from 'react-native';
import styled from '@emotion/native';

import StyledText from './StyledText';

const HeaderContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  height: 60,
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'gray',
}));

const Icon = styled.Image(() => ({
  width: 28,
  height: 28,
  marginLeft: 7,
}));

interface IHeader {
  title?: ReactNode;
  backIcon?: ImageSourcePropType;
  backOnPress?: (event: GestureResponderEvent) => void;
  one?: ImageSourcePropType;
  oneOnPress?: (event: GestureResponderEvent) => void;
  two?: ImageSourcePropType;
  twoOnPress?: (event: GestureResponderEvent) => void;
  three?: ImageSourcePropType;
  threeOnPress?: (event: GestureResponderEvent) => void;
}

const Header: FC<IHeader> = ({
  title = '',
  backIcon,
  backOnPress,
  one,
  oneOnPress,
  two,
  twoOnPress,
  three,
  threeOnPress,
}) => {
  return (
    <HeaderContainer>
      <StyledText>뒤로가기</StyledText>

      <StyledText>제목</StyledText>

      <StyledText>아이콘 div</StyledText>
    </HeaderContainer>
  );
};

export default memo(Header);
