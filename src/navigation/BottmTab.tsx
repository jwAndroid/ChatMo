import { memo, useMemo } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MemosStack, StatisticsStack, SettingStack } from '../screens/stacks';

const { Navigator, Screen } = createBottomTabNavigator();

const BottmTab = () => {
  const screenOptions = useMemo<BottomTabNavigationOptions>(
    () => ({
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarLabelStyle: {
        fontWeight: '700',
        fontSize: 15,
      },
      tabBarIconStyle: { display: 'none' },
      tabBarStyle: {
        height: 56,
        backgroundColor: '#303030',
      },
      tabBarHideOnKeyboard: true,
    }),
    []
  );

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="MemosStack"
        component={MemosStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Memo';

          return {
            tabBarStyle: {
              display: routeName === 'Memo' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '메모',
          };
        }}
      />

      <Screen
        name="StatisticsStack"
        component={StatisticsStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Statistics';

          return {
            tabBarStyle: {
              display: routeName === 'Statistics' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '통계',
          };
        }}
      />

      <Screen
        name="SettingStack"
        component={SettingStack}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Setting';

          return {
            tabBarStyle: {
              display: routeName === 'Setting' ? 'flex' : 'none',
              height: 60,
              backgroundColor: '#303030',
            },
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarLabel: '세팅',
          };
        }}
      />
    </Navigator>
  );
};

export default memo(BottmTab);
