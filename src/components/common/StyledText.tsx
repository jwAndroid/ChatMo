import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IEmotionText {
  fontSize: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}

const EmotionText = styled.Text<IEmotionText>(
  ({ theme, fontSize, marginLeft, marginRight, marginTop, marginBottom }) => ({
    color: theme.color.black,
    fontSize,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    fontFamily: theme.font.YoonGothicRegular,
  })
);

interface IStyledText {
  children: ReactNode;
  fontSize?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}

const StyledText: FC<IStyledText> = ({
  children,
  fontSize = 16,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) => {
  return (
    <EmotionText
      fontSize={fontSize}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </EmotionText>
  );
};

export default memo(StyledText);
