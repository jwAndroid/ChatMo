import { FC, memo, ReactNode, useMemo } from 'react';
import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import StyledText from './StyledText';

interface IShadowContainer {
  inset: number | undefined;
}

const ShadowContainer = styled.View<IShadowContainer>(({ theme, inset }) => {
  const shadow = Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1,
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
    zIndex: 2,
    width: '100%',
    marginTop: inset,
    backgroundColor: theme.color.background,
  };
});

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

interface IHeader {
  title: ReactNode;
}

const StackHeader: FC<IHeader> = ({ title }) => {
  const theme = useTheme();

  const insets = useMemo(() => {
    return Platform.OS === 'ios'
      ? getStatusBarHeight(true)
      : StatusBar.currentHeight;
  }, []);

  return (
    <ShadowContainer inset={insets}>
      <HeaderContainer>
        <StyledText fontSize={20} color={theme.color.text} isBlod>
          {title}
        </StyledText>
      </HeaderContainer>
    </ShadowContainer>
  );
};

export default memo(StackHeader);
