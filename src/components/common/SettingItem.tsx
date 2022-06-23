import { FC, memo } from 'react';
import { Pressable } from 'react-native';
import { useTheme } from '@emotion/react';

import StyledText from './StyledText';

interface ISettings {
  title: string;
  onPress: (title: string) => () => void;
}

const Settings: FC<ISettings> = ({ title, onPress }) => {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress(title)} style={{ flex: 1 }}>
      <StyledText
        fontSize={14}
        color={theme.color.text}
        marginLeft={20}
        marginTop={15}
        marginBottom={15}
      >
        {title}
      </StyledText>
    </Pressable>
  );
};

export default memo(Settings);
