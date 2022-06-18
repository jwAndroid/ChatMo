import { FC, memo, ReactNode } from 'react';
import { Platform } from 'react-native';
import styled from '@emotion/native';

import StyledText from './StyledText';

const HeaderContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  height: 50,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  marginTop: Platform.OS === 'android' ? -2.5 : 0,
  backgroundColor: theme.color.header.background,
}));

const ShadowContainer = styled.View(({ theme }) => {
  const shadow = Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
    android: {
      elevation: 3,
    },
  });

  return {
    ...shadow,
    zIndex: 1,
    width: '100%',
    backgroundColor: theme.color.background,
  };
});

interface IHeader {
  title: ReactNode;
}

const StackHeader: FC<IHeader> = ({ title }) => {
  return (
    <ShadowContainer>
      <HeaderContainer>
        <StyledText isBlod>{title}</StyledText>
      </HeaderContainer>
    </ShadowContainer>
  );
};

export default memo(StackHeader);
