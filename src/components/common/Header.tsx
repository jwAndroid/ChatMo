import { FC, memo, ReactNode } from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from '@emotion/native';

import StyledText from './StyledText';

const Container = styled.View(() => ({
  flexDirection: 'row',
  width: '100%',
  height: 60,
  backgroundColor: 'gray',
  alignItems: 'center',
}));

const Icon = styled.Image(() => ({
  width: 28,
  height: 28,
  marginLeft: 7,
}));

const LeftContainer = styled.View(() => ({
  flex: 1,
  alignItems: 'center',
  flexDirection: 'row',
  paddingLeft: 13,
}));

const RrightContainer = styled.View(() => ({
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'row',
  paddingRight: 20,
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
  four?: ImageSourcePropType;
  fourOnPress?: (event: GestureResponderEvent) => void;
}

const Header: FC<IHeader> = ({
  title,
  backIcon,
  backOnPress,
  one,
  oneOnPress,
  two,
  twoOnPress,
  three,
  threeOnPress,
  four,
  fourOnPress,
}) => {
  return (
    <Container>
      <LeftContainer>
        <TouchableWithoutFeedback onPress={backOnPress}>
          {backIcon && <Icon source={backIcon} resizeMode="contain" />}
        </TouchableWithoutFeedback>

        <StyledText fontSize={18} marginLeft={15}>
          {title}
        </StyledText>
      </LeftContainer>

      <RrightContainer>
        {one && (
          <TouchableWithoutFeedback onPress={oneOnPress}>
            <Icon source={one} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {two && (
          <TouchableWithoutFeedback onPress={twoOnPress}>
            <Icon source={two} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {three && (
          <TouchableWithoutFeedback onPress={threeOnPress}>
            <Icon source={three} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
        {four && (
          <TouchableWithoutFeedback onPress={fourOnPress}>
            <Icon source={four} resizeMode="contain" />
          </TouchableWithoutFeedback>
        )}
      </RrightContainer>
    </Container>
  );
};

export default memo(Header);
