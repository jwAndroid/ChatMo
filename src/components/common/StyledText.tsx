import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

interface IEmotionText {
  fontSize?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  isBlod?: boolean;
}

const EmotionText = styled.Text<IEmotionText>(
  ({
    theme,
    fontSize,
    isBlod,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  }) => ({
    color: theme.color.text,
    fontSize,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    fontFamily: isBlod
      ? theme.font.YoonGothicBold
      : theme.font.YoonGothicRegular,
  })
);

interface IStyledText {
  children: ReactNode;
  fontSize?: number;
  isBlod?: boolean;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}

const StyledText: FC<IStyledText> = ({
  children,
  fontSize,
  isBlod = false,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) => {
  return (
    <EmotionText
      fontSize={fontSize}
      isBlod={isBlod}
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
