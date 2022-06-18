import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

import StyledText from './StyledText';

const HeaderContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  height: 50,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  backgroundColor: theme.color.header.background,
}));

interface IHeader {
  title: ReactNode;
}

const StackHeader: FC<IHeader> = ({ title }) => {
  return (
    <HeaderContainer>
      <StyledText isBlod>{title}</StyledText>
    </HeaderContainer>
  );
};

export default memo(StackHeader);
