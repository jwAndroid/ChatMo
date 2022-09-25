import { memo, useMemo } from 'react';
import { useTheme } from '@emotion/react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Statistics } from '../components/statistic';
import { RoomEntity } from '../../model';
import { Room } from '../components/memos';

type RootStackParamList = {
  Statistics: undefined;
  Room: RoomEntity | undefined;
};

export type StatisticsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Statistics'
>;
export type StatisticsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Statistics'
>;

export type RoomScreenRouteProp = RouteProp<RootStackParamList, 'Room'>;
export type RoomScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Room'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StatisticsStack = () => {
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
      <Screen name="Statistics" component={Statistics} />

      <Screen name="Room" component={Room} />
    </Navigator>
  );
};

export default memo(StatisticsStack);
