import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Statistics } from '../components/statistic';

type RootStackParamList = {
  Statistics: undefined;
};

export type StatisticsScreenRouteProp = RouteProp<
  RootStackParamList,
  'Statistics'
>;
export type StatisticsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Statistics'
>;

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StatisticsStack = () => {
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      headerShown: false,
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
};

export default memo(StatisticsStack);
