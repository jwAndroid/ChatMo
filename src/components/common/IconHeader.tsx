import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { FC, memo, ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import StyledText from './StyledText';

const HeaderContainer = styled.View(({ theme }) => ({
  height: 50,
  flexDirection: 'row',
  paddingHorizontal: 20,
  backgroundColor: theme.color.header.background,
}));

const LeftContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
}));

const TitleContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

const RightContainer = styled.View(() => ({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const Icon = styled.Image({
  width: 16,
  height: 16,
});

interface IIconHeader {
  title: ReactNode;
  backIcon?: boolean;
  onBackPress?: (() => void) | undefined;
  one?: ImageSourcePropType;
  onOnePress?: (() => void) | undefined;
  two?: ImageSourcePropType;
  onTwoPress?: (() => void) | undefined;
}

const IconHeader: FC<IIconHeader> = ({
  title,
  backIcon,
  onBackPress,
  one,
  onOnePress,
  two,
  onTwoPress,
}) => {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <LeftContainer>
        {backIcon && (
          <TouchableWithoutFeedback onPress={onBackPress}>
            <Icon
              source={
                theme.name === 'lightTheme'
                  ? theme.icon.back_arrow_black
                  : theme.icon.back_arrow_white
              }
            />
          </TouchableWithoutFeedback>
        )}
      </LeftContainer>

      <TitleContainer>
        {title && (
          <StyledText isBlod fontSize={15} color={theme.color.text}>
            {title}
          </StyledText>
        )}
      </TitleContainer>

      <RightContainer>
        {one && (
          <TouchableWithoutFeedback onPress={onOnePress}>
            <Icon source={one} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {two && (
          <TouchableWithoutFeedback onPress={onTwoPress}>
            <Icon source={two} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
      </RightContainer>
    </HeaderContainer>
  );
};

export default memo(IconHeader);
