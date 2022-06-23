import { useTheme } from '@emotion/react';
import { FC, memo } from 'react';
import StyledText from './StyledText';

interface ISettings {
  title: string;
  onPress: (title: string) => () => void;
}

const Settings: FC<ISettings> = ({ title, onPress }) => {
  const theme = useTheme();

  return (
    <StyledText
      fontSize={14}
      color={theme.color.text}
      marginLeft={20}
      marginTop={15}
      marginBottom={15}
      onPress={onPress(title)}
    >
      {title}
    </StyledText>
  );
};

export default memo(Settings);
