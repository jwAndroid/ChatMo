import { memo, useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Memo, Room } from '../components/memos';
import { RoomEntity } from '../../model';

type RootStackParamList = {
  Memo: undefined;
  Room: RoomEntity | undefined;
};

export type MemoScreenRouteProp = RouteProp<RootStackParamList, 'Memo'>;
export type MemoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Memo'
>;

export type RoomScreenRouteProp = RouteProp<RootStackParamList, 'Room'>;
export type RoomScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Room'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const MemoStack = () => {
  const theme = useTheme();

  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
      cardStyle: { backgroundColor: theme.color.header.background },
    }),
    [theme.color.header.background]
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Memo" component={Memo} />

      <Screen name="Room" component={Room} />
    </Navigator>
  );
};

export default memo(MemoStack);
