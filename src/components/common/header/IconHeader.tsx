import { FC, memo, useMemo } from 'react';
import { ImageSourcePropType, Platform, StatusBar } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import StyledText from '../text/StyledText';
import { ellipsize } from '../../../api/utils/ellipsize';

interface IHeaderContainer {
  insets: number | undefined;
  marginBottom?: number;
}

const HeaderContainer = styled.View<IHeaderContainer>(
  ({ theme, insets, marginBottom }) => ({
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: insets,
    marginBottom,
    zIndex: 1,
    backgroundColor: theme.color.header.background,
  })
);

const LeftContainer = styled.Pressable(() => ({
  justifyContent: 'center',
  paddingHorizontal: 10,
  marginLeft: 5,
}));

const CenterContainer = styled.View(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

const RightContainer = styled.Pressable(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingHorizontal: 10,
  marginRight: 5,
}));

const Icon = styled.Image(({ theme }) => ({
  width: 16,
  height: 16,
  tintColor: theme.color.item.arrow,
}));

interface IIconHeader {
  title?: string;
  backIcon?: boolean;
  marginBottom?: number;
  onBackPress?: () => void;
  one?: ImageSourcePropType;
  onOnePress?: () => void;
}

const IconHeader: FC<IIconHeader> = ({
  title,
  backIcon,
  marginBottom,
  onBackPress,
  one,
  onOnePress,
}) => {
  const theme = useTheme();

  const insets = useMemo(() => {
    return Platform.OS === 'ios'
      ? getStatusBarHeight(true)
      : StatusBar.currentHeight;
  }, []);

  return (
    <HeaderContainer insets={insets} marginBottom={marginBottom}>
      <LeftContainer onPress={onBackPress}>
        {backIcon && <Icon source={theme.icon.back_arrow_black} />}
      </LeftContainer>

      <CenterContainer>
        {title && (
          <StyledText isBlod fontSize={15} color={theme.color.text}>
            {ellipsize(title, 15)}
          </StyledText>
        )}
      </CenterContainer>

      <RightContainer onPress={onOnePress}>
        {one && <Icon source={theme.icon.more} />}
      </RightContainer>
    </HeaderContainer>
  );
};

export default memo(IconHeader);
