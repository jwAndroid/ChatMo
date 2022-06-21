import { FC, memo, ReactNode, useMemo } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Day, DayProps, IMessage } from 'react-native-gifted-chat';
import { useTheme } from '@emotion/react';

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
    return { marginTop: 0, marginBottom: 10 };
  }, []);

  const wrapperStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return {
      paddingVertical: 2,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: theme.color.sky_300,
    };
  }, [theme.color.sky_300]);

  const textStyle = useMemo<StyleProp<TextStyle>>(() => {
    return {
      fontSize: 12,
      textAlignVertical: 'center',
      includeFontPadding: false,
      fontFamily: theme.font.YoonGothicRegular,
      color: theme.color.white,
    };
  }, [theme.color.white, theme.font.YoonGothicRegular]);

  return (
    <Day
      {...props}
      containerStyle={containerStyle}
      wrapperStyle={wrapperStyle}
      textStyle={textStyle}
      dateFormat={`YYYY년 M월 D일 ${weeks[new Date().getDay()]}`}
    />
  );
};

export default memo(DayHeader);
