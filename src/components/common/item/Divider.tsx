import { FC, memo } from 'react';
import styled from '@emotion/native';

const HorizontalDivider = styled.View(({ theme }) => ({
  width: '100%',
  height: 1,
  backgroundColor: theme.color.divider,
}));

const VerticalDivider = styled.View(({ theme }) => ({
  width: 1,
  height: '100%',
  backgroundColor: theme.color.divider,
}));

interface IDivider {
  isVertical?: boolean;
}

const Divider: FC<IDivider> = ({ isVertical = false }) => {
  return isVertical ? <VerticalDivider /> : <HorizontalDivider />;
};

export default memo(Divider);
