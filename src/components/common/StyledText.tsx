import { FC, memo, ReactNode } from 'react';
import styled from '@emotion/native';

const EmotionText = styled.Text(({ theme }) => ({
  color: theme.text,
  fontSize: 16,
}));

interface IStyledText {
  children: ReactNode;
}

const StyledText: FC<IStyledText> = ({ children }) => {
  return <EmotionText>{children}</EmotionText>;
};

export default memo(StyledText);
