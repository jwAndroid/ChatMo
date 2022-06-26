import { FC, memo, ReactNode, useMemo } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '@emotion/react';
import { Day, DayProps, IMessage } from 'react-native-gifted-chat';

const weeks = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

interface IDayHeader {
  props: Readonly<DayProps<IMessage>> & Readonly<{ children?: ReactNode }>;
}

const DayHeader: FC<IDayHeader> = ({ props }) => {
  const theme = useTheme();

  const containerStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return { marginTop: 10, marginBottom: 10 };
  }, []);

  const textStyle = useMemo<StyleProp<TextStyle>>(() => {
    return {
      fontSize: 12,
      textAlignVertical: 'center',
      includeFontPadding: false,
      fontFamily: theme.font.YoonGothicRegular,
      color: theme.color.item.text,
      fontWeight: '500',
    };
  }, [theme.color.item.text, theme.font.YoonGothicRegular]);

  return (
    <Day
      {...props}
      containerStyle={containerStyle}
      textStyle={textStyle}
      dateFormat={`YYYY년 M월 D일 ${weeks[new Date().getDay()]}`}
    />
  );
};

export default memo(DayHeader);
