import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Memo, Room } from '../components/memos';
import { RoomEntity } from '../../entity';

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
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Memo" component={Memo} />

      <Screen name="Room" component={Room} />
    </Navigator>
  );
};

export default memo(MemoStack);
