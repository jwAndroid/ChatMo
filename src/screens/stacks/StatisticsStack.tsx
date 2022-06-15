import { memo, useMemo } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  CardStyleInterpolators,
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
      headerStyle: {
        height: 50,
        backgroundColor: '#303030',
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTintColor: '#fff',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
