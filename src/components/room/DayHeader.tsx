import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { FC, memo } from 'react';
import { StyledText } from '../common/text';

const Container = styled.View(({ theme }) => ({
  flex: 1,
  marginVertical: 1,
  paddingVertical: 3,
  paddingHorizontal: 25,
  borderRadius: 5,
  backgroundColor: theme.color.sky_300,
}));

interface IDayHeader {
  day: string;
}

const DayHeader: FC<IDayHeader> = ({ day }) => {
  const theme = useTheme();

  return (
    <Container>
      <StyledText fontSize={12} color={theme.color.white} isBlod>
        {day}
      </StyledText>
    </Container>
  );
};

export default memo(DayHeader);
